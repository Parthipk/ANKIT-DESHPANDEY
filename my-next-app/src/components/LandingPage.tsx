"use client"
import React from 'react';
import styles from './LandingPage.module.css';
import Image from 'next/image';
import image from '../Images/face image.png';
import boxImage1 from '../Images/box1.png';  // Your box1 image path
import boxImage2 from '../Images/box2.png';  // Your box2 image path

const LandingPage: React.FC = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: 700,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.heading}>Dr. Aniket Deshpande</h1>
        <p className={styles.subHeadingOne}>
          Urologist <i className="bi bi-geo-alt-fill" style={{color: 'red'}}></i> Colchester, CO4 5XR
        </p>
        <p className={styles.subHeading}>Providing Personalized Urological Solutions for Better Health</p>
        <button className={styles.readMoreButton} onClick={handleScroll}>
          Read More
        </button>
      </div>
      <div className={styles.rightColumn}>
        <Image src={image} alt="Description" className={styles.image} />
      </div>

      {/* Box 1 */}
      <div className={styles.box1}>
        <Image src={boxImage1} alt="Box 1" layout="fill" objectFit="cover" className={styles.boxImage} />
      </div>

      {/* Box 2 */}
      <div className={styles.box2}>
        <Image src={boxImage2} alt="Box 2" layout="fill" objectFit="cover" className={styles.boxImage} />
      </div>
    </div>
  );
};

export default LandingPage;
