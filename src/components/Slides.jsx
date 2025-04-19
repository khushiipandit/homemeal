import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {

      text: "The rising global concern over carbon emissions and their impact on climate change led to the conception of our project. Our team recognized the need for a comprehensive platform to monitor the carbon footprint produced by coal plants, aiming to drive actionable insights and promote sustainability.",
      imgSrc: "/src/image/tum.png",
    },
    {
    
      text: "With a clear understanding of the challenges, our team embarked on developing a solution—a platform capable of real-time monitoring of carbon emissions. This phase involved extensive collaboration with environmental scientists, software developers, and data analysts to create a tool that is both accurate and user-friendly",
      imgSrc: "/src/image/agar.png", // Replace with actual image paths
    },
    {
     
      text: "Before launching the platform, we conducted multiple rounds of testing and iteration. Real-world data was integrated, and feedback from experts was used to refine the tool, ensuring it met the high standards required for accuracy and reliability.",
      imgSrc: "/src/image/manaoge.png", // Replace with actual image paths
    },
    {
     
      text: "Before launching the platform, we conducted multiple rounds of testing and iteration. Real-world data was integrated, and feedback from experts was used to refine the tool, ensuring it met the high standards required for accuracy and reliability.",
      imgSrc: "/src/image/to.png", // Replace with actual image paths
    },
    {
     
      text: "Before launching the platform, we conducted multiple rounds of testing and iteration. Real-world data was integrated, and feedback from experts was used to refine the tool, ensuring it met the high standards required for accuracy and reliability.",
      imgSrc: "/src/image/maan.png", // Replace with actual image paths
    },

    {
     
      text: "We are committed to continuously improving the platform by incorporating advanced technologies and expanding its reach. Our vision for the future includes integrating AI for predictive analysis and broadening the scope to monitor other sources of emissions, driving global sustainability efforts.",
      imgSrc: "/src/image/jaunga.png", // Replace with actual image paths
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full flex flex-col items-center justify-center text-center">
      <div className="w-[401.3px] flex flex-row items-start justify-start relative max-w-full text-center text-xl text-black-white-white">
      
        <h3 className="m-0 h-[212px] flex-1 relative text-inherit font-normal font-[inherit] inline-block max-w-full z-[2]">
          {slides[currentSlide].text}
        </h3>
        
        <img
          className="h-[250px] w-[245.3px] absolute !m-[0] top-[-23px] right-[-222.7px] object-cover z-[4]"
          loading="lazy"
          alt="Carousel slide"
          src={slides[currentSlide].imgSrc}
        />
      </div>
    </div>
  );
};

export default Slides;
