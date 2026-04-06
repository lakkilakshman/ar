import { createFileRoute, Link } from '@tanstack/react-router'
import Header from '@/components/Header'
import { MessageCircle, ArrowRight, Shirt } from 'lucide-react'

export const Route = createFileRoute('/products/')({
  component: ProductsPage,
})

const WA_URL = 'https://wa.me/919421612355'

// ─── T-Shirt SVG Components ────────────────────────────────
function PoloPlainFront() {
  return (
    <svg viewBox="0 0 200 240" fill="none" className="w-full">
      <path d="M55 55 L18 78 L34 138 L56 126 L56 210 L144 210 L144 126 L166 138 L182 78 L145 55 L128 32 Q100 18 72 32 Z" fill="var(--surface)" stroke="var(--border)" strokeWidth="2.5"/>
      <path d="M72 32 Q100 48 128 32 Q114 58 100 62 Q86 58 72 32Z" fill="var(--border)" stroke="var(--border)" strokeWidth="1"/>
      <line x1="100" y1="62" x2="100" y2="108" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4,3"/>
      <circle cx="100" cy="74" r="2" fill="var(--border)"/>
      <circle cx="100" cy="86" r="2" fill="var(--border)"/>
      <circle cx="100" cy="98" r="2" fill="var(--border)"/>
    </svg>
  )
}

function PoloPlainBack() {
  return (
    <svg viewBox="0 0 200 240" fill="none" className="w-full">
      <path d="M55 55 L18 78 L34 138 L56 126 L56 210 L144 210 L144 126 L166 138 L182 78 L145 55 L128 32 Q100 18 72 32 Z" fill="var(--surface)" stroke="var(--border)" strokeWidth="2.5"/>
      <path d="M72 32 Q100 44 128 32 Q114 54 100 56 Q86 54 72 32Z" fill="var(--border)" stroke="var(--border)" strokeWidth="1"/>
    </svg>
  )
}

function PoloCustomFront() {
  return (
    <svg viewBox="0 0 200 240" fill="none" className="w-full">
      <path d="M55 55 L18 78 L34 138 L56 126 L56 210 L144 210 L144 126 L166 138 L182 78 L145 55 L128 32 Q100 18 72 32 Z" fill="var(--surface)" stroke="var(--border)" strokeWidth="2.5"/>
      <path d="M72 32 Q100 48 128 32 Q114 58 100 62 Q86 58 72 32Z" fill="var(--border)" stroke="var(--border)" strokeWidth="1"/>
      <line x1="100" y1="62" x2="100" y2="108" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4,3"/>
      {/* Logo square — left chest */}
      <rect x="66" y="82" width="26" height="26" rx="3" fill="rgba(196,30,58,0.08)" stroke="var(--accent)" strokeWidth="2"/>
      <text x="79" y="98" textAnchor="middle" fontSize="6" fill="var(--accent)" fontFamily="sans-serif" fontWeight="bold">LOGO</text>
    </svg>
  )
}

function PoloCustomBack() {
  return (
    <svg viewBox="0 0 200 240" fill="none" className="w-full">
      <path d="M55 55 L18 78 L34 138 L56 126 L56 210 L144 210 L144 126 L166 138 L182 78 L145 55 L128 32 Q100 18 72 32 Z" fill="var(--surface)" stroke="var(--border)" strokeWidth="2.5"/>
      <path d="M72 32 Q100 44 128 32 Q114 54 100 56 Q86 54 72 32Z" fill="var(--border)" stroke="var(--border)" strokeWidth="1"/>
      {/* Logo rectangle — back */}
      <rect x="64" y="76" width="72" height="48" rx="3" fill="rgba(196,30,58,0.08)" stroke="var(--accent)" strokeWidth="2"/>
      <text x="100" y="104" textAnchor="middle" fontSize="7.5" fill="var(--accent)" fontFamily="sans-serif" fontWeight="bold">BACK LOGO</text>
    </svg>
  )
}

function RoundPlainFront() {
  return (
    <svg viewBox="0 0 200 240" fill="none" className="w-full">
      <path d="M55 55 L18 78 L34 138 L56 126 L56 210 L144 210 L144 126 L166 138 L182 78 L145 55 L128 32 Q100 14 72 32 Z" fill="var(--surface)" stroke="var(--border)" strokeWidth="2.5"/>
      <ellipse cx="100" cy="42" rx="24" ry="16" fill="var(--border)" stroke="var(--border)" strokeWidth="1"/>
      <ellipse cx="100" cy="46" rx="17" ry="11" fill="var(--surface)"/>
    </svg>
  )
}

function RoundPlainBack() {
  return (
    <svg viewBox="0 0 200 240" fill="none" className="w-full">
      <path d="M55 55 L18 78 L34 138 L56 126 L56 210 L144 210 L144 126 L166 138 L182 78 L145 55 L128 32 Q100 14 72 32 Z" fill="var(--surface)" stroke="var(--border)" strokeWidth="2.5"/>
      <ellipse cx="100" cy="42" rx="24" ry="16" fill="var(--border)" stroke="var(--border)" strokeWidth="1"/>
      <ellipse cx="100" cy="46" rx="17" ry="11" fill="var(--surface)"/>
    </svg>
  )
}

function RoundCustomFront() {
  return (
    <svg viewBox="0 0 200 240" fill="none" className="w-full">
      <path d="M55 55 L18 78 L34 138 L56 126 L56 210 L144 210 L144 126 L166 138 L182 78 L145 55 L128 32 Q100 14 72 32 Z" fill="var(--surface)" stroke="var(--border)" strokeWidth="2.5"/>
      <ellipse cx="100" cy="42" rx="24" ry="16" fill="var(--border)" stroke="var(--border)" strokeWidth="1"/>
      <ellipse cx="100" cy="46" rx="17" ry="11" fill="var(--surface)"/>
      <rect x="66" y="82" width="26" height="26" rx="3" fill="rgba(196,30,58,0.08)" stroke="var(--accent)" strokeWidth="2"/>
      <text x="79" y="98" textAnchor="middle" fontSize="6" fill="var(--accent)" fontFamily="sans-serif" fontWeight="bold">LOGO</text>
    </svg>
  )
}

function RoundCustomBack() {
  return (
    <svg viewBox="0 0 200 240" fill="none" className="w-full">
      <path d="M55 55 L18 78 L34 138 L56 126 L56 210 L144 210 L144 126 L166 138 L182 78 L145 55 L128 32 Q100 14 72 32 Z" fill="var(--surface)" stroke="var(--border)" strokeWidth="2.5"/>
      <ellipse cx="100" cy="42" rx="24" ry="16" fill="var(--border)" stroke="var(--border)" strokeWidth="1"/>
      <ellipse cx="100" cy="46" rx="17" ry="11" fill="var(--surface)"/>
      <rect x="64" y="76" width="72" height="48" rx="3" fill="rgba(196,30,58,0.08)" stroke="var(--accent)" strokeWidth="2"/>
      <text x="100" y="104" textAnchor="middle" fontSize="7.5" fill="var(--accent)" fontFamily="sans-serif" fontWeight="bold">BACK LOGO</text>
    </svg>
  )
}

// ─── Product Card ──────────────────────────────────────────
function ProductCard({
  title, category, description, front, back,
}: {
  title: string
  category: string
  description: string
  front: React.ReactNode
  back: React.ReactNode
}) {
  return (
    <div className="card overflow-hidden">
      {/* Images */}
      <div className="grid grid-cols-2" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="relative bg-[var(--surface)] border-r border-[var(--border)] overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <div className="w-full h-full flex items-center justify-center [&>svg]:max-w-[120px] [&>svg]:w-full [&>svg]:p-4 [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:absolute [&>img]:inset-0">
            {front}
          </div>
          <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-[0.65rem] tracking-widest uppercase font-bold text-white bg-black/30 backdrop-blur-md px-3 py-1 rounded-full z-10 m-0 shadow-sm">Front</p>
        </div>
        <div className="relative bg-[var(--surface)] overflow-hidden" style={{ aspectRatio: '4/5' }}>
          <div className="w-full h-full flex items-center justify-center [&>svg]:max-w-[120px] [&>svg]:w-full [&>svg]:p-4 [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:absolute [&>img]:inset-0">
            {back}
          </div>
          <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-[0.65rem] tracking-widest uppercase font-bold text-white bg-black/30 backdrop-blur-md px-3 py-1 rounded-full z-10 m-0 shadow-sm">Back</p>
        </div>
      </div>
      {/* Info */}
      <div style={{ padding: '1.25rem 1.5rem' }}>
        <p className="section-label" style={{ fontSize: '0.65rem', marginBottom: '0.25rem' }}>{category}</p>
        <h3 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.05rem', margin: '0 0 0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6, margin: '0 0 1rem' }}>{description}</p>
        <a
          href={WA_URL} target="_blank" rel="noopener noreferrer"
          className="btn-primary w-full justify-center"
          style={{ fontSize: '0.825rem', padding: '0.625rem 1rem' }}
        >
          <MessageCircle size={14} /> Enquire on WhatsApp
        </a>
      </div>
    </div>
  )
}

function ProductsPage() {
  const imgStyle = { width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '4px' } as const

  const products = [
    {
      title: 'Polo Plain T-Shirt',
      category: 'Polo · Plain',
      description: 'Classic polo T-shirt with no custom print. Available in all sizes XS to XXXL. Suitable for uniforms and bulk orders.',
      front: <img src="/plan_front.jpg" alt="Polo Plain Front" style={imgStyle} />,
      back: <img src="/plane_black.png" alt="Polo Plain Back" style={imgStyle} />,
    },
    {
      title: 'Polo Custom T-Shirt',
      category: 'Polo · Custom Print',
      description: 'Polo T-shirt with custom logo on left chest (front) and a rectangular logo print on the back. Fully personalized.',
      front: <img src="/custom-front.jpg" alt="Polo Custom Front" style={imgStyle} />,
      back: <img src="/custom_back.png" alt="Polo Custom Back" style={imgStyle} />,
    },
    {
      title: 'Plain Round Neck T-Shirt',
      category: 'Round Neck · Plain',
      description: 'Classic round neck T-shirt, no custom print. Comfortable, durable, and available in bulk from XS to XXXL.',
      front: <RoundPlainFront />,
      back: <RoundPlainBack />,
    },
    {
      title: 'Custom Round Neck T-Shirt',
      category: 'Round Neck · Custom Print',
      description: 'Round neck with square logo on left chest (front) and rectangular logo on the back. Perfect for events and corporate use.',
      front: <RoundCustomFront />,
      back: <RoundCustomBack />,
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '3.5rem 0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-label">Our Products</p>
            <h1 className="section-title">T-Shirt Range</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Choose from our four product categories — Polo or Round Neck, Plain or Custom printed.
              All products available in bulk, XS through XXXL.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={16} /> Get a Quote
              </a>
              <Link to="/order" className="btn-outline">
                Order Form <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section style={{ background: 'var(--bg)', padding: '5rem 0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 xl:gap-8">
              {products.map((p) => (
                <ProductCard key={p.title} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section style={{ background: 'var(--accent)', padding: '3.5rem 0' }}>
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <Shirt size={40} className="mx-auto mb-4 opacity-90" />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.5rem', letterSpacing: '0.05em', margin: '0 0 0.75rem' }}>
              Ready to Order in Bulk?
            </h2>
            <p style={{ opacity: 0.85, marginBottom: '2rem', fontSize: '0.95rem' }}>
              Contact us on WhatsApp or fill in the order form and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                style={{ background: 'white', color: 'var(--accent)', padding: '0.875rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <Link to="/order"
                style={{ background: 'transparent', color: 'white', padding: '0.875rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                Order Form <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
