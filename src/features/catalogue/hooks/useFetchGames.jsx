// hooks/useFetchGames.js
import { useState, useEffect } from "react";
import { fetchGames } from "../services/gamesApi";

export default function useFetchGames(searchQuery, selectFilterInput) {
  const [page, setPage] = useState(1);
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setGameList([]);
    setPage(1);
  }, [searchQuery, selectFilterInput]);

  useEffect(() => {
    let isCancelled = false;

    async function fetchGameList() {
      setLoading(true);
      try {
        const results = await fetchGames(page, searchQuery, selectFilterInput);
        if (!isCancelled) {
          setGameList((prev) => [...prev, ...results]);
        }
      } catch (error) {
        console.error("Hubo un error en la petición: " + error);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    fetchGameList();
    return () => {
      isCancelled = true;
    };
  }, [page, searchQuery, selectFilterInput]);

  return { setPage, gameList, loading };
}
