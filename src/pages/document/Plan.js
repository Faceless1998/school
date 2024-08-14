import React from "react";
import styles from "./document.module.css";
import backgroundImage from "./../../assets/16.09.2022-2-1-2.jpg";

export default function Plan() {
  const documentList = [
    {
      name: "სკოლის 6 წლიანი გეგმა 2020-2026 წ.",
      filename: "skolis_6_wliani_gegma_2020-2026.pdf",
    },
    {
      name: "სკოლის ერთწლიანი სამოქმედო გეგმა 2023-2024",
      filename: "skolis_ertwliani_samoqmedo_gegma_2023-2024.pdf",
    },
    {
      name: "2023-2024 სწ. სასკოლო სასწავლო გეგმა",
      filename: "2023-2024_sw_saklaso_saswavlo_gegma.pdf",
    },
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
          <h1>სასწავლო გეგმა</h1>
        </header>
        <div className={styles.documentsContainer}>
          {documentList.map((doc, index) => (
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
}
