import React from "react";

function Company() {
  return (
    <div className="border-2 bg-sky-50" id="aboutus-section">
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl tracking-tight font-extrabold text-sky-900 sm:text-5xl md:text-5xl">
          <span className="block xl:inline">About Us</span>
        </h2>

        <div className="mt-6 flex flex-row  justify-center ">
          <div className="">
            {" "}
            <img
              src="https://eventosti.net/wp-content/uploads/2015/04/IoT.png"
              alt="AboutUs"
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div className="  flex items-center">
            <p className="text-3xl text-sky-900 font-bold">
              Ayudamos a nuestros usuarios a tener mas accesso a servicios y
              productos en un solo lugar.
            </p>
          </div>
        </div>

        <div className="mt-10  justify-center text-left">
          <div className="container  ">
            <h3 className="mt-6 text-sky-900 font-bold text-xl">OUR MISION</h3>
            <p className="mt-6 text-3xl">
              Crear soluciones para nuestros usuarios ofrenciendo nuestros
              productos y servicios.{" "}
            </p>
          </div>
          <div className="mt-10 ">
            <h3 className="mt-6 text-sky-900 font-bold text-xl">OUR STORY</h3>
            <p className="mt-6 text-justify text-3xl">
              Fundada en el año 2006, Variedades{" "}
              <b className="text-sky-900">OYF</b> inicio como Cibercafé
              ofreciendo a sus usuarios accesso a internet, llamadas
              internacionales y recarga de minutos. Un par de años mas tarde fue
              agregando mas servicios como : retiros y consignaciones con el
              banco Davivienda y Nequi, pago de servicios con Megared y
              Puntored, servicios de papeleria como : Laminacion, Fotocopiadora,
              Argollado, Impresiones y venta de utiles escolares.
            </p>
          </div>

          <div className="mt-10 ">
            <h3 className="mt-6 text-sky-900 font-bold text-xl">OUR VALUES</h3>
            <p className="mt-6 text-justify text-3xl">
              Nosotros ofrecemos soluciones para nuestros usuarios quienes
              consumen diariamiente una combinacion de nuestros servicios para
              agilizar su dia a dia o el de sus familiares.
            </p>
            <p className="mt-6 text-justify text-3xl">
              Para un futuro proximo seguiremos añadiendo mas servicios con el
              objetivo de modernizar mas nuestra atencion al cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
