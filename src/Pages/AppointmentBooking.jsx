import React, { useState } from "react";
import "./AppointmentBooking.css"
function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    doctor: "",
    date: "",
    time: ""
  });

  const [appointments, setAppointments] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAppointments([...appointments, formData]);

    alert("Appointment Booked Successfully!");

    setFormData({
      name: "",
      age: "",
      gender: "",
      doctor: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="container">
      <h1>Hospital Appointment Booking</h1>

      <form onSubmit={handleSubmit} className="form">
         <input type="text" name="name" placeholder="Patient Name" value={formData.name} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required/>

        <select name="gender" value={formData.gender} onChange={handleChange} required >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <select name="doctor" value={formData.doctor} onChange={handleChange}required >
          <option value="">Select Doctor</option>
          <option>Dr.Harthika (Cardiologist)</option>
          <option>Dr.Girishma(Dermatologist)</option>
          <option>Dr.Nikhitha(Orthopedic)</option>
        </select>

        <input type="date" name="date" value={formData.date} onChange={handleChange} required/>
        <input type="time"  name="time" value={formData.time}  onChange={handleChange}required />
        <button type="submit">Book Appointment</button>

      </form>

      <h2>Booked Appointments</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.doctor}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentBooking;