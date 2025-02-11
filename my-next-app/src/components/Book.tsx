import React from 'react';
import './Book.css'; // Import your CSS file

const Book: React.FC = () => {
    return (
        <div className="book-outer-container">
            <div className="book-container">
                <div className="book-left-column">
                    <h1 className="book-header">Book Your Appointment</h1>
                    <p className="book-description">
                        Welcome to our booking system. Please fill out the form on the right to schedule your appointment.
                        We look forward to serving you!
                        Welcome to our booking system. Please fill out the form on the right to schedule your appointment.
                        We look forward to serving you. Welcome to our booking system. Please fill out the form on the right to schedule your appointment.
                        We look forward to serving you.
                    </p>
                    <div className="book-button-container">
                        <button className="book-button">Learn More</button>
                        <button className="book-button">Contact Us</button>
                    </div>
                </div>
                <div className="book-right-column">
                    <div className="book-form-container">
                        <form className="book-booking-form">
                            <div className="book-form-row">
                                <div className="book-form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="book-form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                            </div>
                            <div className="book-form-row">
                                <div className="book-form-group">
                                    <label htmlFor="date">Date:</label>
                                    <input type="date" id="date" name="date" required />
                                </div>
                                <div className="book-form-group">
                                    <label htmlFor="time">Time:</label>
                                    <input type="time" id="time" name="time" required />
                                </div>
                            </div>
                            <div className="book-form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows={4} required></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
