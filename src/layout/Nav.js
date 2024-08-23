import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "./../assets/logo.jpg";

const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(null);

  const handleNavToggle = (event) => {
    event.preventDefault();
    setNavToggle(!navToggle);
  };

  const handleDropdownToggle = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    if (dropdownOpen === index) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(index);
      setNestedDropdownOpen(null); // Reset nested dropdown when switching main dropdown
    }
  };

  const handleNestedDropdownToggle = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    if (nestedDropdownOpen === index) {
      setNestedDropdownOpen(null); // Close if it's already open
    } else {
      setNestedDropdownOpen(index); // Open the clicked nested dropdown
    }
  };

  const handleOutsideClick = () => {
    setDropdownOpen(null);
    setNestedDropdownOpen(null);
  };

  useEffect(() => {
    if (dropdownOpen !== null || nestedDropdownOpen !== null) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownOpen, nestedDropdownOpen]);

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav>
          <div className="nav-mobile">
            <a
              id="nav-toggle"
              href="#!"
              onClick={handleNavToggle}
              className={navToggle ? "active" : ""}
            >
              <span></span>
            </a>
          </div>
          <ul className={`nav-list ${navToggle ? "open" : ""}`}>
            <li>
              <Link to="/">მთავარი</Link>
            </li>
            <li>
              <a href="#!" onClick={(e) => handleDropdownToggle(1, e)}>
                ჩვენს შესახებ
              </a>
              <ul
                className={`nav-dropdown ${dropdownOpen === 1 ? "open" : ""}`}
              >
                <li>
                  <a
                    href="#!"
                    onClick={(e) => handleNestedDropdownToggle(1, e)}
                  >
                    სკოლის შესახებ
                  </a>
                  <ul
                    className={`nested-dropdown ${
                      nestedDropdownOpen === 1 ? "open" : ""
                    }`}
                  >
                    <li>
                      <Link to="/school/philosophy">ფილოსოფია</Link>
                    </li>
                    <li>
                      <Link to="/school/structure">სტრუქტურა</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/director">დირექტორი</Link>
                </li>
                <li>
                  <Link to="/teacher">კათედრები</Link>
                </li>
                <li>
                  <Link to="/student">მოსწავლეები</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#!" onClick={(e) => handleDropdownToggle(2, e)}>
                დოკუმენტები
              </a>
              <ul
                className={`nav-dropdown ${dropdownOpen === 2 ? "open" : ""}`}
              >
                <li>
                  <Link to="/law">შინაგანაწესი</Link>
                </li>
                <li>
                  <Link to="/plan">სასკოლო სასწავლო გეგმა</Link>
                </li>
                <li>
                  <Link to="/calendar">კალენდარი</Link>
                </li>
                <li>
                  <Link to="/research">კვლევები</Link>
                </li>
                <li>
                  <Link to="/club">კლუბები</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/gallery">ფოტო გალერეა</Link>
            </li>
            <li>
              <Link to="/contact">კონტაქტი</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
