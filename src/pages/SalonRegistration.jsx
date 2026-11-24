
import { useState } from "react";
import "./SalonRegistration.css";

const initialForm = {
  ownerName: "",
  salonName: "",
  email: "",
  phone: "",
  address: "",
  operatingHours: "",
  password: "",
};

function SalonRegistration() {
  const [form, setForm] = useState(initialForm);
  const [services, setServices] = useState([
    { name: "", price: "" },
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function updateService(index, field, value) {
    setServices((previous) =>
      previous.map((service, i) =>
        i === index
          ? { ...service, [field]: value }
          : service
      )
    );
  }

  function addService() {
    setServices((previous) => [
      ...previous,
      { name: "", price: "" },
    ]);
  }

  function removeService(index) {
    setServices((previous) =>
      previous.filter((_, i) => i !== index)
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const invalidService = services.some(
      (service) =>
        !service.name.trim() ||
        service.price === "" ||
        !Number.isFinite(Number(service.price)) ||
        Number(service.price) < 0
    );

    if (invalidService) {
      setError("Please enter valid service names and prices.");
      return;
    }

    // Frontend demo only.
    // No account or salon is saved yet.
    // The backend will later create the application
    // with an initial status of "pending".
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="registration-page">
        <section className="registration-card status-card">
          <div className="status-icon">✓</div>
          <h1>Registration Form Completed</h1>
          <span className="status-pill">
            Pending Approval — Demo
          </span>

          <p>
            Your registration details passed the frontend
            checks for <strong>{form.salonName}</strong>.
          </p>

          <p>
            This is a preview of the pending approval
            screen. Your application has not yet been
            submitted to an administrator.
          </p>

          <button
            className="submit-btn"
            onClick={() => setSubmitted(false)}
          >
            Back to Registration
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="registration-page">
      <section className="registration-card">
        <div className="registration-heading">
          <span className="registration-eyebrow">
            JOIN SALONBOOKING
          </span>
          <h1>Register Your Salon</h1>
          <p>
            Grow your beauty business and connect
            with customers through our platform.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Owner Information</h2>

          <div className="form-grid">
            <label>
              Full Name
              <input
                name="ownerName"
                value={form.ownerName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
            </label>

            <label>
              Contact Number
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter contact number"
                required
              />
            </label>

            <label>
              Account Password
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
                minLength={8}
                autoComplete="new-password"
                required
              />
            </label>
          </div>

          <h2>Salon Information</h2>

          <div className="form-grid">
            <label>
              Salon Business Name
              <input
                name="salonName"
                value={form.salonName}
                onChange={handleChange}
                placeholder="Enter salon name"
                required
              />
            </label>

            <label>
              Operating Hours
              <input
                name="operatingHours"
                value={form.operatingHours}
                onChange={handleChange}
                placeholder="Mon–Sat, 08:00–18:00"
                required
              />
            </label>
          </div>

          <label>
            Salon Address or Location
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Street address, area, city"
              rows={3}
              required
            />
          </label>

          <h2>Services and Prices</h2>
          <p className="form-help">
            Add the services your salon offers.
            Enter prices in South African rand (R).
          </p>

          {services.map((service, index) => (
            <div className="service-row" key={index}>
              <label>
                Service Name
                <input
                  value={service.name}
                  onChange={(event) =>
                    updateService(
                      index,
                      "name",
                      event.target.value
                    )
                  }
                  placeholder="e.g. Hair Braiding"
                  required
                />
              </label>

              <label>
                Price (R)
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={service.price}
                  onChange={(event) =>
                    updateService(
                      index,
                      "price",
                      event.target.value
                    )
                  }
                  placeholder="350.00"
                  required
                />
              </label>

              {services.length > 1 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeService(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className="add-service-btn"
            onClick={addService}
          >
            + Add Another Service
          </button>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <div className="approval-notice">
            <strong>Administrator Approval Required</strong>
            <p>
              Once backend submission is enabled,
              your salon will be reviewed before
              appearing publicly on SalonBookingapp.
            </p>
          </div>

          <button type="submit" className="submit-btn">
            Preview Registration
          </button>
        </form>
      </section>
    </main>
  );
}

export default SalonRegistration;
