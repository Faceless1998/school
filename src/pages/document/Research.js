import React from "react";
import styles from "./document.module.css";
import backgroundImage from "./../../assets/16.09.2022-2-1-2.jpg";

export const Research = ()  => {
  

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    height:"100vh"
  };

  // const handleDocumentClick = (file) => {
  //   window.open(file, "_blank");
  // };

  return (
    <div style={backgroundStyle}>
      <div className={styles.documentsPage}>
        <header className={styles.header}>
          <h1>კვლევები</h1>
        </header>
        <div className={styles.documentsContainer}>
          {/* {documentList.map((doc, index) => (
            <div
              key={index}
              className={styles.documentBox}
              onClick={() => handleDocumentClick(doc.file)}
            >
              {doc.name}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
