import React from "react";
import EditBtn from "./EditBtn";
const Profile = () => {
  const name = "Edit";
  return (
    <>
      <div className="container-fluid w-100">
        <h1 className="text-center mt-3">Student Profile</h1>
        <div className="text-center position-relative">
          <img id="profile" src="./profile.jpg" />
          <div className="position-absolute EditButtonProfile">
            <EditBtn name={name} />
          </div>
        </div>
        <h1 className="text-center mt-1">Chan Chanakya</h1>
        <h5 className="text-center ">full Stack developer (Mern)</h5>
      </div>
    </>
  );
};

export default Profile;
