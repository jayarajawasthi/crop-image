import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Crop-image</h1>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
};

export default Header;
