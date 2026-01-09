import React, { useState } from 'react';
import '../assets/style.css';


function BookOnline() {
  const [formData, setFormData] = useState({
    pet_name: '',
    pet_type: '',
    email: '',  // ensure the email state is initialized here
    service_type: '',
    doctor: '',
    appointment_date: '',
    appointmentm_time: '',
    reminder: false
  });

  // Handle changes in form inputs
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://localhost:5000/api/reservations';
  
    console.log('Final formData before sending:', formData); // Ensure all data is as expected
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit reservation');
      }
  
      const data = await response.json();
      if (response.ok) {
        alert('Reservation submitted successfully!');
        console.log('Server response:', data);
        setFormData({
          firstName: '',
          lastName: '',
          date: '',
          time: '',
          guests: 1,
          phoneNumber: ''
        });
      } else {
        throw new Error(data.message || 'Failed to submit reservation');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      alert('Error submitting reservation: ' + error.message);
    }
  };

  return (
    <section id="book-online">
      <div className="book-online-text">
        <h2>Book Online</h2>
        <p>Schedule an online consultation with one of our veterinarians for personalized advice and care.</p>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="pet_name">Pet's Name:</label>
            <input
              type="text"
              id="pet_name"
              name="pet_name"
              required
              className="form-control"
              value={formData.pet_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pet_type">Pet's Type:</label>
            <select
              id="pet_type"
              name="pet_type"
              required
              className="form-control"
              value={formData.pet_type}
              onChange={handleChange}
            >
              <option value="">--Please choose an option--</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="rabbit">Rabbit</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="service_type">Service Type:</label>
            <select
              id="service_type"
              name="service_type"
              className="form-control"
              value={formData.service_type}
              onChange={handleChange}
            >
              <option value="">--Please choose a service--</option>
              <option value="consultation">Consultation</option>
              <option value="spa_treatment">Spa Treatment</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="doctor">Preferred Doctor:</label>
            <select
              id="doctor"
              name="doctor"
              className="form-control"
              value={formData.doctor}
              onChange={handleChange}
            >
              <option value="">--Please choose a doctor--</option>
              <option value="dr_smith">Dr. Smith</option>
              <option value="dr_jones">Dr. Jones</option>
              <option value="dr_jackob">Dr. Jackob</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="appointment_date">Appointment Date:</label>
            <input
              type="date"
              id="appointment_date"
              name="appointment_date"
              required
              className="form-control"
              value={formData.appointment_date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="appointment_time">Appointment Time:</label>
            <input
              type="time"
              id="appointment_time"
              name="appointment_time"
              required
              className="form-control"
              value={formData.appointment_time}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reminder">Set Appointment Reminder:</label>
            <input
              type="checkbox"
              id="reminder"
              name="reminder"
              className="form-check-input"
              checked={formData.reminder}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="Book Appointment" className="btn btn-primary book-button" />
        </form>
      </div>
    </section>
  );
}

export default BookOnline;
