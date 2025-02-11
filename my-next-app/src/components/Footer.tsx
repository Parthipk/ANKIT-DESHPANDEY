import React from 'react';
import './Footer.css'; // Ensure to create the CSS file for styling

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                {/* First Column: Logo, Text, Social Media Links */}
                <div className="footer_column footer_left_column">
                    {/* <img
                        src="/path-to-your-logo.png"
                        alt="Logo"
                        className="footer_logo"
                    /> */}
                    <h3 className="footer_heading" style={{ color: 'white' }}>Dr Ankit Deshpandey</h3>
                    <p className="footer_text">
                        <strong>Oaks Hospital:</strong> 120 Mile End Road, Colchester, United Kingdom, CO4 5XR<br></br>
                        <strong>Colchester General Hospital:</strong>Turner Road, Colchester, United Kingdom, CO4 5JL
                    </p>
                    <div className="footer_social">
                        <a href="#" className="social_link">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social_link">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social_link">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Column 2: Placeholder Text with Heading */}
                <div className="footer_column">
                    <h3 className="footer_heading">Quick Links</h3>
                    <p><a href="/about-us">About Us</a></p>
                    <p><a href="/treatments">Treatments</a></p>
                    <p><a href="/contact-us">Contact Us</a></p>
                    <p><a href="/faq">Frequently Asked Questions</a></p>
                    <p><a href="/blog">Blog</a></p>
                </div>


                {/* Column 3: Placeholder Text with Heading */}
                <div className="footer_column">
                    <h3 className="footer_heading">Consultation fees</h3>
                    <p>New appointment: £200</p>
                    <p>Follow-up appointment: £150</p>
                </div>

                {/* Column 4: Placeholder Text with Heading */}
                <div className="footer_column">
                    <h3 className="footer_heading">Opening Hours(Oaks Hosptial)</h3>

                    <p><strong>Tuesday----</strong>18:00 - 20:15</p>
                    <p><strong>Thursday---</strong> 08:45 - 13:00</p>
                    <a href=''> <p><strong>Other Days--</strong>Enquire</p></a>

                </div>
            </div>
            <hr className='hr'></hr>

            {/* Copyright Section */}
            <div className="footer_copyright">
                <p>&copy; Dr. Ankit Deshpandey. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
