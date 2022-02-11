import React from "react";

function Products() {
  return (
    <div className="bg-zinc-50 ">
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
          <span className="block xl:inline text-sky-900">Products </span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          <div className="group relative ">
            <div className="w-full min-h-80 bg-sky-50 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none p-2 shadow-lg shadow-sky-200/50">
              <img
                src="https://aprendaespanhol.files.wordpress.com/2018/02/c3batiles-escolares.png?w=714"
                alt="PapeleriaImg"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 ">
              <div>
                <h3 className="text-sm text-sky-900 font-bold ">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    PAPELERIA
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Utiles Escolares | Libros
                </p>
              </div>
            </div>
          </div>

          <div className="group relative ">
            <div className="w-full min-h-80 bg-sky-50 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none p-2 shadow-lg shadow-sky-200/50">
              <img
                src="https://images.vexels.com/media/users/3/128313/isolated/preview/01fb3e375286d98cbc46c50e917db249-icono-plano-de-cuaderno.png"
                alt="ArgolladoImg"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 ">
              <div>
                <h3 className="text-sm text-sky-900 font-bold ">
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
            <div className="w-full min-h-80 bg-sky-50 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none p-2 shadow-lg shadow-sky-200/50">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1453/1453620.png"
                alt="LaminacionImg"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 ">
              <div>
                <h3 className="text-sm text-sky-900 font-bold ">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    LAMINACION DE CARNETS
                  </a>
                </h3>
              </div>
            </div>
          </div>

          <div className="group relative ">
            <div className="w-full min-h-80 bg-sky-50  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none p-2 shadow-lg shadow-sky-200/50">
              <img
                src="https://images.vexels.com/media/users/3/143409/isolated/preview/660b9f099fff3269ede645377bc511bf-caricatura-de-helado.png"
                alt="IceCreamImg"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 ">
              <div>
                <h3 className="text-sm text-sky-900 font-bold ">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    CREAM HELADO
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
