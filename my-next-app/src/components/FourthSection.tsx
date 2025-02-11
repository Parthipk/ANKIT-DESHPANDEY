"use client"
import React, { useState } from 'react';
import './Fourth.css'; // Import the corresponding CSS file
import Image from 'next/image';
import logo from '../Images/area.png';
const FourthSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false); // State to manage visibility of extra items

  const toggleList = () => {
    setShowMore(!showMore); // Toggle the state on button click
  };
  return (
    <div className="fourth-section">
      <div className="left-column">
        {/* Heading for the left column */}
        <h2 className="left-section-heading">Areas of expertise</h2>
        
        {/* Description for the section */}
        <p className="left-section-description">
          Based on patient reviews & skill endorsements by other professionals
        </p>
        
        {/* List of points */}
        <ul className="expertise-list">
          <li className="expertise-item">Prostate Cancer (11%)</li>
          <li className="expertise-item">Holmium Laser Enucleation of the Prostate (HoLEP) (11%)</li>
          <li className="expertise-item">Prostatectomy (TURP) (11%)</li>
          <li className="expertise-item">Robotic Nephrectomy (11%)</li>
          <li className="expertise-item">Prostatectomy (Robotic) (10%)</li>
          <li className="expertise-item"> <button className="toggle-button" onClick={toggleList} style={{color:'blue' }}>
          {showMore ? "Show Less" : "others(44%)"}
        </button></li>

          {/* Show additional list items when `showMore` is true */}
          {showMore && (
           <>
           <li className="expertise-item">Nerve Sparing Prostatectomy (10%)</li>
           <li className="expertise-item">Prostate Biopsy (9%)</li>
           <li className="expertise-item">General Urology (7%)</li>
           <li className="expertise-item">Bladder Cancer (3%)</li>
           <li className="expertise-item">Circumcision (1%)</li>
           <li className="expertise-item">Elevated Prostate Specific Antigen (1%)</li>
           <li className="expertise-item">Epididymal Cysts (1%)</li>
           <li className="expertise-item">Erectile Dysfunction (1%)</li>
           <li className="expertise-item">Kidney Cysts (1%)</li>
           <li className="expertise-item">Testicular Lumps & Swellings (1%)</li>
           <li className="expertise-item">Urological Surgery (1%)</li>
           <li className="expertise-item">Benign Prostate Hyperplasia (1%)</li>
           <li className="expertise-item">Bilateral Orchidectomy (1%)</li>
           <li className="expertise-item">Bladder Instillation (1%)</li>
           <li className="expertise-item">Transurethral Resection of a Bladder Tumour (TURBT) (1%)</li>
         </>
          )}
        </ul>

        {/* Button to toggle visibility */}
       
      </div>
      
      <div className="right-column">
      <Image
        src={logo} // Use the imported logo image
        alt="are of expertise"
      />
      </div>
    </div>
  );
};

export default FourthSection;