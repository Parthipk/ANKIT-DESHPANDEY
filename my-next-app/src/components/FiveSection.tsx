"use client";
import React, { useState, useEffect } from 'react';
import './FiveSection.css'; // Import the corresponding CSS file
import Image, { StaticImageData } from 'next/image';

// Import images
import image1 from '../Images/mumbai.jpg';
import image2 from '../Images/brimingham.png';
import image3 from '../Images/royal.png';

// Type for image data (this will handle both StaticImageData and string URLs)
type BoxData = {
  heading: string;
  description: string;
  imageUrl: string | StaticImageData; // Can accept both string URLs and StaticImageData
};

const FiveSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false); // Initialize as false
  const [currentIndex, setCurrentIndex] = useState(0); // Start at index 0
  const totalBoxes = 3; // Update to 3 boxes

  useEffect(() => {
    // Check if window is defined to prevent errors during SSR
    if (typeof window !== "undefined") {
      // Set the initial mobile state after the component mounts
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      handleResize(); // Call it once initially to set the correct state

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBoxes);
    }, 10000); // Change box every 10 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [totalBoxes]);

  // Array of box data (headings, descriptions, and image URLs)
  const boxesData: BoxData[] = [
    {
      heading: 'MBBS (2001)',
      description: 'University of Mumbai, India. Completed foundational medical training with a focus on clinical and practical knowledge in medicine and surgery.',
      imageUrl: image1, // Imported image
    },
    {
      heading: 'PGDip in Clinical Oncology (2012)',
      description: 'University of Birmingham, UK. Specialized training in clinical oncology, enhancing skills in cancer diagnosis and treatment.',
      imageUrl: image2,  // Imported image
    },
    {
      heading: 'FRCS (Urol) (2013)',
      description: 'Royal College of Surgeons of England, UK. Advanced qualification in urology, demonstrating expertise in surgical techniques and patient care in the field of urology.',
      imageUrl: image3,  // Imported image
    },
  ];

  // Create boxes using the data array
  const boxes = boxesData.map((box, index) => (
    <div className="five-box" key={index}>
      <div className="five-image-container">
        <Image
          src={box.imageUrl} // StaticImageData for Next.js images (works with both static imports and external URLs)
          alt={`Box image ${index + 1}`}
          className="five-box-image"
          width={200}
        />
      </div>
      <div className="five-text-container">
        <h2 className="five-heading" style={{ color: '#0077b6', fontWeight: 'bold' }}>{box.heading}</h2>
        <p className="five-description" style={{ color: 'grey'}}>{box.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="five-fll-width-container">
      <div className="five-centered-container">
        {/* Intro Text Section */}
        <div className="five-intro-text">
          <h1 className="five-main-heading" style={{ marginTop: '50px' }}>
          My Qualifications 
          </h1>
          {/* <hr style={{ backgroundColor: '#03045e', height: '3px', border: 'none',width:'180px' }} /> */}

          <h3 className="five-sub-heading">Committed to excellence with a foundation of advanced education and expertise</h3>
        </div>

        {/* Slider Section */}
        <div className="five-slider-container">
          <div
            className="five-slider"
            style={{
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 50)}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {boxes}
          </div>
        </div>

        {/* Dot Navigation Section */}
        <div className="five-dot-nav" style={{ marginBottom: '50px' }}>
          {boxesData.map((_, index) => (
            <span
              key={index}
              className={`five-dot ${index === currentIndex ? 'five-active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiveSection;
