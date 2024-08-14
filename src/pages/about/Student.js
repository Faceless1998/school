import React from "react";
import styles from "./student.module.css";
import backgroundImage from "./../../assets/16.09.2022-2-1-2.jpg";

export const Student = ()  => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    height:"100vh"
  };


  return (
    <div style={backgroundStyle}>
      <div>
        <header className={styles.header}>
          <h1>მოსწავლეები</h1>
        </header>
      </div>
    </div>
  );
};
