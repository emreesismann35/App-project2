import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <div className="mainLink">
          <Link to="/"> Anasayfa</Link>
          <Link to="/projeadd">Proje Ekleme</Link>
          <Link to="/projectlist">Proje Listesi</Link>
          <Link to="/about">Hakkımızda</Link>
        </div>
      </div>
    </div>
  );
};

