import React from 'react';
import '../assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Locations from './Locations';
import Footer from './Footer';

const SpaAndWellness = () => {
  return (
    <>
      <header>
        <table>
          <tbody>
            <tr>
              <td>
                <img src="Logo.png" alt="Spa and Wellness Logo" />
                <br />
                <p className="spa-branding">Spa and Wellness</p>
              </td>
              <td>
                <nav className="navbar custom-navbar">
                  <ul className="nav-ul">
                    <li className="nav-item"><a href="#home1" className="nav-link">HOME</a></li>
                    <li className="nav-item"><a href="#treatments" className="nav-link">TREATMENTS</a></li>
                    <li className="nav-item"><a href="#photos" className="nav-link">PHOTOS</a></li>
                    <li className="nav-item"><a href="#tips" className="nav-link">TIPS</a></li>
                    <li className="nav-item"><a href="#locations" className="nav-link">LOCATIONS</a></li>
                  </ul>
                </nav>
              </td>
            </tr>
          </tbody>
        </table>
      </header>

      <main>
        <section id="home1" className="spa-and-wellness">
          <table id="spa-hometable">
            <tbody>
              <tr>
                <td id="td1">
                  <img src="spa.jpg" style={{ width: '250px', height: 'auto' }} alt="Spa and Wellness Home" />
                </td>
                <td id="td2">
                  <h2 className="spa-heading">Welcome to Our Spa and Wellness Center</h2>
                  <br />
                  <p>Welcome to Our Pet Spa and Wellness Center, where every treatment and service is designed with your pet's health and happiness in mind. From relaxing pet massages to rejuvenating aromatherapy sessions, our facility is a haven of comfort and luxury for your furry friends. Our expert team is dedicated to providing a nurturing and soothing environment, ensuring that your pet enjoys a blissful and restorative experience. Discover our wide range of specialized treatments tailored to meet the unique needs of pets, helping them feel their best, both physically and emotionally.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="treatments" className="spa-and-wellness">
          <table id="treatmentTable">
            <tbody>
              <tr>
                <td id="tdTreatment1">
                  <img src="t4.jpg" alt="Spa and Wellness Treatments" style={{ width: '350px', height: 'auto' }} />
                </td>
                <td id="tdTreatment2">
                  <p>Our Pet Spa and Wellness Center offers a holistic approach to your pet's health and well-being. Explore our specialized treatments designed to enhance physical health and promote emotional balance.</p>
                  <ul>
                    <li><strong>Pet Acupuncture:</strong> Helps alleviate pain and improve overall health through targeted pressure points.</li>
                    <li><strong>Pet Yoga (Doga):</strong> Strengthens the bond between you and your pet while promoting relaxation and flexibility.</li>
                    <li><strong>Pet Reiki:</strong> Uses energy healing to reduce stress and induce relaxation, supporting your pet's natural healing processes.</li>
                    <li><strong>Pet Aesthetic Grooming:</strong> Offers luxurious fur treatments and stylish cuts tailored for pet comfort and hygiene.</li>
                    <li><strong>Pet Nutrition Consultation:</strong> Personalized diet plans to ensure optimal health and energy levels.</li>
                    <li><strong>Pet Behavior Therapy:</strong> Addresses behavioral issues with effective training and behavior modification techniques.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="photos" className="spa-and-wellness">
          <h2 className="spa-heading">Gallery of Our Spa and Wellness Center</h2>
          <div className="photo-gallery">
            <img src="t5.jpg" alt="Gallery Image" />
            <img src="t3.jpg" alt="Gallery Image" />
            <img src="treat.jpg" alt="Gallery Image" />
            <img src="treatment 2.jpg" alt="Gallery Image" />
            <img src="s9.jpg" alt="Gallery Image" />
            <img src="s10.jpg" alt="Gallery Image" />
          </div>
        </section>

        <section id="tips" className="spa-and-wellness">
          <h2 className="spa-heading">Essential Wellness Tips for Your Pets</h2>
          <div className="tips-list">
            <div className="tip">
              <h3>Regular Exercise</h3>
              <p>Keep your pets active to maintain healthy body weight and improve their mental health. Regular walks and playtime are essential.</p>
            </div>
            <div className="tip">
              <h3>Proper Nutrition</h3>
              <p>Feed your pets a balanced diet suitable for their age, breed, and health status. Consider consulting a vet for the best advice.</p>
            </div>
            <div className="tip">
              <h3>Mental Stimulation</h3>
              <p>Use puzzle toys to keep your pets' minds sharp. This helps prevent boredom and related behavioral issues.</p>
            </div>
            <div className="tip">
              <h3>Regular Grooming</h3>
              <p>Grooming isn't just about looks; it's crucial for overall health. Regular brushing and baths help prevent skin issues and ensure your pet is comfortable.</p>
            </div>
            <div className="tip">
              <h3>Dental Care is Crucial</h3>
              <p>Just like humans, pets need regular dental care to prevent disease and keep their teeth in good condition. Regular brushing of your pet's teeth can prevent the buildup of plaque and tartar, which can lead to serious dental diseases.</p>
            </div>
            <div className="tip">
              <h3>Social Interaction Matters</h3>
              <p>Pets thrive on social interaction, which plays a crucial role in their mental and emotional health. Ensure your pet has regular opportunities to interact with humans and other animals to help prevent anxiety and behavioral issues.</p>
            </div>
          </div>
        </section>
      </main>

      <Locations />
      <Footer />
    </>
  );
};

export default SpaAndWellness;
