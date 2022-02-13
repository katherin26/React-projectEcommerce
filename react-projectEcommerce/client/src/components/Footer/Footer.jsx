import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import FooterBtn from "./FooterBtn";
import Juegosw from "../../img/wplay2.png";
import Davivienda from "../../img/davivienda.png";
import Megared from "../../img/megared.png";
import Nequi from "../../img/nequi2.png";
import Puntored from "../../img/puntored.png";

let companyType = [
  { image: Juegosw, href: "https://apuestas.wplay.co/es" },
  {
    image: Davivienda,
    href: "https://www.davivienda.com/wps/portal/personas/nuevo",
  },
  { image: Megared, href: "https://www.megared.co/" },
  { image: Nequi, href: "https://www.nequi.com.co/" },
  { image: Puntored, href: "https://puntored.co/" },
];

function Footer() {
  return (
    <div className="w-auto bg-sky-900 h-28 flex items-center justify-center flex-col text-center">
      <div className="flex flex-row">
        {companyType.map((element) => (
          <FooterBtn image={element.image} href={element.href} />
        ))}
      </div>
      <div className="mt-5">
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
