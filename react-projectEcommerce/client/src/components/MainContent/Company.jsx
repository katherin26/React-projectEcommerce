import React from "react";

function Company() {
  return (
    <div className="border-2">
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
          <span className="block xl:inline">About Us</span>
        </h2>

        <div className="mt-6 flex flex-row border-2 justify-center">
          <div className=" border-2 flex items-center">
            <p className="">
              We build tools for developers that make building healthcare
              products easier than ever before.
            </p>
          </div>
          <div className="border-2">
            {" "}
            <img
              src="https://www.kindpng.com/picc/m/3-39096_index-of-insan-kaynaklar-resim-png-transparent-png.png"
              alt="AboutUs"
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
        </div>

        <div className="mt-6 border-2  justify-center">
          <div className="container border-2 ">
            <h3 className="mt-6">OUR MISION</h3>
            <p className="mt-6 ">
              To empower patients and providers with complete access to health
              data.
            </p>
          </div>
          <div className="mt-10 border-2">
            <h3 className="mt-6">OUR STORY</h3>
            <p className="mt-6 text-justify">
              Founded in 2014, Health Gorilla is a secure interoperability
              solution that enables the entire health care ecosystem – patients,
              payers, providers, digital health solutions, and labs – to
              seamlessly share health data and aggregate each patient’s entire
              clinical history in one place. With enterprise-grade patient
              identity matching, an unparalleled patient index, and
              best-in-class security, the Health Gorilla network makes it easy
              for providers to pull their patient’s information from any other
              clinical records system. Headquartered in Silicon Valley, Health
              Gorilla works with health care organizations around the world,
              helping them gather the clinical data they need to deliver the
              best and most appropriate care for their patients.
            </p>
          </div>

          <div className="mt-10 border-2">
            <h3 className="mt-6">OUR VALUES</h3>
            <p className="mt-6 text-justify">
              Founded in 2014, Health Gorilla is a secure interoperability
              solution that enables the entire health care ecosystem – patients,
              payers, providers, digital health solutions, and labs – to
              seamlessly share health data and aggregate each patient’s entire
              clinical history in one place. With enterprise-grade patient
              identity matching, an unparalleled patient index, and
              best-in-class security, the Health Gorilla network makes it easy
              for providers to pull their patient’s information from any other
              clinical records system. Headquartered in Silicon Valley, Health
              Gorilla works with health care organizations around the world,
              helping them gather the clinical data they need to deliver the
              best and most appropriate care for their patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
