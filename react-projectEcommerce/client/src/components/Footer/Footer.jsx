import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Juegosw from "../../img/juegosw.png";
import FooterBtn from "./FooterBtn";

let companyType = [
  { image: Juegosw, href: "https://apuestas.wplay.co/es" },
  { image: "", href: "" },
  { image: "", href: "" },
  { image: "", href: "" },
  { image: "", href: "" },
];

function Footer() {
  return (
    <div className="w-auto bg-sky-900 h-24 flex items-center justify-center lg:flex-col">
      <div className="flex flex-row">
        {companyType.map((element) => (
          <FooterBtn image={element.image} href={element.href} />
        ))}
      </div>
      <div>
        <span className="text-white  text-sm lg:text-2xl text-center">
          <FontAwesomeIcon icon={faCopyright} className="mr-1" />
          Copyright 2022 <b>Variedades OYF.</b> All rights reserved. |
          Handcrafted by Katherin Ochoa
        </span>
      </div>
    </div>
  );
}

export default Footer;
