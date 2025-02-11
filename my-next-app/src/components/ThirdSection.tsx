"use client";
import React, { useState, useEffect } from 'react';
import './ThirdSection.css'; // Import the corresponding CSS file
import Image from 'next/image';
// Import images
import uroOncologyImage from '../Images/urology.png'; // Replace with actual path to the image
import roboticSurgeryImage from  '../Images/robotic.png'; // Replace with actual path
import prostateCancerDiagnosticsImage from  '../Images/search.png'; // Replace with actual path
import lowerUrinaryTractImage from '../Images/incontinence.png'; // Replace with actual path
import bpeHaematuriaImage from  '../Images/penis.png'; // Replace with actual path
import erectileDysfunctionImage from  '../Images/blood.png'; // Replace with actual path

const ThirdSection: React.FC = () => {
  // State to manage how many items are visible on mobile
  const [visibleCount, setVisibleCount] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  // Array of all the items
  const items = [
    {
      image: uroOncologyImage,
      heading: "Uro-Oncology",
      description: "Specializing in prostate, kidney, bladder, and testicular cancer treatments, offering personalized care plans including surgery, radiation, and chemotherapy."
    },
    {
      image: roboticSurgeryImage,
      heading: "Robotic Surgery",
      description: "Advanced robotic surgery for enhanced precision, minimal invasiveness, and faster recovery times, used for various urological surgeries."
    },
    {
      image: prostateCancerDiagnosticsImage,
      heading: "Prostate Cancer Diagnostics",
      description: "Offering comprehensive diagnostic services for early detection of prostate cancer, including PSA testing, biopsy, and advanced imaging."
    },
    {
      image: lowerUrinaryTractImage,
      heading: "Lower Urinary Tract Symptoms",
      description: "Providing diagnosis and treatment for common urinary symptoms such as frequent urination, incontinence, and urgency, improving quality of life for patients."
    },
    {
      image: bpeHaematuriaImage,
      heading: "BPE & Haematuria",
      description: "Expert care for benign prostatic enlargement (BPE) and the management of haematuria (blood in urine), with both medical and surgical solutions."
    },
    {
      image: erectileDysfunctionImage,
      heading: "Erectile Dysfunction & Endometriosis",
      description: "Offering treatments for erectile dysfunction, penile and testicular problems, as well as providing care for women suffering from endometriosis-related pain and infertility."
    }
  ];

  // Function to load more items (for mobile)
  const loadMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Show 5 more items
  };

  // Detect if the device is mobile or tablet
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust to your breakpoint for mobile/tablet
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="third-section">
      <h2 className="header">Service We Offer</h2>
      <p className="subheading">Committed to excellence in every aspect of care and service.</p>

      <div className="circle-container">
        {/* On PC, show all items by default */}
        {items.slice(0, isMobile ? visibleCount : items.length).map((item, index) => (
          <div className="circle-item" key={index}>
            <Image src={item.image} alt={item.heading} className="circle-image" />
            <p className="circle-heading">{item.heading}</p>
            <p className="circle-description">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Show "Load More" button only on mobile */}
      {isMobile && visibleCount < items.length && (
        <button className="load-more-button" onClick={loadMoreItems}>
          See More
        </button>
      )}
    </section>
  );
};

export default ThirdSection;
