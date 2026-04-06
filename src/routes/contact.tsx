import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const WA_URL = 'https://wa.me/919421612355'

function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '3.5rem 0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-label">Get in Touch</p>
            <h1 className="section-title">Contact Us</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.75 }}>
              Have a bulk order inquiry? We'd love to hear from you. Reach out via WhatsApp, phone, or email and we'll respond promptly.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section style={{ background: 'var(--bg)', padding: '5rem 0' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">

              {/* Phone */}
              <div className="card p-6 flex gap-4">
                <div style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <p className="section-label" style={{ fontSize: '0.65rem' }}>Call Us</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:9421612355" style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', letterSpacing: '0.05em' }}>
                      94216 12355
                    </a>
                    <a href="tel:9284669514" style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', letterSpacing: '0.05em' }}>
                      92846 69514
                    </a>
                    <a href="tel:7558686698" style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', letterSpacing: '0.05em' }}>
                      75586 86698
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card p-6 flex gap-4">
                <div style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <p className="section-label" style={{ fontSize: '0.65rem' }}>Email</p>
                  <a
                    href="mailto:arvestaclothing@gmail.com"
                    style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none' }}
                  >
                    arvestaclothing@gmail.com
                  </a>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    Send us your requirements anytime.
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="card p-6 flex gap-4">
                <div style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="section-label" style={{ fontSize: '0.65rem' }}>Address</p>
                  <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem', margin: '0 0 0.25rem' }}>
                    Tukum, Chandrapur
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="card p-6 flex gap-4">
                <div style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <p className="section-label" style={{ fontSize: '0.65rem' }}>Business Hours</p>
                  <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem', margin: '0 0 0.25rem' }}>
                    Mon – Sat: 9:00 AM – 7:00 PM
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    Sunday: By appointment only
                  </p>
                </div>
              </div>

            </div>

            {/* WhatsApp CTA */}
            <div
              className="mt-8 p-8 rounded-lg text-center"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <h2 style={{ color: 'var(--text)', fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', letterSpacing: '0.05em', margin: '0 0 0.75rem' }}>
                Fastest Response on WhatsApp
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                For quickest responses, send your bulk order requirements directly on WhatsApp.
                Share your quantity, size breakdown, and design files for an instant quote.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}
              >
                <MessageCircle size={20} />
                Chat on WhatsApp — 94216 12355
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
