import React from "react";
import logoImg from "../assets/white.png";
import callImg from "../assets/phone-solid.svg";
import mailImg from "../assets/envelope-solid.svg";
import Home from "../Navigation/Pages/Home";
import Flats from "../Navigation/Pages/flats";
import Sample from "../Cards/Sample";
import HouseSample from "../assets/house.png";

function NavBar() {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="bg-orange-500 absolute-0"
      >
        <p className="text-black bg-orange-500 text-l px-4 text-left">
          GharBhada is totally genuine platform
        </p>
        <div style={{ display: "flex", justifyContent: "space-between"}}>
          <img src={callImg} className="w-5 pr-1" />
          <p className="bg-orange-500 pr-4">9841112943</p>

          <div style={{ display: "flex" }}>
            <img src={mailImg} className="w-5 pr-1" />
            <p className="pr-4">gharbhada@gmail.com</p>
          </div>
        </div>
      </div>

<div className=" bg-black" style={{display:'flex', justifyContent:'space-between'}}>
      <div style={{ display: "flex"}} className="bg-black">
        <div>
          <nav style={{ borderBottom: "1px solid #000" }}>
            <img src={logoImg} alt="Logo of Ghar Bhada" className="w-32" />
          </nav>
        </div>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="py-3"
        >
          <Home />
          <Flats />
        </div>
      </div>

      <div className="text-white pr-4 py-3 text-right">logIn</div>

      </div>
      
      <div
        style={{ display: "flex", justifyContent: "center"}}
      >
        <img src={HouseSample} style={{width:'1500px',height:'500px'}} />
      </div>
      <div className="py-4">
        <Sample />
        <Sample/>
      </div>
    </div>
  );
}

export default NavBar;
