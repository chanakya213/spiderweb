import React from "react";
import EditBtn from "./EditBtn";
const Content = () => {
  const name = "Edit";
  return (
    <>
      <div className="textData mt-4 p-4">
        <div className="d-flex justify-content-end mb-2">
          <EditBtn name={name} />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
          doloremque ex quasi labore optio repudiandae eaque voluptatibus
          adipisci sequi, enim dolorem quo eligendi explicabo error quam quidem
          ducimus. Ipsam perspiciatis, atque pariatur recusandae architecto quia
          a et nobis magni molestias nostrum placeat sit, aperiam exercitationem
          sunt quibusdam odio similique libero molestiae praesentium quisquam
          temporibus! Fugiat in pariatur temporibus rerum tenetur. a et nobis
          magni molestias nostrum placeat sit, aperiam exercitationem sunt
          quibusdam odio similique libero molestiae praesentium quisquam
          temporibus! Fugiat in pariatur temporibus rerum tenetur.
        </p>
      </div>
    </>
  );
};

export default Content;
