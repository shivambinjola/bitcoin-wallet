import React from "react";
import { FaDollarSign } from "react-icons/fa6";

const BuyAndSell = ({ iconproperty, title }) => {
  return (
    <div className="buyandsellcontainer">
      <p className={iconproperty}>
        <FaDollarSign />
      </p>
      <p className="para">{title}</p>
    </div>
  );
};

export default BuyAndSell;
