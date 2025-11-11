import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const GENRES = {
  ação: 28,
  acao: 28,
  action: 28,
  comédia: 35,
  comedia: 35,
  comedy: 35,
  drama: 18,
  terror: 27,
  horror: 27,
  romance: 10749,
};

export default function SearchPage() {
  const { query } = useContext(SearchContext);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const loaderRef = useRef(null); // ✅ para o IntersectionObserver

  // Reset quando o usuário digitar algo novo
  useEffect(() => {
    setResults([]);
    setPage(1);
  }, [query]);

  // ✅ Função para buscar dados (página 1, 2, 3…)
  async function fetchData(currentPage) {
    const clean = query.trim().toLowerCase();
    if (!clean) return;

    setLoading(true);

    let fetchedResults = [];

    if (GENRES[clean]) {
      const genreId = GENRES[clean];

      const [movies, series] = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${currentPage}&api_key=${apiKey}`
        ).then((r) => r.json()),

        fetch(
          `https://api.themoviedb.org/3/discover/tv?with_genres=${genreId}&page=${currentPage}&api_key=${apiKey}`
        ).then((r) => r.json()),
      ]);

      fetchedResults = [...(movies.results || []), ...(series.results || [])];
    } else {
      const [movies, series] = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${clean}&page=${currentPage}&api_key=${apiKey}`
        ).then((r) => r.json()),

        fetch(
          `https://api.themoviedb.org/3/search/tv?query=${clean}&page=${currentPage}&api_key=${apiKey}`
        ).then((r) => r.json()),
      ]);

      fetchedResults = [...(movies.results || []), ...(series.results || [])];
    }

    setResults((prev) => [...prev, ...fetchedResults]);
    setLoading(false);
  }

  // Busca a cada mudança de página
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // ✅ IntersectionObserver — carregamento automático ao final
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loading]);

  return (
    <div className="pt-25 flex flex-col">
      <h2 className="font-medium text-2xl pb-10 ml-8">
        Resultados para: {query}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mx-10 md:mx-20">
        {results.map((item) => {
          const mediaType =
            item.media_type || (item.first_air_date ? "tv" : "movie");

          return (
            <Link
              key={item.id + mediaType}
              to={`/details/${mediaType}/${item.id}`}
              className="h-full"
            >
              <Card item={item} />
            </Link>
          );
        })}
      </div>

      {/* ✅ Loader invisível que dispara o infinite scroll */}
      <div ref={loaderRef} className="h-10 flex justify-center items-center my-10">
        {loading && <span className="text-gray-400">Carregando...</span>}
      </div>
    </div>
  );
}
