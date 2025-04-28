import { FaSearch } from "react-icons/fa";
import useFetchGames from "../hooks/useFetchGames";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import GameCard from "./GameCard";
import { useState } from "react";

function Catalogue() {
  const [searchInput, setSearchInput] = useState("");
  const [selectFilterInput, setSelectFilterInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { gameList, loading, setPage } = useFetchGames(
    searchQuery,
    selectFilterInput
  );
  const { loaderRef } = useInfiniteScroll(setPage, loading);

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center px-4 h-13 w-full bg-[#e52b09] shadow-lg">
        <h1 className="text-2xl text-white font-bold">Catálogo de Juegos</h1>
      </header>

      <main className="flex-1 p-4 pt-4 max-h-[calc(100vh-52px)] will-change-scroll overflow-y-auto">
        <div
          className={`${
            loading ? "h-full" : "h-fit"
          } w-full rounded-lg bg-[#faf3f4] p-2`}
        >
          <div className="@container flex flex-col  md:flex-row pt-3 px-4 gap-4">
            <form
              className="flex-1 flex"
              onSubmit={(e) => {
                e.preventDefault();
                setSearchQuery(searchInput);
              }}
            >
              <input
                type="text"
                placeholder="Buscar juego"
                name="search-game"
                id="search-game"
                className="h-11 w-full lg:w-[calc(49%-1rem)]  bg-white border-2 border-[#e52b09] rounded-lg p-4 font-medium"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
              <button
                type="submit"
                className="flex justify-center items-center h-11 w-15 lg:min-w-15 lg:w-[calc(10%-2rem)] bg-[#e52b09] rounded-lg ml-6 mr-2 cursor-pointer active:brightness-85"
              >
                <FaSearch />
              </button>
            </form>

            <div className="flex @xs:w-55 items-center justify-center bg-[#313137] p-2 rounded-lg gap-2">
              <label htmlFor="select-filter" className="text-white">
                Filtrar por:
              </label>
              <select
                id="select-filter"
                className="text-white text-center bg-[#313137]"
                value={selectFilterInput}
                onChange={(e) => setSelectFilterInput(e.target.value)}
              >
                <option value="">Sin filtro</option>
                <option value="-metacritic">Rating</option>
                <option value="-released">Lanzamiento</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 p-4">
            {gameList.map((game) => (
              <GameCard
                key={game.id}
                gameUrl={game.background_image}
                gameName={game.name}
                gameCategories={game.genres.map((g) => g.name)}
                gameMetacritic={game.metacritic}
              />
            ))}

            {loading && gameList.length === 0 && (
              <div className="col-span-full flex justify-center py-10">
                <div className="single10"></div>
              </div>
            )}
          </div>

          {loading && gameList.length > 0 && (
            <div className="flex justify-center py-4">
              <div className="single10"></div>
            </div>
          )}

          <div ref={loaderRef} className="h-10" />
        </div>
      </main>
    </div>
  );
}

export default Catalogue;
