import { createFileRoute, Link } from '@tanstack/react-router'
import Header from '@/components/Header'
import { MessageCircle, Package, Building2, ChefHat, Dumbbell, PartyPopper, CheckCircle2, ShieldCheck } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const WA_URL = 'https://wa.me/919421612355'

// ─── Sections ─────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--bg)', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '60px 60px', opacity: 0.3,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3">
            <p className="section-label animate-fade-in-up">Arvesta Clothing · Chandrapur, Maharashtra</p>
            <h1 className="animate-fade-in-up delay-100" style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 400, letterSpacing: '0.04em', lineHeight: 1.05,
              color: 'var(--text)', margin: '0 0 1.5rem',
            }}>
              Bulk Customized<br />
              <span style={{ color: 'var(--accent)' }} className="dark:neon-text">T-Shirts</span> for<br />
              Businesses &amp; Events
            </h1>
            <p className="animate-fade-in-up delay-200" style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '0.75rem', letterSpacing: '0.1em', fontWeight: 600 }}>
              Polo &nbsp;|&nbsp; Round Neck &nbsp;|&nbsp; Corporate &nbsp;|&nbsp; Promotions
            </p>
            <p className="animate-fade-in-up delay-200" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: 1.75 }}>
              Premium quality, fully customized bulk orders tailored for your brand. We deliver precision, consistency, and speed — every single order.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={16} />
                I'm Interested — Get More Details
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 animate-fade-in-up delay-400">
              {['Bulk Orders Only', 'Custom Prints', 'Fast Delivery', 'All Sizes'].map((b) => (
                <div key={b} className="flex items-center gap-1.5" style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent)' }} /> {b}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image — 2 cols */}
          <div className="lg:col-span-2 relative mt-8 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden border border-[var(--border)] shadow-2xl shadow-[var(--accent)]/10 animate-fade-in-up delay-400 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg)]/40 to-transparent z-10 pointer-events-none"></div>
              <img 
                src="/hero-tshirts.jpg" 
                alt="Premium Customized T-Shirts by Arvesta Clothing" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: '4/3', minHeight: '320px' }}
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                <div className="bg-[var(--surface)]/90 backdrop-blur-sm p-3 rounded-lg border border-[var(--border)] shadow-lg">
                  <p className="text-[var(--accent)] font-bold text-xs uppercase tracking-widest mb-0.5">Premium Quality</p>
                  <p className="text-[var(--text)] text-sm font-medium mb-0">Custom Embroidery & Print</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IndustriesSection() {
  const industries = [
    { icon: <Building2 size={28} />, title: 'Corporate Offices', desc: 'Professional branded workwear and uniforms for your entire team.' },
    { icon: <ChefHat size={28} />, title: 'Restaurants & Cafes', desc: 'Smart, consistent uniforms that represent your brand with every service.' },
    { icon: <Dumbbell size={28} />, title: 'Gyms & Fitness', desc: 'Durable activewear tees for gyms, sports clubs, and fitness studios.' },
    { icon: <PartyPopper size={28} />, title: 'Events & Promotions', desc: 'Eye-catching event tees, promotional giveaways, and campaign merchandise.' },
  ]
  return (
    <section style={{ background: 'var(--surface)', padding: '6rem 0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label">Who We Serve</p>
          <h2 className="section-title">Industries We Work With</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
            From startups to large enterprises, we craft bulk custom T-shirts for every industry and occasion.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map(({ icon, title, desc }) => (
            <div key={title} className="card p-6">
              <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{icon}</div>
              <h3 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>{title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BulkOrderSection() {
  return (
    <section style={{ background: 'var(--accent)', padding: '5rem 0' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <ShieldCheck size={48} className="mx-auto mb-6 opacity-90" />
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 400, letterSpacing: '0.05em', margin: '0 0 0.75rem',
        }}>
          We Do Not Sell Retail
        </h2>
        <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '0.75rem', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase' }}>
          Bulk Orders Only
        </p>
        <p style={{ opacity: 0.8, maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.75, fontSize: '0.95rem' }}>
          We specialize exclusively in bulk orders for businesses, organizations, and events.
          Contact us on WhatsApp to discuss your requirements and receive a custom quote.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            style={{ background: 'white', color: 'var(--accent)', padding: '0.875rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
          <Link to="/order"
            style={{ background: 'transparent', color: 'white', padding: '0.875rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', border: '2px solid rgba(255,255,255,0.5)' }}>
            <Package size={16} /> Order Form Online
          </Link>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: '#0f0f0f', borderTop: '1px solid var(--border)', padding: '3rem 0 2rem' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          <div>
            <div className="mb-4">
              <div className="inline-flex bg-white p-2.5 rounded-xl shadow-sm">
                <img src="/logo.png" alt="Arvesta Clothing" className="h-16 w-auto" />
              </div>
            </div>
            <p style={{ color: '#888', fontSize: '0.875rem', lineHeight: 1.7 }}>Premium bulk custom T-shirts for businesses and events. Based in Chandrapur, Maharashtra.</p>
          </div>
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {([['/', 'Home'], ['/products', 'Products'], ['/order', 'Order Form'], ['/contact', 'Contact']] as const).map(([to, label]) => (
                <Link key={to} to={to} style={{ color: '#888', fontSize: '0.875rem', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Contact</h4>
            <div className="flex flex-col gap-2" style={{ color: '#888', fontSize: '0.875rem' }}>
              <span>📞 9421612355 | 9284669514</span>
              <span>📞 7558686698</span>
              <span>✉️ arvestaclothing@gmail.com</span>
              <span>📍 Tukum, Chandrapur, Maharashtra</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', textAlign: 'center', color: '#555', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Arvesta Clothing. All rights reserved. · Bulk Orders Only.
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IndustriesSection />
        <BulkOrderSection />
      </main>
      <Footer />
    </>
  )
}
