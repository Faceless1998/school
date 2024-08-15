import React from "react";
import styles from "./document.module.css";
import backgroundImage from "./../../assets/16.09.2022-2-1-2.jpg";

export const Law = () => {
  const documentList = [
    { name: "შინაგანაწესი", filename: "shinaganawesi.pdf" },
    { name: "წესდება", filename: "wesdeba.pdf" },
    {
      name: "სამსახურის ინსტრუქციები",
      filename: "samsaxuris_instruqciebi.pdf",
    },
    {
      name: "პედაგოგთა საბჭოს დებლება",
      filename: "pedagogta_sabchos_debuleba.pdf",
    },
    { name: "ბიბლიოთეკის დებულება", filename: "bibliotekis_debuleba.pdf" },
    {
      name: "საგანგებო სიტუაციებისას რეაგირების მართვა",
      filename: "sagangebo_situaciebisas_reagirebis_martva.pdf",
    },
   
    {
      name: "დისციპლინური საბჭოს დებულება",
      filename: "disciplinuri_sabchos_debuleba.pdf",
    },
    {
      name: "მშობელთა კომიტეტის დებულება",
      filename: "mshobelta_komitetis_debuleba.pdf",
    },
    {
      name: "უსაფრთხოებისა და საზოგადოებრივი წესრიგის დაცვის წესი და პირობები",
      filename:
        "usafrtxoebis_da_sazogadoebrivi_westigis_dacvis_wesi_da_pirobebi.pdf",
    },
    {
      name: "ხარისხის უზრუნველყოფის სამსახურის დებულება",
      filename: "xarisxis_uzrunvelyofis_samsaxuris_debuleba.pdf",
    },
    {
      name: "პერსონალურ მონაცემთა დაცვის მექანიზმი",
      filename: "personalur_monacemta_dacvis_meqanizmi.pdf",
    },
    {
      name:"ავტორიზაციის საბჭოს გადაწყვეტილება",
      filename:"avtorizaciis_sabchos_gadawkvetileba_27.12.2019.pdf"
    },
    {
      name:"ვერიფიკაცია-ვალიდობის მექანიზმების  დოკუმენტი",
      filename:"verifikacia_validurobis_meqanizmebis_dokumenti.pdf"
    },
    {
      name:"კურიკულუმის შემუშავების მეთოდოლოგიის დოკუმენტი",
      filename:"kurikulumis_shemushavebis_metodologiis_dokumenti.pdf"
    },
    {
      name:"საქმისწარმოების წესი",
      filename:"saqmiswarmoebis_wesi.pdf"
    },
    {
      name:"სკოლის პერსონალურ მონაცემთა დაცვის პოლიტიკა",
      filename:"skolis_personalur_monacemta_dacvis_politika.pdf"
    }
  ];

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
  };

  return (
    <div style={backgroundStyle}>
      <div className={styles.documentsPage}>
        <header className={styles.header}>
          <h1>დოკუმენტები</h1>
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
};
