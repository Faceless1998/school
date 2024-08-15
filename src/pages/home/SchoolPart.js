import React from 'react'
import IMG1 from "./../../assets/emisi.png";
import IMG2 from "./../../assets/naeci.png";
import IMG3 from "./../../assets/acharakultura.png";
import IMG4 from "./../../assets/Ministry_of_Education_and_Science_of_Georgia_logo.png";
import IMG5 from "./../../assets/images.png";
import IMG6 from "./../../assets/maswavlebel.png";
import IMG7 from "./../../assets/eqe.png";
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
      link: "http://adjara.gov.ge/",
      title: "შოთა რუსთაველის საქართველოს ეროვნული სამეცნიერო ფონდი",
      imgSrc: IMG3,
    },
    {
      link: "https://mes.gov.ge/",
      title: "საქართველოს განათლების, მეცნიერებისა და ახალგაზრდობის სამინისტრო",
      imgSrc: IMG4,
    },
    {
      link: "https://patriarchate.ge/",
      title: "საქართველოს საპატრიარქო ",
      imgSrc: IMG5,
      className: "manuscript",
    },
    {
      link: "http://www.tpdc.ge/",
      title: "მასწავლებელთა პროფესიული განვითარების ეროვნული ცენტრი",
      imgSrc: IMG6,
      className: "teacher",
    },
    {
      link: "http://www.eqe.ge/",
      title: "განათლების ხარისხის განვითარების ეროვნული ცენტრი",
      imgSrc: IMG7,
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