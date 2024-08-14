import React from 'react'
import IMG1 from "./../../assets/emisi.png";
import IMG2 from "./../../assets/mandatur.png";
import IMG3 from "./../../assets/naeci.png";
import IMG4 from "./../../assets/rustavel.png";
import IMG5 from "./../../assets/xelnaweri.png";
import IMG6 from "./../../assets/esida.png";
import IMG7 from "./../../assets/maswavlebel.png";
import IMG8 from "./../../assets/eqe.png";
import IMG9 from "./../../assets/zspa.png";
import IMG10 from "./../../assets/edu-center.png";
import { Link } from "react-router-dom";
import "./SchoolPart.css"
const partners = [
    {
      link: "http://www.emis.ge/",
      title: "განათლების მართვის საინფორმაციო სისტემა",
      imgSrc: IMG1,
    },
    {
      link: "http://www.naec.ge/",
      title: "შეფასებისა და გამოცდების ეროვნული ცენტრი",
      imgSrc: IMG2,
    },
    {
      link: "http://www.rustaveli.org.ge/",
      title: "შოთა რუსთაველის საქართველოს ეროვნული სამეცნიერო ფონდი",
      imgSrc: IMG3,
    },
    {
      link: "http://mandaturi.gov.ge",
      title: "საგანმანათლებლო დაწესებულების მანდატურის სამსახური",
      imgSrc: IMG4,
    },
    {
      link: "http://www.manuscript.ge/",
      title: "კორნელი კეკელიძის სახ. ხელნაწერთა ეროვნული ცენტრი",
      imgSrc: IMG5,
      className: "manuscript",
    },
    {
      link: "http://www.esida.ge/",
      title:
        "საგანმანათლებლო და სამეცნიერო ინფრასტრუქტურის განვითარების სააგენტო",
      imgSrc: IMG6,
    },
    {
      link: "http://www.tpdc.ge/",
      title: "მასწავლებელთა პროფესიული განვითარების ეროვნული ცენტრი",
      imgSrc: IMG7,
      className: "teacher",
    },
    {
      link: "http://www.eqe.ge/",
      title: "განათლების ხარისხის განვითარების ეროვნული ცენტრი",
      imgSrc: IMG8,
    },
    {
      link: "http://www.zspa.ge/",
      title: "ზურაბ ჟვანიას სახელობის სახელმწიფო ადმინისტრირების სკოლა",
      imgSrc: IMG9,
    },
    {
      link: "http://iec.gov.ge/",
      title: "განათლების საერთაშორისო ცენტრი",
      imgSrc: IMG10,
    },
  ];
  

const SchoolPart = () => {
  return (
    <div>
        <div className="col-md-12 lepls">
        <div className="section-title">
          <span className="pull-left"></span>
        </div>
        <ul className="partniors">
          {partners.map((partner, index) => (
            <li
              key={index}
              className={partner.className}
              data-toggle="popover"
              data-placement="top"
              data-trigger="hover"
              data-content="მიუთითეთ თქვენი სახელი"
            >
              <Link to={partner.link} title={partner.title}>
                <img src={partner.imgSrc} alt={partner.title} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SchoolPart