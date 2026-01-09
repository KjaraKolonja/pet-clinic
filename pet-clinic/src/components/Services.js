import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensuring Bootstrap CSS is imported
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensuring Bootstrap JS is included

function Services() {
  return (
    <section id="services">
      <h2>Services</h2>
      <div id="servicesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#servicesCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/spa-and-wellness">
              <img src="cropped_c3.webp" className="d-block w-100" alt="Spa and Wellness" />
            </Link>
            <div className="carousel-caption d-none d-md-block">
              <h5>Spa and Wellness</h5>
              <p>Treat your pet to a luxurious spa day! Our spa services include therapeutic baths, grooming, nail trimming, and ear cleaning. We also offer wellness programs tailored to your pet’s needs, including diet consultations and stress-reduction therapies that promote a healthy lifestyle.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Link to="/surgery">
              <img src="cropped_s3.webp" className="d-block w-100" alt="Surgery" />
            </Link>
            <div className="carousel-caption d-none d-md-block">
              <h5>Surgery</h5>
              <p>Our state-of-the-art surgical suite provides a wide range of procedures from routine spaying and neutering to advanced orthopedic surgeries. Our veterinary team employs the latest techniques and technology to ensure the safety and speedy recovery of your beloved pet.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Services;
