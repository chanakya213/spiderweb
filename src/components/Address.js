import React from "react";
import "./styles.css";
const Address = () => {
  return (
    <>
      <div className="details d-flex flex-wrap container-fluid mt-3 w-100 justify-content-between pb-3">
        <div className="mainContainer">
          <div className="d-flex flex-nowrap justify-content-between mt-3 px-2">
            <h3 className="text-dark">Contact Details</h3>
            <h3>Edit</h3>
          </div>
          <div className="d-flex bigBoxes w-100 h-20 bg-light">
            <h5 className="text-dark p-3">Chan Chanakya</h5>
          </div>
          <div className="d-flex w-100 h-20 justify-content-between mt-3">
            <div className="d-flex smallBoxes h-20 bg-light p-3">
              sample@gmail.com
            </div>
            <div className="d-flex smallBoxes h-20 bg-light p-3">Phone</div>
          </div>
          <div className="d-flex w-100 h-20 justify-content-between mt-3 ">
            <div className="d-flex smallBoxes h-20 bg-light p-3">Male</div>
            <div className="d-flex smallBoxes h-20 bg-light p-3">
              Date Of Birth :
            </div>
          </div>
          <div className="d-flex w-100 h-20 bg-light mt-3">
            <h5 className="text-dark p-3">Secator of Activity</h5>
          </div>
        </div>
        <div className="mainContainer">
          <div className="d-flex flex-nowrap justify-content-between mt-3 px-2">
            <h3 className="text-dark">Address Details</h3>
            <h3>Edit</h3>
          </div>
          <div className="d-flex w-100 h-20 bg-light">
            <h5 className="text-dark p-3">address,near by vishwabrahmana </h5>
          </div>
          <div className="d-flex w-100 h-20 justify-content-between mt-3">
            <div className="d-flex smallBoxes h-20 bg-light p-3">india</div>
            <div className="d-flex smallBoxes h-20 bg-light p-3">
              Karimnagar
            </div>
          </div>
          <div className="d-flex w-100 h-20 justify-content-between mt-3">
            <div className="d-flex smallBoxes h-20 bg-light p-3">telangana</div>
            <div className="d-flex smallBoxes h-20 bg-light p-3">505415</div>
          </div>
          <div className="d-flex w-100 h-20 bg-light mt-3">
            <h5 className="text-dark p-3">Resume/Other documents</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
