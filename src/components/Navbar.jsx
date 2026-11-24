
function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        Salon<span>Booking</span>
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#booking">Book Appointment</a>
      </nav>
    </header>
  );
}

export default Navbar;
