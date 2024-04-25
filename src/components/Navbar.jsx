import React, { useState } from "react";
import "../scss/Navbar.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import EditIcon from "../assets/edit.svg";
import CourierIcon from "../assets/courier.svg";
import ShareIcon from "../assets/share.svg";
import RemoveIcon from "../assets/remove.svg";

const Navbar = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navicon">
          <FaAngleLeft />
        </div>
        <p className="bitcoin-wallet-text">Bitcoin Wallet</p>
        <div onClick={() => setPopup(!popup)} className="navicon">
          <BsThreeDotsVertical />
        </div>
      </nav>
      {/* model */}
      {popup && (
        <div className="popupouter">
          <div className="popup">
            <div className="divflex">
              <p>Edit</p>
              <img src={EditIcon} />
            </div>
            <hr />
            <div className="divflex">
              <p>Courier info</p>
              <img src={CourierIcon} />
            </div>
            <hr />
            <div className="divflex">
              <p>Share</p>
              <img src={ShareIcon} />
            </div>
            <hr />
            <div className="remove divflex">
              <p>Remove</p>
              <img src={RemoveIcon} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
