import React from "react";
import styles from "./teacher.module.css";
import backgroundImage from "./../../assets/16.09.2022-2-1-2.jpg";

export const Teacher =()=> {
  const documentList = [
    {
      name: "საღმრთო სჯულის კათედრა",
    },
    {
      name: "ქართული ენის კათედრა",
    },
    {
      name: "უცხო ენების კათედრა",
    },
    {
      name: "მათემატიკის კათედრა",
    },
    {
      name: "საზოგადოებრივ მეცნიერებათა კათედრა",
    },
    {
      name: "საბუნებისმეტყველო  კათედრა",
    },
    {
      name: "სპორტისა და ესთეტიკური აღზრდის კათედრა",
    },
    {
      name: "დაწყებითი საფეხურის სწავლების კათედრა",
    },
  ];

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  };

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div style={backgroundStyle}>
      <div className={styles.documentsPage}>
        <header className={styles.header}>
          <h1>კათედრები</h1>
        </header>
        <div className={styles.documentsContainer}>
          {documentList.map((doc, index) => (
            <a
              key={index}
              className={styles.documentBox}
              target="_blank"
              rel="noreferrer noopener"
              onClick={handleClick}
              href="./Teacher.js"
            >
              {doc.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
