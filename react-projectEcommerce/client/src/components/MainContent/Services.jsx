import React from "react";
import recargasImg from "../../img/recargasImg.png";
import internetImg from "../../img/internetImg.png";

function Services() {
  return (
    <div className="bg-white border-2">
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
          <span className="block xl:inline text-sky-900">Services </span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={recargasImg}
                alt="Recargas"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4  ">
              <div className="">
                <h3 className="text-sm text-sky-900 font-bold ">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    RECARGA DE MINUTOS
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Claro | Movistar | Tigo | Uff | Virgin
                </p>
              </div>
            </div>
          </div>

          <div className="group relative ">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src="https://ci4.googleusercontent.com/proxy/wqPQX9ofe0fQIvFXW8xeIJHJqReuJbf0MnlLL4Z2EChyRcTmnS3uMgjpIuUCOPu4z34_ThaMYd8M2PhgW8pOFfjTFKMw_96j0gGlTavop1HD59EmxbR1ZDROeCUK=s0-d-e1-ft"
                alt="Internet"
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
                    INTERNET
                  </a>
                </h3>
              </div>
            </div>
          </div>

          <div className="group relative ">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFJeCrIsUqOdGzPo809aJb_xKBo7wXMpSfCbbv4y18ViRd7kmeKHXpgQ6Z3kKWez-0gY&usqp=CAU"
                alt="Llamadas"
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
                    LLAMADAS NACIONALES Y INTERNACIONALES
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Claro | Movistar | Tigo | Uff | Virgin
                </p>
              </div>
            </div>
          </div>

          <div className="group relative ">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYaOuK_yWI7m2qD24I_Xpgr8yIA28k3SRMK57B0fbJwK2rgvGImDxRKuKm1iiRFlFPMWc&usqp=CAU"
                alt="Consignaciones"
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
                    CONSIGNACIONES BANCARIAS
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Neki | Daviplata</p>
              </div>
            </div>
          </div>

          <div className="group relative ">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2YHcZEp8JwgfX7Fbr9Wte7Pd-TrvWykuqntXACnnEI7QI0rWFJYbQD_BksgB5d09g9Y&usqp=CAU"
                alt="Retiros"
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
                    RETIRO DE DINERO EN EFECTIVO
                  </a>
                </h3>
              </div>
            </div>
          </div>

          <div className="group relative ">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLObZPduwoTHfLICi4sgQWVtAmaKa6iyLquaO-7Ov3neglf3-JWGi4-UobcCVxhkSrmM0&usqp=CAU"
                alt="Pagos de servicios"
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
                    PAGOS DE SERVICIOS
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Luz | Agua | Gas | Phone | Tv
                </p>
              </div>
            </div>
          </div>

          <div className="group relative ">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src="https://www.1250amcapitalradio.com/wp-content/uploads/2019/01/Wplay-Logo.jpg"
                alt="Apuestas W"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 ">
              <div>
                <h3 className="text-sm text-sky-900 font-bold">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    JUEGOS DE APUETAS W PLAY
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

export default Services;
