import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import { Link } from "react-router-dom";

const Header = ({ children, onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the current scroll position
      const scrollY = window.scrollY;

      // Set a threshold value (e.g., 100) to trigger the change
      const threshold = 20;

      // Update the state to indicate if the user has scrolled beyond the threshold
      setIsScrolled(scrollY > threshold);
    };

    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`landing-header ${
        isScrolled && !onSearch ? "white-bg" : ""
      }  ${onSearch ? "white-bg" : ""}`}
    >
      <div className="header-one">
        <div className="logo">
          <Link to="/">
            {!isScrolled && !onSearch ? (
              <img src={logo} />
            ) : (
              <img src={logo2} />
            )}
          </Link>
        </div>
        {/* {props.children} */}
        <div className="header-search">
          {isScrolled && !onSearch ? children : <></>}
          {onSearch ? children : <></>}
        </div>
        <button>Upload</button>
      </div>
      {!isScrolled && !onSearch ? null : (
        <div className="mobile-search">{children}</div>
      )}
    </div>
  );
};

export default Header;
