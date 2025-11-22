import { useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Poster({ type, category }) {
  const [banner, setBanner] = useState(null);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    async function fetchPages(pagesToFetch = 3) {
      let all = [];

      const first = await fetch(
        `https://api.themoviedb.org/3/${type}/${category}?api_key=${apiKey}&page=1`
      );
      const firstJson = await first.json();
      all = firstJson.results || [];

      for (let p = 2; p <= pagesToFetch; p++) {
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${category}?api_key=${apiKey}&page=${p}`
        );
        const json = await res.json();
        all = all.concat(json.results || []);
      }

      const withBackdrop = all.filter((item) => item.backdrop_path);

      const randomItem =
        withBackdrop[Math.floor(Math.random() * withBackdrop.length)];

      setBanner(randomItem);
    }

    fetchPages();
  }, [apiKey, type, category]);

  return (
    <>
      {banner ? (
        <div className="relative w-full h-[50vh] sm:h-[80vh] md:h-[90vh] lg:h-[90vh] md:pt-4">
          <img
            src={`https://image.tmdb.org/t/p/w1280${banner.backdrop_path}`}
            alt={banner.title || banner.name}
            className="w-full h-full object-fill object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bgDark"></div>

          <div className="absolute bottom-12 left-8 z-10 text-white max-w-lg">
            <h1 className="text-2xl md:text-5xl font-bold">
              {banner.title || banner.name}
            </h1>

            <p className="hidden md:block mt-4 text-lg">{banner.overview}</p>

            <Link
              to={`/details/${type}/${banner.id}`}
              className="bg-[#4b4b4b69] px-4 py-4 md:px-8 md:py-4 md:w-80 mt-4 flex items-center gap-3 text-2xl rounded-[.25rem] cursor-pointer"
            >
              <InformationCircleIcon className="w-6 h-6" />
              More information
            </Link>
          </div>
        </div>
      ) : (
        <p>Carregando banner...</p>
      )}
    </>
  );
}
