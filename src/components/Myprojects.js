import React from "react";
import "./styles.css";

const Myprojects = () => {
  return (
    <>
      <h1 className="text-center mt-4">My Projects</h1>
      <div className="container-fluid p-3 d-flex w-100 justify-content-around mt-3 flex-wrap">
        <div className="card">
          <img src="./card2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Sql Developer</h5>
            <p>this is a demo description</p>
          </div>
        </div>
        <div className="card">
          <img src="./card3.jfif" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">React Developer</h5>
            <p>this is a demo description</p>
          </div>
        </div>
        <div className="card">
          <img src="./laptop.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Angular Developer.</h5>
            <p>this is a demo description</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Myprojects;
