import { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const VITE_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const VITE_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const VITE_EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        formData,
        VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("¡Tu mensaje fue enviado!");
        setFormData({ name: "", email: "", question: "" });
      })
      .catch((error) => {
        console.error("Error al enviar el correo: ", error);
        alert("Hubo un error. Intenta nuevamente.");
      });
  };

  return (
    <div className="h-full w-full flex flex-col lg:flex-row rounded-lg">
      <div className="h-full w-full py-6 sm:py-12.5 px-8 xl:px-24 bg-[#313137]">
        <div className="flex flex-col h-full w-full gap-4 justify-center items-center">
          <h1 className="text-2xl sm:text-4xl text-center sm:text-start font-bold text-white underline decoration-[#e52b09] decoration-[0.10rem] underline-offset-8">
            Formulario de Contacto
          </h1>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="flex flex-col h-full w-full justify-center items-start gap-4"
          >
            <div className="w-full">
              <label htmlFor="name" className="text-white">
                Nombre
              </label>
              <input
                placeholder="Ingrese su nombre"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
                className="w-full text-white border-2 border-[#e52b09] rounded-lg p-4"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                placeholder="Ingrese su email"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
                className="w-full text-white border-2 border-[#e52b09] rounded-lg p-4"
              />
            </div>
            <div className="w-full">
              <label htmlFor="question" className="text-white">
                Pregunta
              </label>
              <textarea
                placeholder="Ingrese su pregunta, u opinión"
                type="text"
                name="question"
                id="question"
                value={formData.question}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
                className="w-full text-white border-2 border-[#e52b09] rounded-lg p-4 "
              />
            </div>
            <button
              type="submit"
              className="w-1/2 text-white border-1 border-[#e52b09] rounded-lg bg-[#e52b09] p-2 cursor-pointer active:brightness-90"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
