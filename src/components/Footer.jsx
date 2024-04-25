import React from "react";
import "../scss/Footer.scss";
import { PiWalletFill } from "react-icons/pi";
import { FaCompass } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="">
      <FaWallet />
      <FaCompass />
      <FaBell />
      <FaGear />
    </footer>
  );
};

export default Footer;
