import React from "react";
import logoImg from "../assets/white.png";
import callImg from "../assets/phone-solid.svg";
import mailImg from "../assets/envelope-solid.svg";

function NavBar() {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="bg-orange-500"
      >
        <p className="text-black bg-orange-500 text-l px-4 text-left">
          GharBhada is totally genuine platform
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={callImg} className="w-5 pr-1" />
          <p className="bg-orange-500 pr-4">9841112943</p>

          <div style={{ display:'flex'}}>
          <img src={mailImg} className="w-5 pr-1" />
          <p className="pr-4">gharbhada@gmail.com</p>
        </div>

        </div>
        
      </div>
      <nav className=" bg-black" style={{ borderBottom: "1px solid #000" }}>
        <img src={logoImg} alt="Logo of Ghar Bhada" className="w-32" />
      </nav>
    </div>
  );
}

export default NavBar;
