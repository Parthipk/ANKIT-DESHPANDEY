"use client";
import React, { useState, useRef } from 'react';
import './Blog.css'; // Import your CSS for styling
import Image, { StaticImageData } from 'next/image'; // Import Image and StaticImageData from Next.js

// Import images
import image1 from '../Images/blog1.jpg';
import image2 from '../Images/blog2.jpg';
import image3 from '../Images/blog3.png';
import image4 from '../Images/blog4.jpg';

// Update BlogBox interface to use StaticImageData for the image type
interface BlogBox {
  image: StaticImageData; // This will now be StaticImageData
  header: string;
  description: string;
  smallDescription: string;
}

const Blog: React.FC = () => {
  const blogBoxes: BlogBox[] = [
    {
      image: image1,
      header: 'The Rise of Robotic Surgery in Prostate Cancer Treatment',
      description: 'Robotic surgery offers precision and minimally invasive options for prostate cancer patients. It reduces recovery time, minimizes pain, and improves surgical outcomes. As technology advances, it is becoming the preferred treatment option.',
      smallDescription: 'The Rise of Robotic Surgery in Prostate Cancer Treatment',
    },
    {
      image: image2,
      header: 'How Robotic Surgery Improves Recovery After Prostate Cancer Surgery',
      description: 'Robotic surgery leads to smaller incisions, less pain, and faster recovery. Patients experience fewer complications and a quicker return to daily activities. This method provides a more comfortable post-surgery experience.',
      smallDescription: 'How Robotic Surgery Improves Recovery After Prostate Cancer Surgery',
    },
    {
      image: image3,
      header: 'The Role of Robotic Surgery in Prostate Cancer Biopsy and Diagnosis',
      description: 'Robotic technology enables more precise prostate cancer biopsies, improving diagnostic accuracy. This technique allows for better-targeted tissue sampling and earlier cancer detection. It helps in tailoring personalized treatment plans.',
      smallDescription: 'The Role of Robotic Surgery in Prostate Cancer Biopsy and Diagnosis',
    },
    {
      image: image4,
      header: 'What to Expect During Robotic Prostate Cancer Surgery',
      description: 'Robotic prostate cancer surgery involves small incisions and precise removal of the prostate. The procedure typically results in less pain and a faster recovery. Patients can return to their normal routine sooner with fewer complications.',
      smallDescription: 'What to Expect During Robotic Prostate Cancer Surgery',
    },
  ];

  const [selectedBox, setSelectedBox] = useState(blogBoxes[0]);
  const topSectionRef = useRef<HTMLDivElement>(null);

  const handleBoxClick = (box: BlogBox) => {
    setSelectedBox(box);

    // Scroll to the top section smoothly with offset for header
    if (topSectionRef.current) {
      const headerHeight = 100; // Adjust based on your header height
      window.scrollTo({
        top: topSectionRef.current.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, box: BlogBox) => {
    if (e.key === 'Enter') {
      handleBoxClick(box);
    }
  };

  return (
    <div className="blog-container">
      <div ref={topSectionRef}>
        <h2 className="blog-header">{selectedBox.header}</h2>
        <div className="top-blogbox">
          <p className="top-description">{selectedBox.description}</p>
          <Image
            src={selectedBox.image} // Use the imported image (StaticImageData)
            alt={`Image for ${selectedBox.header}`}
            className="top-image"
          />
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-boxes">
          {blogBoxes.map((box, index) => (
            <div
              key={index}
              className="bottom-box"
              onClick={() => handleBoxClick(box)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, box)}
            >
              <Image
                src={box.image} // Use the imported image (StaticImageData)
                alt={`Blog Post ${index + 1}`}
                className="bottom-image"
              />
              <p className="small-description">{box.smallDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
