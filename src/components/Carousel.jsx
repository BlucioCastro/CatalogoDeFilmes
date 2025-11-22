import { useEffect, useState } from "react";
import Card from "./Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/custom-swiper-bullet.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function Carousel({ title, url, pageNumber, pages }) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const apiKey = import.meta.env.VITE_TMDB_API_KEY;

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				let all = [];

				if (pageNumber) {
					const response = await fetch(
						`https://api.themoviedb.org/3${url}?api_key=${apiKey}&page=${pageNumber}`
					);
					if (!response.ok) {
						throw new Error(`HTTP Error! status: ${response.status}`);
					}
					const result = await response.json();
					all = all.concat(result.results || []);
				} else {
					const totalPages = pages || 3;

					for (let p = 1; p <= totalPages; p++) {
						const response = await fetch(
							`https://api.themoviedb.org/3${url}?api_key=${apiKey}&page=${p}`
						);
						const result = await response.json();
						all = all.concat(result.results || []);
					}
				}

				const unique = all.filter(
					(item, index, self) =>
						index === self.findIndex((t) => t.id === item.id)
				);

				setData(unique);
				setLoading(false);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url, apiKey, pages, pageNumber]);
	if (!data) return <Loading />;
	if (loading) return <Loading />;
	if (error) return <div>Error: {error}</div>;

	const mediaType = url.includes("/tv") ? "tv" : "movie";
	return (
		<>
			<div className="mx-12 mb-8">
				<div>
					<h1 className="text-2xl font-medium pb-4">{title}</h1>
				</div>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={12}
					slidesPerView={1}
					slidesPerGroup={6}
					loop={false}
					navigation
					className="w-full"
					watchOverflow={true} 
					breakpoints={{
						375: { slidesPerView: 2, slidesPerGroup: 2 },
						640: { slidesPerView: 3, slidesPerGroup: 3 },
						768: { slidesPerView: 4, slidesPerGroup: 4 },
						1024: { slidesPerView: 6, slidesPerGroup: 6 },
					}}
				>
					<div className="mx-8">
						{data.map((item) => (
							<SwiperSlide key={item.id} className="">
								<Link to={`/details/${mediaType}/${item.id}`}>
									<Card item={item} />
								</Link>
							</SwiperSlide>
						))}
					</div>
				</Swiper>
			</div>
		</>
	);
}
