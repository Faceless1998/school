import React from "react";
import styles from "./student.module.css";
import "./image.css"
import backgroundImage from "./../../assets/16.09.2022-2-1-2.jpg";
import responsiveImage from "./../../assets/philosophy.png"; // Import your responsive image here

export const Philosophys = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  };

  return (
    <div style={backgroundStyle}>
      <header className={styles.header}>
        <h1>ფილოსოფია</h1>
      </header>
      <div className="imageContainer">
        <img src={responsiveImage} alt="Responsive" className="responsiveImage" />
      </div>
    </div>
  );
};
