import React from 'react';
import '../assets/style.css';

function Locations() {
    return (
        <section id="locations">
            <h2>Our Locations</h2>
            <div className="location">
                <h3>Mission District</h3>
                <p>3170 23rd St, San Francisco, CA 94110</p>
                <p>Phone: +14159799550</p>
            </div>
            <div className="location">
                <h3>San Francisco Animal Hospital</h3>
                <p>1371 Fulton St, San Francisco, CA 94117</p>
                <p>Phone: +14159318312</p>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50472.68468032658!2d-122.46407403504925!3d37.7538690930772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e477e32f863%3A0xf0866f6697d69fe!2sPaws%20Pets%20Are%20Wonderful%20Support!5e0!3m2!1sen!2sus!4v1717103821752!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border:0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50457.187559993195!2d-122.51146717832032!3d37.77658059999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580b1c0b578e5%3A0xe44b29c544feb06a!2sSan%20Francisco%20Pet%20Hospital!5e0!3m2!1sen!2sus!4v1717103510992!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border:0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </section>
    );
}

export default Locations;