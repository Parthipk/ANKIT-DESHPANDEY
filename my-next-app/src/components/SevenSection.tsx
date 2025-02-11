"use client";
import React, { useState } from 'react';
import './SevenSection.css'; // Import the corresponding CSS file
import Image from 'next/image';
import logo from '../Images/faq.png';

const SevenSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Where is Mr Aniket Deshpande located?',
      content: 'Mr Aniket Deshpande primarily practices at Oaks Hospital, located at 120 Mile End Road, Colchester, United Kingdom, CO4 5XR'
    },
    {
      title: 'What are Mr Aniket Deshpande working hours?',
      content: 'Mr Aniket Deshpande is working Tuesday (18:00 - 20:15), Thursday (08:45 - 13:00) Find where Mr Aniket Deshpande operates'
    },
    {
      title: 'Does Mr Aniket Deshpande accept new patients?',
      content: 'Mr Aniket Deshpande generally accepts new patients.Get in touch with this specialist to enquire as a new patient'
    },
    {
      title: 'What languages does Mr Aniket Deshpande speak?',
      content: 'Mr Aniket Deshpande speaks English, Gujarati, Hindi, Marathi and Punjabi'
    },
    {
      title: 'What are Mr Aniket Deshpandes reviews like?',
      content: 'Mr Aniket Deshpandes overall patient rating is 4.94 out of 5 stars on Doctify.'
    }
  ];

  return (
    <>
    <h2 className='header'>Frequently Asked Questions</h2>
    <p className='subheading'>Find answers to the most common questions below</p>
    <div className="sevensection_container">
      <div className="sevensection_content">
        {/* Left Side: Placeholder Image */}
        <div className="sevensection_image">
        <Image
            src={logo}// Placeholder image
            alt="Doctor"
            className="sevensection_image_placeholder"
          />
        </div>

        {/* Right Side: Accordion FAQ */}
        <div className="sevensection_faq">
         
          {accordionData.map((item, index) => (
            <div key={index} className="sevensection_accordion">
              <div className="sevensection_accordion_header" onClick={() => toggleAccordion(index)}>
                <h2 className="sevensection_accordion_title">{item.title}</h2>
                <span
                  className="sevensection_accordion_icon material-icons"
                  style={{ fontSize: '30px', marginLeft: '10px' }} // Increase font size here
                >
                  {activeIndex === index ? 'arrow_circle_up' : 'arrow_circle_down'}
                </span>
              </div>
              {activeIndex === index && (
                <div className="sevensection_accordion_content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default SevenSection;
