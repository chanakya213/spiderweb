import React from "react";
import "./styles.css";
import { FaMastodon, FaAutoprefixer } from "react-icons/fa";
const Mycourse = () => {
  return (
    <>
      <h1 className="text-center mt-2">My Courses</h1>
      <div className="container-fluid p-3 d-flex w-100 justify-content-around mt-3 flex-wrap">
        <div className="card">
          <img src="./course1.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Sql Developer</h5>
            <div className="cardData d-flex justify-content-between">
              <div className="d-flex bg-secondary1 px-2 pt-2">
                <FaMastodon /> <h6 className="mx-1">500.99</h6>
              </div>
              <div className=" d-flex">
                <h6>08-06-2022</h6>
              </div>
            </div>
            <div className="cardData d-flex justify-content-between mt-1">
              <div className="d-flex bg-secondary1 px-2 pt-2">
                <FaAutoprefixer /> <h6 className="mx-1">Santhosh Kumar</h6>
              </div>
              <div className=" d-flex">
                <h6>More Details {" >>"}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./course2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">React Developer</h5>
            <div className="cardData d-flex justify-content-between">
              <div className="d-flex bg-secondary1 px-2 pt-2">
                <FaMastodon /> <h6 className="mx-1">400.99</h6>
              </div>
              <div className=" d-flex">
                <h6>08-06-2022</h6>
              </div>
            </div>
            <div className="cardData d-flex justify-content-between mt-1">
              <div className="d-flex bg-secondary1 px-2 pt-2">
                <FaAutoprefixer /> <h6 className="mx-1">Salman mohamad</h6>
              </div>
              <div className=" d-flex">
                <h6>More Details {" >>"}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./course3.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Angular Developer</h5>
            <div className="cardData d-flex  justify-content-between">
              <div className="d-flex bg-secondary1 px-2 pt-2">
                <FaMastodon /> <h6 className="mx-1">400.99</h6>
              </div>
              <div className=" d-flex">
                <h6>08-06-2022</h6>
              </div>
            </div>
            <div className="cardData d-flex justify-content-between mt-1">
              <div className="d-flex bg-secondary1 px-2 pt-2">
                <FaAutoprefixer /> <h6 className="mx-1">Sandy pittala</h6>
              </div>
              <div className=" d-flex">
                <h6>More Details {" >>"}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mycourse;
