import React from "react";

function FooterBtn({ image, href }) {
  return (
    <div className=" ">
      <a
        href={href}
        className="w-full flex items-center justify-center  border border-transparent  rounded-md text-sky-700 bg-sky-100  shadow-lg shadow-sky-400/50 hover:bg-sky-200  md:py-2  md:px-5 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
      >
        <img src={image} alt="image" className=" w-10 h-8 " />
      </a>
    </div>
  );
}

export default FooterBtn;
