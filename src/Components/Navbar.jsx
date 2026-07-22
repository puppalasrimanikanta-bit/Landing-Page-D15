import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand" aria-label="Smartlogix Hospital Home">
        <span className="brand-mark">🏥</span>
        <span>
          <strong>Smartlogix</strong>
          <small>HOSPITAL</small>
        </span>
      </NavLink>

      <nav aria-label="Primary Navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/departments">Departments</NavLink>
        <NavLink to="/doctors">Doctors</NavLink>
        <NavLink to="/appointmentbooking">Appointment</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;