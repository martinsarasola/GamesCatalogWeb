import React from "react";

function ContactInfo() {
  return (
    <div className="h-full w-full flex flex-col md:flex-row gap-4">
      <div className="flex h-full w-full items-center sm:py-4 sm:px-8 xl:px-20 bg-[#e52b09]">
        <div className="flex flex-col justify-center items-center h-full w-full bg-[#222226] sm:rounded-lg sm:p-4 gap-2">
          <h1 className="text-2xl sm:text-4xl text-center sm:text-start font-bold text-white underline decoration-[#e52b09] decoration-[0.10rem] underline-offset-8">
            Información de Contacto
          </h1>
          <div className="flex flex-col h-fit w-full bg-[#313137]  sm:m-2 sm:p-6 gap-4 rounded-lg shadow-black shadow-lg">
            <div className="flex justify-center items-center w-full py-6 lg:py-4 px-4 gap-4 bg-[#e52b09] rounded-t-lg">
              <img
                src="assets/images/contactImage.jpeg"
                alt="Profile Picture"
                className="w-25 h-25 rounded-full object-cover"
              />
              <div className="flex flex-col gap-2">
                <p className="text-white text-sm sm:text-md">
                  José Martín Sarasola
                </p>
                <span className="bg-white w-full h-[0.10rem]"></span>
                <p className="text-white text-sm sm:text-md">
                  Front-end Developer
                </p>
              </div>
            </div>
            <div className="h-full flex flex-col justify-evenly gap-4">
              <div className="px-4">
                <p className="text-white">
                  Desarrollador Frontend enfocado en crear interfaces web
                  modernas, accesibles y optimizadas para una excelente
                  experiencia de usuario.
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-b-lg py-4 bg-[#F9F9FA]">
                <p className="text-center">martin.sarasola01@hotmail.com</p>
                <div className="flex justify-evenly">
                  <a
                    href="https://github.com/martinsarasola/"
                    target="_blank"
                    className="underline decoration-[#e52b09] decoration-[0.10rem] underline-offset-6"
                  >
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/josesarasola1/"
                    target="_blank"
                    className="underline decoration-[#e52b09] decoration-[0.10rem] underline-offset-6"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
