import React, { useState, useEffect } from "react";
import bannerImg from "../../img/bannerImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faY, faF } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 "
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto  ">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <span className="text-sky-500  lg:text-5xl  ">
                        <FontAwesomeIcon icon={faBullseye} />
                        <FontAwesomeIcon icon={faY} />
                        <FontAwesomeIcon icon={faF} />
                      </span>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      {!showMenu && (
                        <button
                          onClick={() => setShowMenu(!showMenu)}
                          type="button"
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Open main menu</span>
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        </button>
                      )}{" "}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 text-xl ">
                  <a
                    href="#services-section"
                    className="font-semibold text-sky-900 hover:text-sky-500"
                  >
                    Services
                  </a>

                  <a
                    href="#products-section"
                    className="font-semibold text-sky-900 hover:text-sky-500"
                  >
                    Products
                  </a>

                  <a
                    href="#aboutus-section"
                    className="font-semibold text-sky-900 hover:text-sky-500"
                  >
                    About us
                  </a>
                  <a
                    href="#contactus-section"
                    className="font-semibold text-sky-500 hover:text-sky-900"
                  >
                    Contact us
                  </a>
                </div>
              </nav>
            </div>

            {showMenu && (
              <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-1 flex items-center justify-between">
                    <div>
                      <span className="text-sky-500 text-xl ">
                        <FontAwesomeIcon icon={faBullseye} />
                        <FontAwesomeIcon icon={faY} />
                        <FontAwesomeIcon icon={faF} />
                      </span>
                    </div>
                    <div className="-mr-2">
                      <button
                        onClick={() => setShowMenu(!showMenu)}
                        type="button"
                        className="bg-white rounded-md p-4 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                      >
                        <span className="sr-only">Close main menu</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <a
                      href="#services-section"
                      className="block px-3 py-2 rounded-md text-base font-semibold text-sky-900 hover:text-sky-500 hover:bg-sky-50 "
                    >
                      Services
                    </a>

                    <a
                      href="#products-section"
                      className="block px-3 py-2 rounded-md text-base font-semibold text-sky-900 hover:text-sky-500 hover:bg-sky-50"
                    >
                      Products
                    </a>

                    <a
                      href="#aboutus-section"
                      className="block px-3 py-2 rounded-md text-base font-semibold text-sky-900 hover:text-sky-500 hover:bg-sky-50"
                    >
                      Company
                    </a>

                    <a
                      href="#contactus-section"
                      className="block px-3 py-2 rounded-md text-base font-semibold text-sky-900 hover:text-sky-500 hover:bg-sky-50"
                    >
                      ContactUs
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="tracking-tight font-extrabold text-sky-900 text-3xl md:text-6xl">
                <span className="block xl:inline">Variedades OYF </span>
                <span className="text-sky-500 xl:inline ">
                  Cibercafé y Papeleria
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0 text-justify">
                Nuestra empresa es un local publico que ofrece servicios de
                acceso a internet, llamadas, recargas de minutos, papeleria,
                consignaciones y retiros.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0 sm:ml-3 ">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg font-semibold rounded-md text-sky-700 bg-sky-100  shadow-lg shadow-sky-400/50 hover:bg-sky-200  md:py-4 md:text-xl md:px-10 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
                  >
                    {" "}
                    Chat with Us!{" "}
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
        <img
          className=" h-56 w-full object-cover sm:h-2 md:h-96 lg:w-full lg:h-full  "
          src={bannerImg}
          alt="bannerImg"
        />
      </div>
    </div>
  );
}

export default Header;
