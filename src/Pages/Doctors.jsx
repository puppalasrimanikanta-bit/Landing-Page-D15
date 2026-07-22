import "./Doctors.css";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";

function Doctors() {
  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      experience: "12 Years",
      phone: "+91 9876543210",
      email: "rajesh@hospital.com",
      image: banner1,
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "Neurologist",
      experience: "10 Years",
      phone: "+91 9876501234",
      email: "priya@hospital.com",
      image: banner2,
    },
    {
      name: "Dr. Anil Reddy",
      specialty: "Orthopedic",
      experience: "15 Years",
      phone: "+91 9876512345",
      email: "anil@hospital.com",
      image: banner3,
    },
  ];

  return (
    <div className="doctors">
      <h1>Our Doctors</h1>

      <div className="doctor-container">
        {doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img src={doctor.image} alt={doctor.name} />

            <h3>{doctor.name}</h3>
            <p><strong>Specialization:</strong> {doctor.specialty}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <p><strong>Phone:</strong> {doctor.phone}</p>
            <p><strong>Email:</strong> {doctor.email}</p>

            <button>Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;