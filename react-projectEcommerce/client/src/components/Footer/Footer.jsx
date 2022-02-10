import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="w-auto bg-indigo-600 h-24 flex items-center justify-center">
      <span className="text-white">
        <FontAwesomeIcon icon={faCopyright} className="mr-1" />
        Copyright 2022 <b>Variedades o&f.</b> All rights reserved. | Handcrafted
        by Katherin Ochoa
      </span>
    </div>
  );
}

export default Footer;
