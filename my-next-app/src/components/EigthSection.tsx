import React from 'react';
import './EighthSection.css'; // Ensure to create a CSS file for styling
import Image from 'next/image';
import logo from '../Images/map.png'; // Path to your placeholder image

const EighthSection: React.FC = () => {
    return (
        <div className="eighthsection_outer_container">
            {/* Heading */}
            <h2 className='header'>Contact us </h2>
            <p className='subheading'>We&apos;re here to help. Get in touch with us for any inquiries</p>

            {/* Map and Form Section */}
            <div className="eighthsection_container">
                {/* Image Placeholder */}
                <div className="eighthsection_map" >
                    <div className="eighthsection_map_label">
                        <span className="material-icons location-icon">location_on</span> {/* Location icon */}
                        <span className="location-message">
                            <span className="bold-blue">Oaks Hospital</span>: 120 Mile End Road, Colchester, United Kingdom, CO4 5XR<br></br>
                            <span className="bold-blue">Colchester General Hospital</span>: Turner Road, Colchester, United Kingdom, CO4 5JL
                        </span>
                    </div>

                    <Image
                        src={logo} // Use the imported logo image
                        alt="Office Location"
                        width={400}  // Set image width
                        height={200} // Set image height
                        style={{ borderRadius: '10px' }} // Rounded corners for the image
                    />
                </div>

                {/* Contact Form */}
                <div className="eighthsection_form_container">
                    <form className="eighthsection_form">
                        {/* First Name and Last Name in one row */}
                        <div className="eighthsection_row" style={{ display: 'flex', gap: '20px' }}>
                            <div className="eighthsection_form_group">
                                <input
                                    type="text"
                                    id="firstName"
                                    className="eighthsection_input"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>
                            <div className="eighthsection_form_group">
                                <input
                                    type="text"
                                    id="lastName"
                                    className="eighthsection_input"
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="eighthsection_form_group">
                            <input
                                type="email"
                                id="email"
                                className="eighthsection_input"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="eighthsection_form_group">
                            <textarea
                                id="message"
                                className="eighthsection_input eighthsection_textarea"
                                rows={4}
                                placeholder="Enter your message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="eighthsection_submit_button">Sent Message</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default EighthSection;
