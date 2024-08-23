import React from "react";
import styles from "./document.module.css";
import backgroundImage from "./../../assets/16.09.2022-2-1-2.jpg";

export const Club = ()  => {
    const clubList = [
        { name: "ასტრონომიის კლუბი ", filename: "astronomiis_klubi.pdf" },
        {
          name: "ხელოვნების სტუდია - ART MANET",
          filename: "art_manet.pdf",
        }
      ];

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    height:"100vh"
  };


  return (
    <div style={backgroundStyle}>
      <div className={styles.documentsPage}>
        <header className={styles.header}>
          <h1>კლუბები</h1>
        </header>
        <div className={styles.documentsContainer}>
          {clubList.map((doc, index) => (
            <a
              key={index}
              className={styles.documentBox}
              target="_blank"
              rel="noreferrer noopener"
              href={`https://batumi-gimnazia.edu.ge/documents/${doc.filename}`}
            >
              {doc.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
