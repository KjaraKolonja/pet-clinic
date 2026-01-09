import React from 'react';
import '../assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Footer';
import Locations from './Locations';

const Surgery = () => {
  return (
    <>
    <div>
      <header>
        <table>
          <tbody>
            <tr>
              <td>
                <img src="Logo.png" alt="Surgery and More Logo" />
                <p className="surgery-branding">Surgery and More</p>
              </td>
              <td>
                <nav className="navbar custom-navbar">
                  <ul className="nav-ul">
                    <li className="nav-item"><a href="#home2" className="nav-link">HOME</a></li>
                    <li className="nav-item"><a href="#our-team" className="nav-link">TEAM</a></li>
                    <li className="nav-item"><a href="#treatment" className="nav-link">TREATMENT</a></li>
                    <li className="nav-item"><a href="#hospital-room" className="nav-link">HOSPITAL ROOMS</a></li>
                    <li className="nav-item"><a href="#reviews" className="nav-link">REVIEWS</a></li>
                    <li className="nav-item"><a href="#locations" className="nav-link">LOCATIONS</a></li>
                  </ul>
                </nav>
              </td>
            </tr>
          </tbody>
        </table>
      </header>

      <hr />

      <section id="home2" className="surgery-and-more-section">
        <table id="hometable">
          <tbody>
            <tr>
              <td id="td1">
                <h2>Welcome to Our Medical Services</h2>
                <br />
                <p>
                  Welcome to Our Medical Services, a leading provider specializing in surgical procedures and comprehensive healthcare solutions. Our facility is dedicated to delivering the highest standard of surgical care, equipped with cutting-edge technology and supported by a team of highly skilled professionals. From essential surgeries to advanced treatments, we ensure a safe, caring, and effective environment for all your health needs. Discover how our full spectrum of medical services can assist you in achieving optimal health and recovery.
                </p>
              </td>
              <td id="td2">
                <img src="sm1.png" style={{ width: '250px', height: 'auto' }} alt="Home Section" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="our-team" className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="text-center mb-4">Our Team</h2>
            <p className="text-center">Meet our dedicated team of professionals committed to providing exceptional medical care.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card team-card">
              <img src="dr jacob.jpg" className="card-img-top" alt="Dr. Jacob" />
              <div className="card-body">
                <h5 className="card-title">Dr. Jack Jacob</h5>
                <p className="card-text">Chief Surgeon</p>
                <p className="card-text">Dr. Jacob has over 20 years of experience in veterinary surgery and is dedicated to providing the highest level of care for your pets.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card team-card">
              <img src="dr jones.jpg" className="card-img-top" alt="Dr.Jones " />
              <div className="card-body">
                <h5 className="card-title">Dr. Jane Jones</h5>
                <p className="card-text">Veterinary Specialist</p>
                <p className="card-text">Dr. Jones specializes in internal medicine and has a passion for helping pets live healthy and happy lives.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card team-card">
              <img src="dr smith.jpg" className="card-img-top" alt="Dr. Smith" />
              <div className="card-body">
                <h5 className="card-title">Dr. Michael Smith</h5>
                <p className="card-text">Senior Veterinarian</p>
                <p className="card-text">With a wealth of experience in veterinary care, Dr. Smith is committed to providing comprehensive and compassionate care for all pets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="treatment" className="surgery-and-more-section">
        <table id="treatmentTable">
          <thead>
            <tr>
              <th colSpan="2">
                <h2>Comprehensive Treatment Options</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="tdTreatment1">
                <img src="t.png" alt="Treatment Options" style={{ width: '350px', height: 'auto' }} />
              </td>
              <td id="tdTreatment2">
                <br />
                <p>
                  We offer a wide range of treatments to cater to all your medical needs. Our expert team is equipped with the latest technology and knowledge to ensure you receive the best possible care. Explore our diverse treatment options below.
                </p>
                <ul>
                  <li><strong>Surgery:</strong> Our state-of-the-art surgical suite provides a wide range of procedures from routine spaying and neutering to advanced orthopedic surgeries.</li>
                  <li><strong>Dental Care:</strong> Ensure your pet's oral health with our comprehensive dental services, including cleanings, extractions, and preventative care.</li>
                  <li><strong>Vaccinations:</strong> Keep your pet protected from common diseases with our up-to-date vaccination services, tailored to your pet's specific needs.</li>
                  <li><strong>Wellness Exams:</strong> Regular wellness exams to monitor your pet's health and catch any potential issues early.</li>
                  <li><strong>Emergency Services:</strong> We provide emergency care for critical conditions, ensuring immediate and effective treatment.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="hospital-room">
        <h2>Hospital Rooms</h2>
        <p>
          Our hospital rooms are designed to provide the utmost comfort and care for our patients. Each room is equipped with state-of-the-art medical technology and soothing interiors to ensure a stress-free environment for your beloved pets. Our goal is to make their recovery as comfortable as possible.
        </p>
        <div className="room-images">
          <img src="r1.webp" alt="Room 1" />
          <img src="r6.webp" alt="Room 6" />
          <img src="r10.jpg" alt="Room 10" />
          <img src="r9.jpg" alt="Room 9" />
          <img src="r8.jpg" alt="Room 8" />
          <img src="r7.jpg" alt="Room 7" />
        </div>
        <p>
          From advanced monitoring systems to comfortable bedding, we cater to all needs of your pets, ensuring they receive the best care while recovering. Our staff is specially trained to handle pets gently and with compassion, making sure they feel at home during their stay.
        </p>
      </section>

      <section id="reviews" className="surgery-and-more-section">
        <h2>Reviews</h2>
        <p>See what our patients have to say about our services.</p>
        <div className="reviews-container">
          <div className="review">
            <h3>Joe Mackler</h3>
            <p>"The staff was incredibly friendly and the doctors were very professional. I felt well taken care of."</p>
            <span className="rating">★★★★★</span>
          </div>
          <div className="review">
            <h3>Dee Mackson</h3>
            <p>"The facilities were clean and modern. My surgery went smoothly and the recovery process was well managed."</p>
            <span className="rating">★★★★☆</span>
          </div>
          <div className="review">
            <h3>Katelyn Berck</h3>
            <p>"I had a great experience at the clinic. The nurses were very attentive and made sure I was comfortable throughout my stay."</p>
            <span className="rating">★★★★★</span>
          </div>
        </div>
      </section>

      </div>
      <Locations />
      <Footer />
      </>
  );
};

export default Surgery;
