import React from "react";

function Products() {
  return (
    <div className="bg-white border-2">
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
          <span className="block xl:inline">Products </span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src=""
                alt="Papeleria"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4  ">
              <div className="">
                <h3 className="text-sm text-gray-700 ">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    PAPELERIA
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Variedad de Utiles Escolares
                </p>
              </div>
            </div>
          </div>

          <div className="group relative ">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src=""
                alt="Laminacion"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 ">
              <div>
                <h3 className="text-sm text-gray-700 ">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    LAMINACION
                  </a>
                </h3>
              </div>
            </div>
          </div>

          <div className="group relative ">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src=""
                alt="Argollado"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 ">
              <div>
                <h3 className="text-sm text-gray-700 ">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    ARGOLLADO
                  </a>
                </h3>
              </div>
            </div>
          </div>

          <div className="group relative ">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src=""
                alt="Fotocopias"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 ">
              <div>
                <h3 className="text-sm text-gray-700 ">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    FOTOCOPIAS
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
