export async function fetchGames(
  page = 1,
  searchQuery = "",
  selectFilterInput = ""
) {
  const VITE_RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;
  let url =
    `https://api.rawg.io/api/games?key=${VITE_RAWG_API_KEY}` +
    `&page=${page}&page_size=18`;

  if (searchQuery) {
    url += `&search=${encodeURIComponent(searchQuery)}`;
  }
  if (selectFilterInput) {
    url += `&ordering=${selectFilterInput}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.message || "Hubo un error en la petición.");
  }
  const data = await res.json();
  return data.results;
}
