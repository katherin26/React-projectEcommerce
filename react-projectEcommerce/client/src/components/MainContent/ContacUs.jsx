import React from "react";
import ContactCard from "./ContactCard";
import Phone from "../../img/phone.png";
import Chat from "../../img/chat.png";
import Email from "../../img/email.png";

let contactTypes = [
  {
    type: "Número de Teléfono",
    image: Phone,
    detail: "300 207 0241 - 313 870 4224",
    href: "tel:300 207 0241",
  },
  {
    type: "Nuestro Chat !",
    image: Chat,
    detail: "Contáctanos por Chat",
    href: "",
  },
  {
    type: "Envíanos un Email",
    image: Email,
    detail: "Haga Click en la carta para enviar un Email",
    href: "mailto:ft.katheochoa@gmail.com",
  },
];

function ContacUs() {
  return (
    <div className="bg-zinc-50 " id="contactus-section">
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl text-center">
          <span className="block xl:inline text-sky-900 ">Contáctanos</span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8  ">
          {contactTypes.map((element, i) => (
            <ContactCard
              type={element.type}
              image={element.image}
              detail={element.detail}
              href={element.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContacUs;
