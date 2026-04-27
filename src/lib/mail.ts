import { createServerFn } from '@tanstack/react-start'

export interface OrderPayload {
  customerName: string
  companyName: string
  phone: string
  email: string
  address: string
  productType: string
  sizes: Record<string, string>
  totalQty: number
  printDetails: string
  pricePerPiece: string
  totalAmount: string
  advancePayment: string
  balanceAmount: string
  paymentTerms: string
  deliveryTime: string
  fabricType: string
  gsm: string
  logoFileName?: string
}

export const sendOrderEmail = createServerFn({ method: 'POST' })
  .inputValidator((d: OrderPayload) => d)
  .handler(async ({ data }) => {
    const nodemailer = await import('nodemailer')

    const transporter = nodemailer.default.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const sizeRows = Object.entries(data.sizes)
      .map(([_size, qty]) => `<td style="padding:6px 10px; text-align:center;">${qty || '0'}</td>`)
      .join('')

    const sizeHeaders = Object.keys(data.sizes)
      .map((size) => `<th style="padding:6px 10px; background:#f9f9f9;">${size}</th>`)
      .join('')

    const htmlContent = `
      <div style="font-family: Calibri, sans-serif; color: #333; max-width: 620px; margin: 0 auto; border: 1px solid #ddd; border-radius: 6px; overflow: hidden;">
        <div style="background: #C41E3A; padding: 20px 24px;">
          <h2 style="margin:0; color: white; font-size: 20px;">&#128230; New Order — Arvesta Clothing</h2>
        </div>
        <div style="padding: 24px;">

          <h3 style="border-bottom: 2px solid #C41E3A; padding-bottom: 6px; color: #C41E3A;">Customer Details</h3>
          <table style="width:100%; border-collapse:collapse; margin-bottom:16px;">
            <tr><td style="padding:5px 8px; font-weight:bold; width:160px; color:#555;">Name</td><td>${data.customerName}</td></tr>
            <tr style="background:#fafafa;"><td style="padding:5px 8px; font-weight:bold; color:#555;">Company</td><td>${data.companyName || 'N/A'}</td></tr>
            <tr><td style="padding:5px 8px; font-weight:bold; color:#555;">Phone</td><td>${data.phone}</td></tr>
            <tr style="background:#fafafa;"><td style="padding:5px 8px; font-weight:bold; color:#555;">Email</td><td>${data.email || 'N/A'}</td></tr>
            <tr><td style="padding:5px 8px; font-weight:bold; color:#555;">Address</td><td>${data.address || 'N/A'}</td></tr>
          </table>

          <h3 style="border-bottom: 2px solid #C41E3A; padding-bottom: 6px; color: #C41E3A;">Product & Sizes</h3>
          <p><strong>Product Type:</strong> ${data.productType}</p>
          <table style="width:100%; border-collapse:collapse; border:1px solid #ddd; margin-bottom:8px;">
            <tr>${sizeHeaders}</tr>
            <tr>${sizeRows}</tr>
          </table>
          <p><strong>Total Quantity:</strong> ${data.totalQty}</p>
          <p><strong>Fabric Type:</strong> ${data.fabricType || 'N/A'}</p>
          <p><strong>GSM:</strong> ${data.gsm || 'N/A'}</p>

          <h3 style="border-bottom: 2px solid #C41E3A; padding-bottom: 6px; color: #C41E3A;">Design Details</h3>
          <p>${data.printDetails || 'No details provided'}</p>
          <p><strong>Logo File:</strong> ${data.logoFileName || 'Not attached — please share on WhatsApp'}</p>

          <h3 style="border-bottom: 2px solid #C41E3A; padding-bottom: 6px; color: #C41E3A;">Payment & Delivery</h3>
          <table style="width:100%; border-collapse:collapse; margin-bottom:16px;">
            <tr><td style="padding:5px 8px; font-weight:bold; width:160px; color:#555;">Price / Piece</td><td>&#8377; ${data.pricePerPiece}</td></tr>
            <tr style="background:#fafafa;"><td style="padding:5px 8px; font-weight:bold; color:#555;">Total Amount</td><td style="color:#C41E3A; font-weight:bold;">&#8377; ${data.totalAmount}</td></tr>
            <tr><td style="padding:5px 8px; font-weight:bold; color:#555;">Advance Paid</td><td>&#8377; ${data.advancePayment}</td></tr>
            <tr style="background:#fafafa;"><td style="padding:5px 8px; font-weight:bold; color:#555;">Balance</td><td>&#8377; ${data.balanceAmount}</td></tr>
            <tr><td style="padding:5px 8px; font-weight:bold; color:#555;">Payment Terms</td><td>${data.paymentTerms}</td></tr>
            <tr style="background:#fafafa;"><td style="padding:5px 8px; font-weight:bold; color:#555;">Delivery Time</td><td>${data.deliveryTime}</td></tr>
          </table>

        </div>
        <div style="background:#f5f5f5; padding:12px 24px; font-size:12px; color:#888; text-align:center;">
          Sent from the Arvesta Clothing website order form
        </div>
      </div>
    `

    try {
      await transporter.sendMail({
        from: `"Arvesta Website" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: `New Order: ${data.customerName} — ${data.productType} (Qty: ${data.totalQty})`,
        html: htmlContent,
      })
      return { success: true }
    } catch (error) {
      console.error('Email error:', error)
      return { success: false, error: (error as Error).message }
    }
  })
