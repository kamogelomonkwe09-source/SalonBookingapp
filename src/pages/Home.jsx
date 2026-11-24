
const services = [
  {
    name: "Hair Styling",
    icon: "✂️",
    description: "Beautiful hairstyles for every occasion.",
  },
  {
    name: "Nail Care",
    icon: "💅",
    description: "Professional manicures and nail treatments.",
  },
  {
    name: "Makeup",
    icon: "✨",
    description: "Glamorous makeup to enhance your beauty.",
  },
];

function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="subtitle">WELCOME TO SALONBOOKING</p>

          <h1>
            Where Beauty Meets <span>Elegance</span>
          </h1>

          <p className="hero-description">
            Discover a world of beauty, relaxation,
            and confidence. Your perfect salon
            experience starts here.
          </p>

          <a href="#booking" className="book-btn">
            Book Appointment
          </a>
        </div>

        <div className="hero-decoration">
          <div className="flower">✿</div>
          <p>Beauty begins with you</p>
        </div>
      </section>

      <section className="services" id="services">
        <p className="subtitle">OUR SPECIALTIES</p>
        <h2>Our Beauty Services</h2>
        <p>Discover treatments designed just for you.</p>

        <div className="service-container">
          {services.map((service) => (
            <div className="service-card" key={service.name}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="booking-section" id="booking">
        <h2>Ready to Feel Beautiful?</h2>
        <p>
          Your next beauty experience is just
          a booking away.
        </p>
        <p className="booking-note">
          Online appointment booking coming soon.
        </p>
      </section>
    </main>
  );
}

export default Home;
