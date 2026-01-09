import React from 'react';
import '../assets/style.css';

function Home() {
    const navigateToBooking = () => {
        window.location.href = '#book-online';
    };

    return (
        <section id="home" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1 , padding: "15px"}}>
                <h2>COMPLETE PET CARE</h2>
                <h3>PREVENTATIVE CARE PROGRAM FOR A LONG AND HEALTHY LIFE</h3>
                <p>At our clinic, we understand that your pet is more than just an animal; they are a beloved member of your family. Our commitment is to provide compassionate care and professional veterinary services to ensure the health and happiness of your furry companions. Whether it's a routine check-up, preventative care, or medical treatment, we are here to support you and your pet every step of the way. Thank you for entrusting us with the care of your cherished pets.</p>
                <button onClick={navigateToBooking} className="book-online-btn" id='td1'>Book Online</button>
            </div>
            <div>
                <img src="2.png" alt="Home Section" style={{ width: "350px", height: "auto" }}/>
            </div>
        </section>
    );
}

export default Home;