import React from "react";
import ContactCard from "./ContactCard";
import Internet from "../../img/internet.png";
import Phone from "../../img/phone.png";
import Consignacion from "../../img/consignacion.png";
import Retiro from "../../img/retiro.png";
import Recarga from "../../img/recarga.png";
import Pagodeservicios from "../../img/pagodeservicios.png";
import JuegosW from "../../img/juegosw.png";
import Fotocopia from "../../img/fotocopia.png";

let servicesTypes = [
  {
    type: "Internet",
    image: Internet,
    detail: "20 computadoras | WiFi",
  },
  {
    type: "Consignaciones Bancarias",
    image: Consignacion,
    detail: "Banco Davivienda | Nequi",
  },
  {
    type: "Retiro de dinero en efectivo",
    image: Retiro,
    detail: "Banco Davivienda | Nequi",
  },
  {
    type: "Recarga de minutos",
    image: Recarga,
    detail: "Claro | Movistar | Tigo | Uff | Virgin",
  },
  {
    type: "Pago de servicios",
    image: Pagodeservicios,
    detail: "Tv | Luz | Agua | Gas | Telefono | Uniminuto",
  },
  {
    type: "Juegos de apuestas w play",
    image: JuegosW,
    detail: "Futbol | Baloncesto | Tenis | eSports | Otros",
  },
  { type: "Fotocopias", image: Fotocopia, detail: "Individual | Paquetes" },
  {
    type: "Llamadas nacionales y internacionales",
    image: Phone,
    detail: " Claro | Movistar | Tigo | Uff | Virgin",
  },
];

function Services() {
  return (
    <div className="bg-zinc-50 border-2" id="services-section">
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl tracking-tight font-extrabold text-sky-900 sm:text-5xl md:text-5xl">
          <span className="block xl:inline text-sky-900  ">Servicios </span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          {servicesTypes.map((element, i) => (
            <ContactCard
              type={element.type}
              image={element.image}
              detail={element.detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
