import React from "react";
import HouseImage from "../images/house.jpg";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${HouseImage}` }}
    ></div>
  );
};
