import { useEffect, useState } from "react";
import trailerNotFound from "../assets/notfound.png";

export default function Modal({ closeModal, type, id }) {
	const [trailerUrl, setTrailerUrl] = useState("");
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);
	const apiKey = import.meta.env.VITE_TMDB_API_KEY;

	useEffect(() => {
		async function fetchTrailer() {
			setLoading(true);
			setNotFound(false);

			try {
				const res = await fetch(
					`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=pt-BR`
				);
				const data = await res.json();
				const trailer = data.results.find(
					(video) => video.type === "Trailer" && video.site === "YouTube"
				);

				if (trailer) {
					setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
				} else {
					setNotFound(true);
				}
			} catch (error) {
				console.error("Erro ao buscar trailer:", error);
				setNotFound(true);
			} finally {
				setLoading(false);
			}
		}
		fetchTrailer();
	}, [id, type]);

	return (
		<div className="fixed inset-0 z-50 flex flex-col bg-black/70 items-center justify-center">
			<div className="w-[90%] md:w-[60%] bg-bgDark p-4 rounded-2xl relative">
				<button
					onClick={closeModal}
					className="absolute top-2 right-3 text-white text-xl cursor-pointer"
				>
					✕
				</button>

				{loading && (
					<div className="flex justify-center items-center h-[400px]">
						<div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
					</div>
				)}

				{!loading && trailerUrl && (
					<iframe
						width="100%"
						height="400"
						src={trailerUrl.replace("watch?v=", "embed/")}
						title="Trailer"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				)}

				{!loading && notFound && (
					<div className="flex justify-center">
						<img
							src={trailerNotFound}
							alt="Trailer não encontrado"
							className="w-[90%] md:w-[60%] rounded-2xl"
						/>
					</div>
				)}
			</div>
		</div>
	);
}
