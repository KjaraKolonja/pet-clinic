import React from 'react';
import '../assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <div className="header text-center">
        <h1>Terms Of Service and Privacy Policy</h1>
      </div>
      <div className="content">
        <p>
          At our Pet Clinic, protecting the privacy and personal data of our clients and website visitors is of utmost importance. With this aim, we have developed and implemented stringent privacy policies to manage the collection, use, and protection of personal data. By using our website and providing your personal information, you agree to the terms outlined in this Privacy and Policy page.
        </p>
        <h3 className="section-title">Data Collection:</h3>
        <p>
          We may collect personal data such as your name, email address, phone number, and details about your pets when you make an appointment, contact us, or subscribe to our newsletter. Our website may also automatically collect non-personal information such as your IP address, browser type, and browsing patterns through cookies or similar technologies.
        </p>
        <h3 className="section-title">Use of Information:</h3>
        <p>
          We strive to personalize your experience on our website based on the information you provide. We may also use your information to send you promotional emails or updates, and to process appointments and orders.
        </p>
        <h3 className="section-title">Information Sharing:</h3>
        <p>
          We do not trade, sell, or rent your personal data to third parties for marketing purposes. However, we may share your data with trusted partners to provide our services and to operate our website.
        </p>
        <h3 className="section-title">Data Security:</h3>
        <p>
          We understand the importance of keeping your personal information secure and protected. We maintain high industry-standard security measures to prevent unauthorized access, alteration, or disclosure of data.
        </p>
        <h3 className="section-title">Third-Party Links:</h3>
        <p>
          Our website may contain links to third-party websites or services. While we do not control their privacy policies or content, we encourage you to carefully review them before you navigate away from our site.
        </p>
        <h3 className="section-title">Privacy Policy Updates:</h3>
        <p>
          We may modify or update this Privacy Policy page as needed. Any changes will take effect immediately upon posting on our website, and we recommend that you periodically review this page for updates.
        </p>
        <h3 className="section-title">Contact Us:</h3>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy page or your privacy, please contact us using the information on our website.
        </p>
        <p>
          By continuing to use our website, you acknowledge that you have read, understood, and agreed to the terms and conditions outlined in this Privacy and Policy statement.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
