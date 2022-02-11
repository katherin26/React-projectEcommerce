import React from "react";
import ContactCard from "./ContactCard";
import Phone from "../../img/phone.png";
import Chat from "../../img/chat.png";
import Email from "../../img/email.png";

let contactTypes = [
  {
    type: "Phone number",
    image: Phone,
    detail: "2698547",
  },
  { type: "Chat", image: Chat, detail: "Contactanos por Chat" },
  { type: "Email", image: Email, detail: "pruebanumero1@gmail.com" },
];

function ContacUs() {
  return (
    <div className="bg-zinc-50 ">
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
          <span className="block xl:inline text-sky-900">Contac Us </span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8  ">
          {contactTypes.map((element, i) => (
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

export default ContacUs;
