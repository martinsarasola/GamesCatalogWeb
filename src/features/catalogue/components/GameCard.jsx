import { memo } from "react";

const GameCard = memo(function GameCard({
  gameUrl,
  gameName,
  gameCategories,
  gameMetacritic,
}) {
  return (
    <div className="h-full w-full bg-[#313137]  rounded-lg shadow-lg shadow-[#31313784]">
      <div className="flex flex-col items-center h-full rounded-lg">
        <img
          loading="lazy"
          src={
            gameUrl ||
            "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
          }
          alt={gameName.name}
          className="rounded-tl-lg rounded-tr-lg max-h-50 w-full object-cover"
        />
        <div className="flex flex-col h-full w-full justify-between items-start p-3 gap-2">
          <h6 className="text-2xl break-all font-bold text-white">
            {gameName}
          </h6>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 flex-wrap">
              {gameCategories.map((categorie, index) => (
                <p
                  key={index}
                  className="text-sm px-2 bg-[#ffffff] rounded-lg  break-all"
                >
                  {categorie}
                </p>
              ))}
            </div>
            {gameMetacritic && (
              <div className="w-26 text-sm px-2 bg-[#e52b09] rounded-lg  break-all">
                <p>Metascore: {gameMetacritic}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default GameCard;
