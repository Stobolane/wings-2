import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import wings3 from '../assets/wings3.jpeg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import '../dashcss.css';

function Dashboard() {
  const images = [image1, image2, wings3, image4, image5, image6, image7, image8];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h1 className="title">Wings Cafe</h1>
      <section className="welcome-message">
        <h4>Welcome</h4>
        <p>Welcome to Wings Cafe - Fly High with Wings Cafe</p>
        <p>We offer a wide variety of wings, sauces, and sides to satisfy your cravings.Hurry! Delicious Deals</p>
        
      </section>

      
      

      <div className="carousel">
        {images.length > 0 && (
          <div className="image-container">
            <img
              src={images[currentImageIndex]}
              alt={`Carousel image ${currentImageIndex + 1}`}
              className="carousel-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
