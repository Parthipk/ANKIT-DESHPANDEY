"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css'; // Importing the CSS module
import MenuIcon from '@mui/icons-material/Menu'; // Import Menu Icon
import CloseIcon from '@mui/icons-material/Close'; // Import Close Icon
import Image from 'next/image'; // Import Image from next/image
import logo from '../Images/logo1.png'; // Import logo image

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State for mobile menu
  const [scrollWidth, setScrollWidth] = useState<number>(0); // Track the scroll width for <hr>

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollWidth(Math.min(window.scrollY / 10, 100)); // Increase width as you scroll, max 100%
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <>
      
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        
        <div className={styles.logoContainer}>
          {/* Using the Image component from next/image */}
          <Image src={logo} alt="Logo" className={styles.logo} width={150} height={50} />
          <span className={styles.logoText}>Dr.Anikit Deshpandey</span>
        </div>
        
        {/* Hamburger Menu */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* Navbar Links */}
        <ul className={`${styles.ul} ${isMenuOpen ? styles.show : ''}`}>
          <li className={styles.li}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.li}>
          <Link href="#second-section">About</Link> 
          </li>
          <li className={styles.li}>
            <Link href="#ThirdSection">Services</Link>
          </li>
          <li className={styles.li}>
            <Link href="/contact">Blog</Link>
          </li>
          <li className={styles.li}>
          <Link href="#EighthSection"> <button className={styles.centerButton}>Book An Appointment</button></Link>
          </li>
        </ul>
      </nav>

     
      <hr className={styles.scrollHr} style={{ width: `${scrollWidth}%` }} />
    </>
  );
};

export default Navbar;
