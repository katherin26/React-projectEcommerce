import React from "react";

function ContactCard({ image, type, detail }) {
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-sky-50  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none p-2 shadow-lg shadow-sky-200/50">
        <img
          src={image}
          alt="image"
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4  ">
        <div className="">
          <h3 className="text-sm text-sky-900 font-bold uppercase  ">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {type}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{detail}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
