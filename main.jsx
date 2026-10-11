import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const PHONE = '9955368006'

const whatsapp = (message) =>
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`

const maps = 'https://maps.app.goo.gl/tRTaQSpkCq6RHrkBA'

const mapEmbed =
  'https://www.google.com/maps?q=Gali+No.+6,+Near+Ramnagar+Petrol+Pump,+Ramnagar,+Hazaribagh,+Jharkhand&output=embed'

const categories = [
  {
    icon: '✦',
    title: 'Fans',
    copy: 'Ceiling, table and exhaust fans',
    item: 'a fan',
  },
  {
    icon: '◉',
    title: 'LED Bulbs',
    copy: 'Bright lights for your home',
    item: 'LED bulbs',
  },
  {
    icon: '━',
    title: 'Tube Lights',
    copy: 'LED tube lights and battens',
    item: 'tube lights',
  },
  {
    icon: '⌘',
    title: 'Switches & Accessories',
    copy: 'Switches and small electrical items',
    item: 'switches and accessories',
  },
]

const services = [
  ['Fan Repair', 'Help with common fan problems.'],
  ['Electrical Items', 'Help finding switches and other fittings.'],
  ['Light Selection', 'Help choosing lights for home or shop.'],
]

const faqs = [
  [
    'How can I ask about a product?',
    'You can send a WhatsApp message or call the shop. We can help you check before you visit.',
  ],
  [
    'Can I ask about repair work first?',
    'Yes. Please call or message us and tell us about the item.',
  ],
  [
    'Where is the shop?',
    'The shop is in Gali No. 6, near Ramnagar Petrol Pump, Ramnagar, Hazaribagh.',
  ],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="PK Electronics home"
          onClick={closeMenu}
        >
          <span>PK</span> ELECTRONICS
        </a>

        <button
          className="menu-button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i></i>
          <i></i>
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          <a href="#products" onClick={closeMenu}>Products</a>
          <a href="#repairs" onClick={closeMenu}>Repairs</a>
          <a href="#visit" onClick={closeMenu}>Visit us</a>

          <a className="nav-call" href={`tel:${PHONE}`}>
            Call us <span>↗</span>
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="electric-grid"></div>
          <div className="glow glow-a"></div>
          <div className="glow glow-b"></div>

          <div className="hero-copy">
            <p className="eyebrow">
              <span></span> RAMNAGAR · HAZARIBAGH
            </p>

            <h1>
              Electrical items
              <br />
              for your <em>home.</em>
            </h1>

            <p className="hero-text">
              Fans, lights, switches and repair help — all at one nearby shop.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#products">
                See products <b>↓</b>
              </a>

              <a
                className="button ghost"
                href={whatsapp(
                  'Hello PK Electronics, I would like to enquire about products.'
                )}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us <b>↗</b>
              </a>
            </div>
          </div>

          <div className="hero-object" aria-hidden="true">
            <div className="orbital-ring"></div>

            <div className="fan">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i></i>
            </div>

            <p>PK / 01</p>
          </div>

          <a className="scroll-cue" href="#products">
            SCROLL TO DISCOVER <span>↓</span>
          </a>
        </section>

        <section className="trust-strip" aria-label="Shop highlights">
          <p>LOCAL ELECTRONICS SHOP</p>
          <span></span>
          <p>BUY + REPAIR HELP</p>
          <span></span>
          <p>EASY WHATSAPP ENQUIRY</p>
        </section>

        <div className="moving-line" aria-hidden="true">
          <div>
            <span>FANS</span>
            <b>✦</b>
            <span>LIGHTS</span>
            <b>✦</b>
            <span>SWITCHES</span>
            <b>✦</b>
            <span>REPAIR HELP</span>
            <b>✦</b>
            <span>PK ELECTRONICS</span>
            <b>✦</b>
          </div>
        </div>

        <section className="contact-path section" aria-labelledby="contact-title">
          <div className="section-heading compact">
            <div>
              <p className="eyebrow blue">CONTACT PK ELECTRONICS</p>

              <h2 id="contact-title">
                Need help?
                <br />
                <em>Talk to us.</em>
              </h2>
            </div>

            <p>
              Message, call, or use Google Maps to come to the shop. It is quick and simple.
            </p>
          </div>

          <div className="path-grid">
            <a
              className="path-card path-blue"
              href={whatsapp(
                'Hello PK Electronics, I would like to enquire about a product.'
              )}
              target="_blank"
              rel="noreferrer"
            >
              <span className="path-number">01</span>
              <div className="path-icon">◔</div>
              <h3>WhatsApp us</h3>
              <p>Ask about any product or repair on WhatsApp.</p>
              <b>OPEN WHATSAPP ↗</b>
            </a>

            <a className="path-card" href={`tel:${PHONE}`}>
              <span className="path-number">02</span>
              <div className="path-icon">☎</div>
              <h3>Call us</h3>
              <p>Call PK Electronics at 99553 68006.</p>
              <b>CALL NOW ↗</b>
            </a>

            <a className="path-card" href={maps} target="_blank" rel="noreferrer">
              <span className="path-number">03</span>
              <div className="path-icon">⌖</div>
              <h3>Get directions</h3>
              <p>Find our shop near Ramnagar Petrol Pump.</p>
              <b>OPEN GOOGLE MAPS ↗</b>
            </a>
          </div>
        </section>

        <section className="products section" id="products">
          <div className="section-heading">
            <div>
              <p className="eyebrow blue">01 / PRODUCTS</p>

              <h2>
                Things you may
                <br />
                <em>need every day.</em>
              </h2>
            </div>

            <p>
              These are some items we usually keep. Call or WhatsApp us to check the brand,
              price and availability.
            </p>
          </div>

          <div className="category-grid">
            {categories.map((product, index) => (
              <article className={`product-card card-${index + 1}`} key={product.title}>
                <div className="product-visual" aria-hidden="true">
                  <div className="product-icon">{product.icon}</div>
                  <small>PLACEHOLDER IMAGE</small>
                </div>

                <div className="card-content">
                  <span>0{index + 1}</span>
                  <h3>{product.title}</h3>
                  <p>{product.copy}</p>

                  <a
                    href={whatsapp(
                      `Hello PK Electronics, I would like to enquire about ${product.item}.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire <b>↗</b>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="placeholder-note">
            Product images are sample images. Please confirm the item with the shop before
            visiting.
          </p>
        </section>

        <section className="repairs section" id="repairs">
          <div className="repair-visual">
            <div className="circuit-lines"></div>
            <div className="bolt">ϟ</div>
            <p>CHECK / REPAIR / HELP</p>
          </div>

          <div className="repair-copy">
            <p className="eyebrow blue">02 / REPAIR HELP</p>

            <h2>
              Item not working?
              <br />
              <em>Ask us first.</em>
            </h2>

            <p className="body-copy">
              Send us a WhatsApp message or call us. We can tell you if we may be able to help
              before you come to the shop.
            </p>

            <div className="service-list">
              {services.map(([name, description], index) => (
                <div key={name}>
                  <span>0{index + 1}</span>

                  <section>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </section>
                </div>
              ))}
            </div>

            <a
              className="text-link"
              href={whatsapp('Hello PK Electronics, I would like to ask about a repair.')}
              target="_blank"
              rel="noreferrer"
            >
              Ask about repair <b>↗</b>
            </a>
          </div>
        </section>

        <section className="help section" aria-labelledby="help-title">
          <div className="help-intro">
            <p className="eyebrow blue">03 / EASY SHOPPING</p>

            <h2 id="help-title">
              Simple steps.
              <br />
              <em>Less confusion.</em>
            </h2>

            <p>
              We have kept things simple so you can quickly ask what you need and find the shop.
            </p>

            <a
              className="button primary"
              href={whatsapp(
                'Hello PK Electronics, I would like to ask about a product.'
              )}
              target="_blank"
              rel="noreferrer"
            >
              Ask on WhatsApp <b>↗</b>
            </a>
          </div>

          <div className="step-list">
            <article>
              <span>01</span>
              <div className="step-symbol">⌕</div>
              <h3>Ask us</h3>
              <p>Tell us what item or repair help you need.</p>
            </article>

            <article>
              <span>02</span>
              <div className="step-symbol">☎</div>
              <h3>Get help</h3>
              <p>We will guide you by call or WhatsApp.</p>
            </article>

            <article>
              <span>03</span>
              <div className="step-symbol">⌖</div>
              <h3>Visit us</h3>
              <p>Use Google Maps and come to the shop.</p>
            </article>
          </div>
        </section>

        <section className="faq section" aria-labelledby="faq-title">
          <div className="faq-title">
            <p className="eyebrow blue">QUICK ANSWERS</p>

            <h2 id="faq-title">
              Questions? <em>We can help.</em>
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <article
                className={activeFaq === index ? 'faq-item open' : 'faq-item'}
                key={question}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  aria-expanded={activeFaq === index}
                >
                  <span>0{index + 1}</span>
                  {question}
                  <b>{activeFaq === index ? '−' : '+'}</b>
                </button>

                <div className="faq-answer">
                  <p>{answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="visit" id="visit">
          <div className="visit-copy">
            <p className="eyebrow">04 / VISIT OUR SHOP</p>

            <h2>
              Come to the
              <br />
              <em>shop easily.</em>
            </h2>

            <p>
              Gali No. 6, Near Ramnagar Petrol Pump,
              <br />
              Ramnagar, Hazaribagh, Jharkhand
            </p>

            <div className="visit-links">
              <a href={maps} target="_blank" rel="noreferrer">
                Get directions <b>↗</b>
              </a>

              <a href={`tel:${PHONE}`}>
                Call 99553 68006 <b>↗</b>
              </a>
            </div>

            <div className="visit-note">
              <span>✦</span>
              <p>For repair work, call or message us before you visit the shop.</p>
            </div>
          </div>

          <div className="map-wrap">
            <iframe
              src={mapEmbed}
              title="PK Electronics location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <a href={maps} target="_blank" rel="noreferrer" className="map-open">
              OPEN LOCATION IN GOOGLE MAPS <b>↗</b>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          <span>PK</span> ELECTRONICS
        </a>

        <p>Fans, lights, switches and repair help.</p>
        <p>© {new Date().getFullYear()} PK Electronics</p>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsapp('Hello PK Electronics, I would like to enquire.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span>◔</span>
        <i>WhatsApp</i>
      </a>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)