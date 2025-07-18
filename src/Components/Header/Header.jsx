import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="headerContainer">
        <div className="logo">
          <a href="#">
            Logo <span style={{ color: "red", fontWeight: "800" }}>Here</span>
          </a>
        </div>

        <div className="menuList">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
            <li>
              <a href="#idmail">Contact Us</a>
            </li>
          </ul>
        </div>
        <div
          className="burger-menu-container"
          onClick={() => {
            setIsActive(true);
          }}
        >
          <img src="./assets/Burger.png" />
        </div>
      </div>
      <div className={`burger-container ${isActive ? "active" : ""}`}>
        <div className="close-button" onClick={() => setIsActive(false)}>
          <h1>X</h1>
        </div>
        <ul>
          <li>
            <a href="#" onClick={() => setIsActive(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#location" onClick={() => setIsActive(false)}>
              Location
            </a>
          </li>
          <li>
            <a href="#idmail" onClick={() => setIsActive(false)}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
