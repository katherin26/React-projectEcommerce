import React from "react";
import ContactCard from "./ContactCard";
import UtilesEscolares from "../../img/utilesescolares.png";
import Argollado from "../../img/cuadernoargollado.png";
import Laminacion from "../../img/laminacion.png";
import CreamHelado from "../../img/icecream.png";

let productsTypes = [
  {
    type: "Papeleria",
    image: UtilesEscolares,
    detail: "Utiles Escolares | Libros",
  },
  { type: "Argollado", image: Argollado, detail: "" },
  { type: "Laminacion", image: Laminacion, detail: "" },
  { type: "Cream Helado", image: CreamHelado, detail: "" },
];

function Products() {
  return (
    <div className="bg-zinc-50 " id="products-section">
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl text-center">
          <span className="block xl:inline text-sky-900">Products </span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  ">
          {productsTypes.map((element, i) => (
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

export default Products;
