
import "./Home.css";

const services = [
  {
    name: "Hair Styling",
    icon: "✂️",
    description: "Discover professional hairstylists and hair treatments.",
  },
  {
    name: "Nail Care",
    icon: "💅",
    description: "Find beautiful manicures, pedicures and nail art.",
  },
  {
    name: "Makeup",
    icon: "💄",
    description: "Find talented makeup artists for every occasion.",
  },
  {
    name: "Spa & Wellness",
    icon: "🌿",
    description: "Relax and rejuvenate with wellness treatments.",
  },
  {
    name: "Skincare",
    icon: "✨",
    description: "Discover facials and professional skincare treatments.",
  },
  {
    name: "Lashes & Brows",
    icon: "👁️",
    description: "Enhance your beauty with lash and brow treatments.",
  },
];

function Home({ onRegister }) {
  return (
    <main className="marketplace-home">

      {/* Navigation */}
      <header className="home-navbar">
        <a href="#home" className="home-logo">
          ✿ Salon<span>Booking</span>
        </a>

        <nav className="home-nav-links">
          <a href="#home">Home</a>
          <a href="#salons">Explore Salons</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
        </nav>

        <button className="primary-btn" onClick={onRegister}>
          Register Your Salon
        </button>
      </header>

      {/* Hero Section */}
      <section className="home-hero" id="home">
        <div className="home-hero-content">
          <p className="home-eyebrow">
            YOUR BEAUTY. YOUR CHOICE.
          </p>

          <h1>
            Discover Beauty.
            <br />
            Book with <span>Confidence.</span>
          </h1>

          <p className="home-hero-description">
            Discover trusted beauty salons, explore professional
            services and find your perfect beauty experience,
            all in one place.
          </p>

          <div className="home-hero-buttons">
            <a href="#salons" className="primary-btn">
              Explore Salons →
            </a>

            <button className="outline-btn" onClick={onRegister}>
              Register Your Salon
            </button>
          </div>

          <div className="home-trust">
            <span>✓ Approved Salons</span>
            <span>✓ Easy Discovery</span>
            <span>✓ Beauty Professionals</span>
          </div>
        </div>

        <div className="home-hero-visual">
          <div className="beauty-circle">
            <span className="beauty-flower">✿</span>
            <h2>Beauty begins<br />with you.</h2>
            <p>Discover. Book. Glow.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="home-section" id="services">
        <div className="home-section-heading">
          <p className="home-eyebrow">FIND YOUR PERFECT TREATMENT</p>
          <h2>Explore Beauty Services</h2>
          <p>
            Discover a variety of services from beauty
            professionals on our platform.
          </p>
        </div>

        <div className="home-service-grid">
          {services.map((service) => (
            <article className="home-service-card" key={service.name}>
              <div className="home-service-icon">
                {service.icon}
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a href="#salons">Explore Salons →</a>
            </article>
          ))}
        </div>
      </section>

      {/* Approved Salons */}
      <section className="home-salons-section" id="salons">
        <div className="home-section-heading">
          <p className="home-eyebrow">DISCOVER YOUR NEXT SALON</p>
          <h2>Explore Approved Salons</h2>
          <p>
            Find beauty businesses approved by our administrator.
          </p>
        </div>

        <div className="home-empty-state">
          <div className="home-service-icon">🏬</div>
          <h3>Our salon directory is coming soon</h3>
          <p>
            Approved salons will appear here once the
            salon directory is connected to our system.
          </p>

          <button className="primary-btn" onClick={onRegister}>
            Register Your Salon
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="home-section" id="how-it-works">
        <div className="home-section-heading">
          <p className="home-eyebrow">SIMPLE AND CONVENIENT</p>
          <h2>How It Works</h2>
          <p>Your beauty journey in three simple steps.</p>
        </div>

        <div className="home-steps">
          <article className="home-step">
            <div className="step-number">01</div>
            <h3>Discover</h3>
            <p>Explore approved salons and beauty services.</p>
          </article>

          <article className="home-step">
            <div className="step-number">02</div>
            <h3>Book</h3>
            <p>Choose your preferred service, date and time.</p>
          </article>

          <article className="home-step">
            <div className="step-number">03</div>
            <h3>Glow</h3>
            <p>Visit your chosen salon and enjoy your treatment.</p>
          </article>
        </div>
      </section>

      {/* Salon Owner Registration */}
      <section className="home-owner-section">
        <p className="home-eyebrow">GROW YOUR BUSINESS</p>
        <h2>Are You a Salon Owner?</h2>

        <p>
          Join SalonBooking, showcase your services and
          connect with new customers. Register your business
          and submit it for administrator approval.
        </p>

        <button className="primary-btn" onClick={onRegister}>
          Register Your Salon →
        </button>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div>
          <h2>✿ SalonBooking</h2>
          <p>Connecting beauty professionals and customers.</p>
        </div>

        <div className="home-footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#salons">Explore Salons</a>
          <button onClick={onRegister}>Register Salon</button>
        </div>

        <p className="home-copyright">
          © {new Date().getFullYear()} SalonBooking.
          All rights reserved.
        </p>
      </footer>

    </main>
  );
}

export default Home;
