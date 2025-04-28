import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center px-4 h-13 w-full bg-[#e52b09] shadow-lg">
        <h1 className="text-2xl text-white font-bold">Contacto</h1>
      </header>

      <main className="flex-1 sm:p-8 max-h-[calc(100vh-52px)] overflow-y-auto">
        <div className="h-fit w-full sm:rounded-lg bg-[#222226] p-4 sm:border-2 border-[#373131] shadow-lg shadow-[#313137]">
          <div className="w-full flex flex-col lg:flex-row rounded-lg overflow-auto lg:overflow-hidden gap-4 sm:gap-0">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
