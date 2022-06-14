import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHashtag, FaRegCalendar, FaRegHandPointRight } from "react-icons/fa";

import "./styles.css";
function BasicService() {
  return (
    <>
      <div className="bsic-service">
        <div className="fist-div px-5">
          <FaAngleLeft className="searchicon-left" />
          <h2 className="basicservice">Basic Services</h2>
        </div>
        <div className="fist-div px-5">
          <div className="search-icon">
            <FaSearch className="searchicon" />
          </div>
          <div className="search-icon">
            <FaBell className="searchicon" />
          </div>
        </div>
      </div>
      <div className="pro">
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
      </div>
      <div className="pro-2">
        <div className="bar-values">
          <div>E</div>
          <div>Vehicle</div>
          <div>Services</div>
          <div>Garage</div>
          <div>Book</div>
          <div>F</div>
        </div>
      </div>
      <div className="Caresol px-5">
        <div className="card">
          <img
            className="card-image"
            src="./image1.jfif"
            alt="image bot found"
          />
        </div>
        <div className="card">
          <img
            className="card-image"
            src="./image4.png"
            alt="image bot found"
          />
        </div>
        <div className="card">
          <img
            className="card-image"
            src="./image2.jpg"
            alt="image bot found"
          />
        </div>
        <div className="card">
          <img
            className="card-image"
            src="./image3.png"
            alt="image bot found"
          />
        </div>
        <div className="card">
          <img
            className="card-image"
            src="./image1.jfif"
            alt="image bot found"
          />
        </div>
        <div className="card">
          <img
            className="card-image"
            src="./image4.png"
            alt="image bot found"
          />
        </div>
        <div className="card">
          <img
            className="card-image"
            src="./image2.jpg"
            alt="image bot found"
          />
        </div>
      </div>
      <div className="basic-servuces px-5">
        <h1 className="basicservice">Basic Service</h1>
        <div className="basic-div">
          {" "}
          <FaHashtag />
          <p className="p-tag">Every 500 Kms 3Months</p>
        </div>
        <div className="basic-div">
          {" "}
          <FaRegCalendar />
          <p className="p-tag">Every 500 Kms 3Months</p>
        </div>
        <button type="button" className="btn btn-primary ">
          Add service
        </button>
      </div>
      <div className="what-included px-5">
        <h1 className="basicservice">What's Included ?</h1>
        <p className="p-tags">
          {" "}
          <FaRegHandPointRight /> Engine Oil Replacement
        </p>
        <p className="p-tags">
          {" "}
          <FaRegHandPointRight /> Oil Filter
        </p>
        <p className="p-tags">
          {" "}
          <FaRegHandPointRight /> Air Filter
        </p>
        <p className="p-tags">
          {" "}
          <FaRegHandPointRight /> Coolant Top Up
        </p>
        <p className="p-tags">
          {" "}
          <FaRegHandPointRight /> Watetr Fluid Replacement
        </p>
        <p className="p-tags">
          {" "}
          <FaRegHandPointRight /> Battery Water Top Up
        </p>
        <p className="p-tags">
          {" "}
          <FaRegHandPointRight /> Heart/Spark plugs ckecking
        </p>
      </div>
    </>
  );
}

export default BasicService;
