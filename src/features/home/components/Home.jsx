import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Home() {
  const [gameList, setGameList] = useState([]);
  const [gameImages, setGameImages] = useState([]);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchGames() {
      try {
        const results = await fetch(
          `https://api.rawg.io/api/games?key=3a1fc43f04c0413184183466eba94eb4&page_size=18`
        );

        if (!results.ok) {
          throw new Error("Hubo un error con la solicitud.");
        }

        const data = await results.json();

        setGameList(() => [...data.results]);
        if (data.results && data.results.length > 0) {
          setGameImages(data.results.map((item) => item.background_image));
        }
      } catch (error) {
        console.error("Hubo un error: ", error);
      }
    }

    fetchGames();
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (gameImages) {
      const img = new Image();
      img.src = gameImages[0];

      img.onload = () => {
        setImageIsLoaded(true);
      };
    }
  }, [gameImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex !== gameImages.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [gameImages, currentIndex]);

  return (
    <div className="h-full w-full">
      <nav className="bg-[#faf3f4] h-20 border-b-2  border-[#e52b09]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-full">
          <div className="relative flex items-center justify-between h-full">
            <div className="hidden items-center space-x-4 sm:flex">
              <Link
                to="/"
                className="relative group text-[#313137] text-lg tracking-wide"
              >
                Inicio
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#e52b09] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/catalogue"
                className="relative group text-[#313137] text-lg tracking-wide"
              >
                Catálogo
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#e52b09] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link className="relative group text-[#313137] text-lg tracking-wide">
                Contacto
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#e52b09] transition-all duration-100 group-hover:w-full"></span>
              </Link>
            </div>

            <div className="flex items-center h-full">
              <h1
                className="m-0 p-0 leading-none text-[#e52b09] text-3xl font-bold transition-all duration-300 ease-in-out 
             hover:brightness-150 hover:scale-105 hover:drop-shadow-[0_0_1px_#e52b09]"
              >
                Mi Logo
              </h1>
            </div>

            <div className="flex justify-end items-center space-x-4">
              <Link className="relative group text-[#313137] text-lg tracking-wide">
                Registrarse
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#e52b09] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link className="relative group text-lg tracking-wide text-[#e52b09]">
                Iniciar sesión
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#e52b09] transition-all duration-300 group-hover:w-full "></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="bg-[#f7ecee] p-4 h-[calc(100vh-124px)] w-full">
        <div className="flex flex-col h-full  items-center justify-center">
          <div
            className={`relative flex flex-col h-full max-h-full sm:max-h-120 w-full max-w-4xl items-center justify-center gap-5 bg-cover bg-center rounded-lg overflow-hidden shadow-[#e52a0988] shadow-lg 
              transform transition-all duration-800 ease-out 
              ${
                hasMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            style={{
              backgroundImage: `url(${
                imageIsLoaded
                  ? gameImages[currentIndex]
                  : "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
              })`,
            }}
          >
            <div className="absolute h-50 w-125 sm:h-50 sm:w-145 md:h-60 md:w-165 bg-black opacity-50 z-0 blur-2xl"></div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white text-center z-1">
              Descubre tu siguiente aventura
            </h1>
            <p className="text-xl sm:text-2xl text-white z-1">
              Explora más de 10000 juegos
            </p>
            <Link
              to="/catalogue"
              className="text-xl font-light bg-[#e52b09] text-white py-2 px-4 rounded-md z-1 transition-all duration-300 ease-in-out 
             hover:brightness-150 hover:scale-105 hover:shadow-[0_0_10px_0px_#e52b09]"
            >
              Catálogo
            </Link>
            <h1
              className={`text-3xl text-center font-bold text-white z-1 transform transition-all duration-300 ease
              ${
                gameList[currentIndex]?.name
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {gameList[currentIndex]?.name || <div className="h-[36px]"></div>}
            </h1>
          </div>
        </div>
      </main>

      <footer>
        <div className="bg-[#e52b09] h-1"></div>
        <div className="h-10 w-full flex flex-row  items-center justify-between px-5 sm:px-10  text-sm  bg-[#313137]">
          <div>
            <p className="text-white">Copyright@example</p>
          </div>
          <div className="flex flex-row gap-4 sm:gap-8">
            <a href="">
              <FaTwitter
                className="text-[#e52b09] h-6 w-6 transition-all duration-300 ease-in-out 
             hover:brightness-150 hover:scale-105 hover:drop-shadow-[0_0_6px_#e52b09]"
              ></FaTwitter>
            </a>
            <a href="">
              <FaInstagram
                className="text-[#e52b09] h-6 w-6  transition-all duration-300 ease-in-out 
             hover:brightness-150 hover:scale-105 hover:drop-shadow-[0_0_6px_#e52b09]"
              ></FaInstagram>
            </a>
            <a href="">
              <FaFacebook
                className="text-[#e52b09] h-6 w-6  transition-all duration-300 ease-in-out 
             hover:brightness-150 hover:scale-105 hover:drop-shadow-[0_0_6px_#e52b09]"
              ></FaFacebook>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
