import React from 'react';
import '../assets/style.css';
    function SpecialOffers() {
        return (
            <section id="special-offers" className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Special Offers and Promotions</h2>
                    </div>
                </div>
                <div className="row">
                    <OfferCard
                        title="New Puppy/Kitten Wellness Package"
                        imageSrc="high_res_focused_image (1).png"
                        altText="New Puppy/Kitten Wellness Package"
                        description="Get your new pet off to a great start with vaccinations, deworming, microchipping, and a first wellness exam. Save on essential care!"
                        price="$199"
                    />
                    <OfferCard
                        title="Annual Check-up Special"
                        imageSrc="love.jpg"
                        altText="Annual Check Up"
                        description="Keep your pet healthy with our discounted annual check-up package. Includes full physical exam, vaccinations, and dental check."
                        price="$149"
                    />
                    <OfferCard
                        title="Dental Cleaning Discount"
                        imageSrc="WhatsApp Video 2024-05-29 at 23.23.56.mp4"
                        altText="Dental Cleaning Discount"
                        description="Ensure your pet's oral health with a special discount on dental cleanings. Book today and save on dental services."
                        price="$99"
                        video
                    />
                    <OfferCard
                        title="Senior Pet Wellness Package"
                        imageSrc="sp1.jpg"
                        altText="Senior Pet Wellness Package"
                        description="Special care package for senior pets. Includes comprehensive exams, blood work, and other essential services to keep your senior pet healthy."
                        price="$249"
                    />
                </div>
            </section>
        );
    }
    
    function OfferCard({ title, imageSrc, altText, description, price, video }) {
        return (
            <div className="col-md-3 col-sm-6 mb-4">
                <div className="card offer-card">
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <div className="image-container">
                            {video ? (
                                <video className="card-video" autoPlay muted controls>
                                    <source src={imageSrc} type="video/mp4" />
                                   
                                </video>
                            ) : (
                                <img src={imageSrc} className="card-img-top" alt={altText} />
                            )}
                            <div className="offer-details">
                                <p>{description}</p>
                                <p className="price">{price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    export default SpecialOffers;