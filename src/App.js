import React, { useState } from "react";
import "./scss/App.scss";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import BuyAndSell from "./components/BuyAndSell";
import Graphchart from "./components/Graphchart";

const dataType = [
  { daytype: "Day" },
  { daytype: "Week" },
  { daytype: "Month" },
  { daytype: "Year" },
];

function App() {
  const [tab, setTab] = useState("Day");
  const [toggle, setToggle] = useState(false);

  const data = [
    { name: "Jan", value: 4.895 },
    { name: "Feb", value: 5.689 },
    { name: "March", value: 5.895 },
    { name: "April", value: 5.815 },
    { name: "May", value: 5.5 },
    { name: "June", value: 5.5 },
    { name: "July", value: 5.5 },
    { name: "August", value: 5.857 },
    { name: "September", value: 6.4 },
    { name: "October", value: 6.557 },
    { name: "November", value: 6.557 },
    { name: "December", value: 6.857 },
  ];

  return (
    <div className="App">
      {/* <div className="sidebar">
        <img src="" />
        <p>H</p>
        <p>H</p>
      </div> */}
      {/* main */}
      <div className="main-container">
        <div className="container-first">
          <div className="flexdiv">
            <div className="flex">
              <div className="bitcoin-logo ">
                <svg
                  stroke="white"
                  fill="white"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="logo"
                  height="50"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 13v4H6v2h3v2h2v-2h2v2h2v-2.051c1.968-.249 3.5-1.915 3.5-3.949 0-1.32-.65-2.484-1.64-3.213A3.982 3.982 0 0 0 18 9c0-1.858-1.279-3.411-3-3.858V3h-2v2h-2V3H9v2H6v2h2v6zm6.5 4H10v-4h4.5c1.103 0 2 .897 2 2s-.897 2-2 2zM10 7h4c1.103 0 2 .897 2 2s-.897 2-2 2h-4V7z"></path>
                </svg>
              </div>
              <p className="bitcoin-para">Bitcoin</p>
            </div>
            <p className="btc-para">BTC</p>
          </div>
          <h5 className="secondpara">3.529020 BTC</h5>
          <div className="flexdivsec">
            <p className="thirdpara">$19.153 USD</p>
            <p className="percentvalue">- 2.32%</p>
          </div>
          <div onClick={() => setToggle(!toggle)} className="downarrow">
            {toggle ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
          </div>
          {toggle && (
            <div className="buySellButtondiv">
              <button className="buybutton">Buy</button>
              <button className="sellbutton">Sell</button>
            </div>
          )}
        </div>
        {/* tabs */}
        <div className="tabs-container">
          {dataType.map((item, id) => (
            <p
              key={id}
              onClick={() => setTab(item.daytype)}
              className={`${tab === item.daytype ? "tab-active" : "tab"}`}
            >
              {item.daytype}
            </p>
          ))}
        </div>
        {/* secondcotainer */}
        <div className="container-sec">
          <div className="low-high-flex">
            <div className="flexlowandhigh">
              <span className="spot-pink"></span>
              <p>Lower: $4.895</p>
            </div>
            <div className="flexlowandhigh">
              <span className="spot-green"></span>
              {tab == "Day" && <p>Higher: $6.857</p>}
              {tab == "Week" && <p>Higher: $11.857</p>}
              {tab == "Month" && <p>Higher: $14.857</p>}
              {tab == "Year" && <p>Higher: $22.857</p>}
            </div>
          </div>
          <Graphchart data={data} />
          <div className="flexbtc">
            <span className="spot-orange"></span>
            {tab == "Day" && <p>1 BTC= $5.487</p>}
            {tab == "Week" && <p>1 BTC= $10.487</p>}
            {tab == "Month" && <p>1 BTC= $12.487</p>}
            {tab == "Year" && <p>1 BTC= $20.487</p>}
          </div>
        </div>
        {/* buy and sell */}
        <div className="flex buyAndSell-container">
          <BuyAndSell iconproperty="dollar-container" title="Buy BTC" />
          <BuyAndSell iconproperty="dollar-containersec" title="Sell BTC" />
        </div>
      </div>
    </div>
  );
}

export default App;
