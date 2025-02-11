import React from 'react';
import './AboutTwo.css'; // Import the CSS file

const AboutTwo: React.FC = () => {
  return (
    <div className="outer-container">
      <div className="main-header-container">
        <h1 className="main-header">About Us</h1>
        <div className="header-logo"></div> {/* Logo on the right side of the header */}
      </div>
      <div className="about-two-container">
        <div className="column">
          <div className="header-container">
            <div className="logo"></div> {/* Placeholder for the left column logo */}
            <h1>Header for Left Column</h1>
          </div>
          <p className='about-description'>
            This is a paragraph for the left column. It provides information about the topic in question.
            Here we elaborate further on the details to ensure we reach four lines. This additional text 
            helps to provide a clearer understanding of the subject matter discussed here.
          </p>
        </div>
        <div className="column">
          <div className="header-container">
            <div className="logo"></div> {/* Placeholder for the right column logo */}
            <h1>Header for Right Column</h1>
          </div>
          <p className='about-description'>
            This is a paragraph for the right column. It elaborates on a different aspect of the same topic.
            Adding more details helps to create a well-rounded discussion on the subject. This ensures that 
            the reader has enough context to understand the points being made effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
