import { createFileRoute } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'
import Header from '@/components/Header'
import { Download, Send, FileText } from 'lucide-react'
import { sendOrderEmail } from '@/lib/mail'

export const Route = createFileRoute('/order')({
  component: OrderPage,
})

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'] as const
type Size = (typeof SIZES)[number]

interface OrderData {
  // Customer
  customerName: string
  companyName: string
  phone: string
  email: string
  address: string

  // Product
  productType: string
  sizes: Record<Size, string>

  // Print
  printDetails: string

  // Price
  pricePerPiece: string
  advancePayment: string
  paymentTerms: string

  // Delivery
  deliveryTime: string
}

const INITIAL: OrderData = {
  customerName: '', companyName: '', phone: '', email: '', address: '',
  productType: '',
  sizes: { XS: '', S: '', M: '', L: '', XL: '', XXL: '', XXXL: '' },
  printDetails: '',
  pricePerPiece: '', advancePayment: '', paymentTerms: '',
  deliveryTime: '',
}

function OrderPage() {
  const [form, setForm] = useState<OrderData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // Derived calculations
  const totalQty = SIZES.reduce((sum, s) => sum + (parseInt(form.sizes[s]) || 0), 0)
  const priceNum = parseFloat(form.pricePerPiece) || 0
  const totalAmount = priceNum * totalQty
  const advanceNum = parseFloat(form.advancePayment) || 0
  const balanceAmount = totalAmount - advanceNum

  const set = (field: keyof Omit<OrderData, 'sizes'>, value: string) =>
    setForm((f) => ({ ...f, [field]: value }))
  const setSize = (size: Size, value: string) =>
    setForm((f) => ({ ...f, sizes: { ...f.sizes, [size]: value } }))


  // ─── Download as CSV (Excel-compatible) ─────────────────
  const downloadCSV = () => {
    const rows = [
      ['ARVESTA CLOTHING — ORDER FORM', ''],
      ['', ''],
      ['CUSTOMER DETAILS', ''],
      ['Customer Name', form.customerName],
      ['Company Name', form.companyName],
      ['Phone', form.phone],
      ['Email', form.email],
      ['Address', form.address],
      ['', ''],
      ['PRODUCT DETAILS', ''],
      ['Product Type', form.productType],
      ...SIZES.map((s) => [`Size ${s}`, form.sizes[s] || '0']),
      ['Total Quantity', totalQty.toString()],
      ['', ''],
      ['PRINT DETAILS', ''],
      ['Logo/Design Details', form.printDetails],
      ['', ''],
      ['PRICE & PAYMENT', ''],
      ['Price Per Piece (₹)', form.pricePerPiece],
      ['Total Quantity', totalQty.toString()],
      ['Total Amount (₹)', totalAmount.toFixed(2)],
      ['Advance Payment (₹)', form.advancePayment],
      ['Balance Amount (₹)', balanceAmount.toFixed(2)],
      ['Payment Terms', form.paymentTerms],
      ['', ''],
      ['DELIVERY', ''],
      ['Delivery Time', form.deliveryTime],
    ]
    const csv = rows.map((r) => r.map((c) => `"${c}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `arvesta-order-${form.customerName || 'form'}-${Date.now()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  // ─── Download as Word (HTML doc) ────────────────────────
  const downloadWord = () => {
    const html = `
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"/><title>Arvesta Clothing Order</title>
<style>
body { font-family: Calibri, sans-serif; margin: 40px; }
h1 { color: #C41E3A; font-size: 22pt; }
h2 { color: #333; font-size: 14pt; border-bottom: 2px solid #C41E3A; padding-bottom: 4px; margin-top: 24px; }
table { width: 100%; border-collapse: collapse; margin-top: 8px; }
td { padding: 6px 10px; border: 1px solid #ddd; font-size: 11pt; }
td:first-child { font-weight: bold; color: #555; width: 200px; }
.total { background: #fff3f3; font-weight: bold; }
</style>
</head>
<body>
<h1>Arvesta Clothing — Order Form</h1>
<h2>Customer Details</h2>
<table>
<tr><td>Customer Name</td><td>${form.customerName}</td></tr>
<tr><td>Company Name</td><td>${form.companyName}</td></tr>
<tr><td>Phone</td><td>${form.phone}</td></tr>
<tr><td>Email</td><td>${form.email}</td></tr>
<tr><td>Address</td><td>${form.address}</td></tr>
</table>
<h2>Product Details</h2>
<table>
<tr><td>Product Type</td><td>${form.productType}</td></tr>
${SIZES.map((s) => `<tr><td>Size ${s}</td><td>${form.sizes[s] || '0'}</td></tr>`).join('')}
<tr class="total"><td>Total Quantity</td><td>${totalQty}</td></tr>
</table>
<h2>Print Details</h2>
<table>
<tr><td>Logo/Design Details</td><td>${form.printDetails}</td></tr>
</table>
<h2>Price &amp; Payment</h2>
<table>
<tr><td>Price Per Piece</td><td>₹${form.pricePerPiece}</td></tr>
<tr><td>Total Quantity</td><td>${totalQty}</td></tr>
<tr class="total"><td>Total Amount</td><td>₹${totalAmount.toFixed(2)}</td></tr>
<tr><td>Advance Payment</td><td>₹${form.advancePayment}</td></tr>
<tr class="total"><td>Balance Amount</td><td>₹${balanceAmount.toFixed(2)}</td></tr>
<tr><td>Payment Terms</td><td>${form.paymentTerms}</td></tr>
</table>
<h2>Delivery</h2>
<table>
<tr><td>Delivery Time</td><td>${form.deliveryTime}</td></tr>
</table>
</body></html>`
    const blob = new Blob([html], { type: 'application/msword' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `arvesta-order-${form.customerName || 'form'}-${Date.now()}.doc`
    a.click()
    URL.revokeObjectURL(url)
  }

  // ─── Submit via SMTP Server Function ───────────────────
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const payload = {
      customerName: form.customerName,
      companyName: form.companyName,
      phone: form.phone,
      email: form.email,
      address: form.address,
      productType: form.productType,
      sizes: { ...form.sizes },
      totalQty,
      printDetails: form.printDetails,
      pricePerPiece: form.pricePerPiece,
      totalAmount: totalAmount.toFixed(2),
      advancePayment: form.advancePayment,
      balanceAmount: balanceAmount.toFixed(2),
      paymentTerms: form.paymentTerms,
      deliveryTime: form.deliveryTime,
    }

    try {
      const result = await sendOrderEmail({ data: payload })
      
      if (result && result.success) {
        setSubmitted(true)
      } else {
        alert('Error sending order: ' + (result.error || 'Please try again.'))
      }
    } catch (err) {
      console.error(err)
      alert('Network error. Please check your connection.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main style={{ background: 'var(--bg)', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem' }}>
          <div className="text-center" style={{ maxWidth: '500px' }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(196,30,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <Send size={32} style={{ color: 'var(--accent)' }} />
            </div>
            <h2 style={{ color: 'var(--text)', fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', letterSpacing: '0.05em', margin: '0 0 1rem' }}>Order Submitted!</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
              Your order details have been submitted.
              We'll get back to you within 24 hours. Download a copy of your order below.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button onClick={downloadCSV} className="btn-primary" style={{ fontSize: '0.875rem' }}>
                <Download size={16} /> Download Excel (CSV)
              </button>
              <button onClick={downloadWord} className="btn-outline" style={{ fontSize: '0.875rem' }}>
                <FileText size={16} /> Download Word
              </button>
            </div>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main style={{ background: 'var(--bg)', padding: '0 0 5rem' }}>
        {/* Page Header */}
        <section style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '3.5rem 0' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="section-label">Order Submission</p>
            <h1 className="section-title">Order Form</h1>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>
              Fill out the order form below. On submission, the details will be emailed to us and you can download a copy in Excel or Word format.
            </p>
          </div>
        </section>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 sm:px-6 pt-10" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {/* ── Customer Details ── */}
          <section>
            <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
              Customer Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Customer Name *', field: 'customerName' as const, required: true, placeholder: 'Full name' },
                { label: 'Company / Organisation', field: 'companyName' as const, required: false, placeholder: 'Company name (if applicable)' },
                { label: 'Phone Number *', field: 'phone' as const, required: true, placeholder: '9xxxxxxxxx' },
                { label: 'Email Address', field: 'email' as const, required: false, placeholder: 'you@example.com' },
              ].map(({ label, field, required, placeholder }) => (
                <div key={field}>
                  <label className="form-label">{label}</label>
                  <input className="form-input" required={required} placeholder={placeholder} value={form[field]} onChange={(e) => set(field, e.target.value)} />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="form-label">Address</label>
                <textarea className="form-input" rows={2} placeholder="Delivery address" value={form.address} onChange={(e) => set('address', e.target.value)} style={{ resize: 'vertical' }} />
              </div>
            </div>
          </section>

          {/* ── Product Details ── */}
          <section>
            <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
              Product Details
            </h2>
            <div className="mb-4">
              <label className="form-label">Product Type *</label>
              <select className="form-input" required value={form.productType} onChange={(e) => set('productType', e.target.value)}>
                <option value="">Select product type</option>
                <option value="Polo Plain">Polo Plain</option>
                <option value="Polo Custom">Polo Custom</option>
                <option value="Round Neck Plain">Round Neck Plain</option>
                <option value="Round Neck Custom">Round Neck Custom</option>
              </select>
            </div>

            <label className="form-label" style={{ display: 'block', marginBottom: '0.75rem' }}>Size Breakdown — Quantities</label>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 mb-4">
              {SIZES.map((size) => (
                <div key={size}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4px' }}>{size}</label>
                  <input
                    className="form-input"
                    type="number" min="0" placeholder="0"
                    value={form.sizes[size]}
                    onChange={(e) => setSize(size, e.target.value)}
                    style={{ textAlign: 'center', padding: '0.6rem 0.25rem' }}
                  />
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '0.875rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Total Quantity</span>
              <span style={{ color: 'var(--accent)', fontSize: '1.25rem', fontWeight: 800 }}>{totalQty}</span>
            </div>
          </section>

          {/* ── Print Details ── */}
          <section>
            <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
              Print Details
            </h2>
            <div className="mb-4">
              <label className="form-label">Logo / Design Description</label>
              <textarea className="form-input" rows={3} placeholder="Describe your logo or design (colors, text, placement instructions...)" value={form.printDetails} onChange={(e) => set('printDetails', e.target.value)} style={{ resize: 'vertical' }} />
            </div>

            <div>
              <label className="form-label">Attach Logo / Design File</label>
              <div
                style={{
                  border: `2px dashed var(--border)`,
                  borderRadius: '6px', background: 'var(--surface)', padding: '2rem', textAlign: 'center',
                }}
              >
                <div>
                  <p style={{ color: 'var(--accent)', fontWeight: 600, margin: '0 0 0.25rem' }}>Please share the design separately on WhatsApp</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0 }}>Accepted: PNG, JPEG, BMP</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Price & Payment ── */}
          <section>
            <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
              Price &amp; Payment
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Price Per Piece (₹)</label>
                <input className="form-input" type="number" min="0" step="0.01" placeholder="0.00" value={form.pricePerPiece} onChange={(e) => set('pricePerPiece', e.target.value)} />
              </div>
              <div>
                <label className="form-label">Total Quantity</label>
                <input className="form-input" type="number" readOnly value={totalQty} style={{ background: 'var(--surface)', cursor: 'default' }} />
              </div>
              <div>
                <label className="form-label">Total Amount (₹) — Auto</label>
                <input className="form-input" type="text" readOnly value={totalAmount > 0 ? `₹ ${totalAmount.toFixed(2)}` : ''} placeholder="Auto-calculated" style={{ background: 'var(--surface)', cursor: 'default', fontWeight: 700, color: 'var(--accent)' }} />
              </div>
              <div>
                <label className="form-label">Advance Payment (₹)</label>
                <input className="form-input" type="number" min="0" step="0.01" placeholder="0.00" value={form.advancePayment} onChange={(e) => set('advancePayment', e.target.value)} />
              </div>
              <div>
                <label className="form-label">Balance Amount (₹) — Auto</label>
                <input className="form-input" type="text" readOnly value={totalAmount > 0 ? `₹ ${balanceAmount.toFixed(2)}` : ''} placeholder="Auto-calculated" style={{ background: 'var(--surface)', cursor: 'default', fontWeight: 700, color: balanceAmount >= 0 ? 'var(--accent)' : '#e53e3e' }} />
              </div>
              <div>
                <label className="form-label">Payment Terms</label>
                <input className="form-input" placeholder="e.g. 50% advance, 50% on delivery" value={form.paymentTerms} onChange={(e) => set('paymentTerms', e.target.value)} />
              </div>
            </div>
          </section>

          {/* ── Delivery ── */}
          <section>
            <h2 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '2px solid var(--accent)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
              Delivery
            </h2>
            <div>
              <label className="form-label">Expected Delivery Time</label>
              <input className="form-input" placeholder="e.g. 7–10 business days, or specific date" value={form.deliveryTime} onChange={(e) => set('deliveryTime', e.target.value)} />
            </div>
          </section>

          {/* ── Actions ── */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingBottom: '2rem' }}>
            <button type="submit" className="btn-primary" disabled={submitting} style={{ flex: 1, minWidth: '200px', justifyContent: 'center', opacity: submitting ? 0.7 : 1 }}>
              <Send size={16} />
              {submitting ? 'Submitting…' : 'Submit Order'}
            </button>
            <button type="button" onClick={downloadCSV} className="btn-outline" style={{ justifyContent: 'center' }}>
              <Download size={16} /> Excel (CSV)
            </button>
            <button type="button" onClick={downloadWord} className="btn-outline" style={{ justifyContent: 'center' }}>
              <FileText size={16} /> Word
            </button>
          </div>
        </form>
      </main>
    </>
  )
}
