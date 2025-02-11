import React from 'react';
import styles from './SecondSection.module.css';
import Image from 'next/image';
import logo from '../Images/Group 162 (2).png';

const SecondSection: React.FC = () => {
  return (
    <div className={styles.secondSectionContainer}>
      {/* Use the Next.js Image component for automatic optimization */}
      <Image
        src={logo} // Use the imported logo image
        alt="About Us"
        className={styles.secondSectionImage}
      />
      <div className={styles.secondSectionText}>
        <h2>My Professional Journey</h2>
        <p className={styles.textDescription} style={{lineHeight:"1.8"}} >
          Mr. Aniket Deshpande is a Consultant Robotic & Laparoscopic Urological Surgeon based at Colchester General and Oaks Hospital, specializing in uro-oncology and minimally invasive procedures. He is an expert in robotic urological cancer surgery, prostate cancer biopsies, and adrenalectomies. With extensive training in the UK and India, he offers personalized care for a range of urological conditions. His private practice provides in-person, phone, and video consultations, ensuring accessible care for all patients.
        </p>
        <ul className={styles.specializationsList}>
          <li className={styles.listItem}><span className={styles.checkmark}>✓</span> Specializes in prostate, kidney, bladder, and testicular cancers.</li>
          <li className={styles.listItem}><span className={styles.checkmark}>✓</span> Expert in robotic urological procedures, including cancer surgeries.</li>
          <li className={styles.listItem}><span className={styles.checkmark}>✓</span> Advanced diagnostics for prostate cancer, including biopsies.</li>
          <li className={styles.listItem}><span className={styles.checkmark}>✓</span> Treats lower urinary tract symptoms and BPE.</li>
          <li className={styles.listItem}><span className={styles.checkmark}>✓</span> Provides treatment for haematuria and urinary infections.</li>
          <li className={styles.listItem}><span className={styles.checkmark}>✓</span> Expert in managing erectile dysfunction and penile/testicular problems.</li>
          <li className={styles.listItem}><span className={styles.checkmark}>✓</span> Offers robotic assistance for endometriosis management.</li>
        </ul>
      </div>
    </div>
  );
};

export default SecondSection;
 