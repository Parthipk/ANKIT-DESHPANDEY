"use client";
import React, { useEffect, useState } from 'react';
import './SixSection.css';

interface TestimonialProps {
  image: string;
  description: string;
  author: string;
}

const SixSection: React.FC<TestimonialProps> = ({ image, description, author }) => {
  return (
    <div className="testimonial-box">
      <div className="testimonial-container">
        <div className="image-column">
          <img
            src={image}
            alt="Testimonial"
            className="testimonial-image"
          />
        </div>
        <div className="content-column">
          <div className="star-rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className="star-icon">★</span>
            ))}
          </div>
          <p className="testimonial-description">
            {description}
          </p>
          <h4 className="testimonial-author">{author}</h4>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      image: 'https://i.pravatar.cc/100?img=52',
      description: `"Mr. Deshpande’s expertise in robotic surgery made my prostate cancer treatment smooth and recovery quick. He explained everything clearly and made me feel supported throughout. Highly recommended!"`,
      author: '- Alice Johnson'
    },
    {
      image: 'https://i.pravatar.cc/100?img=59',
      description: `"Mr. Deshpande performed my HoLEP procedure for BPE. The recovery was fast, and he provided excellent aftercare. I’m pain-free now and very grateful for his expertise."`,
      author: '- Bob Smith'
    },
    {
      image: 'https://i.pravatar.cc/100?img=60',
      description: `"Mr. Deshpande’s personalized care for my erectile dysfunction was life-changing. He listened, explained, and gave me great results. Very happy with the treatment."`,
      author: '- Carol White'
    },
    {
      image: 'https://i.pravatar.cc/100?img=63',
      description: `"Thanks to Mr. Deshpande’s robotic surgery for my endometriosis, I feel so much better. His collaborative approach and expertise were invaluable."`,
      author: '- David Brown'
    },
    {
      image: 'https://i.pravatar.cc/100?img=64',
      description: `"Mr. Deshpande treated my bladder cancer with robotic surgery. He explained everything clearly, and my recovery was smooth. Very grateful for his care."`,
      author: '- Emily Davis'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // Default to 1 for mobile

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 2); // 1 for mobile, 2 for desktop
    };

    updateVisibleCount(); // Initial check
    window.addEventListener('resize', updateVisibleCount); // Update on resize

    return () => {
      window.removeEventListener('resize', updateVisibleCount); // Cleanup listener
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  return (
    <div className="testimonial-outer-container">
      <div className="testimonial-intro">
      <h3 className="main-heading">What Our Patients Have to Say</h3>
<h3 className="sub-heading">Your experience matters to us, and we’re here to listen.</h3>

      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevious} aria-label="Previous">
          <span className="material-icons" style={{ marginTop: '2px',lineHeight:'.8' }}>arrow_back_ios</span>
        </button>
        <button onClick={handleNext} aria-label="Next">
          <span className="material-icons" style={{ marginTop: '2px',lineHeight:'.8' }}>arrow_forward_ios</span>
        </button>
      </div>
      <div className="testimonial-slider">
        {/* Show testimonials based on visibleCount */}
        {testimonialsData.slice(currentIndex, currentIndex + visibleCount).map((testimonial, index) => (
          <SixSection key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
