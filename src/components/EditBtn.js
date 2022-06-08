import React from "react";
import "./styles.css";
import { FaPen } from "react-icons/fa";
const EditBtn = ({ name }) => {
  return (
    <>
      <div className="EditBtn">
        <FaPen className="fapen" /> {name}
      </div>
    </>
  );
};

export default EditBtn;
