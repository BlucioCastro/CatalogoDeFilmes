import { useState } from "react";
import Poster from "../components/Poster";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import HambNav from "../components/HambNav";
import Carousel from "../components/Carousel";

export default function Movies() {
	const [category, setCategory] = useState("top_rated");
	const [isOpen, setIsOpen] = useState(false);
	const listOfCategories = [
		{ to: "/movie/top_rated", label: "Top Rated" },
		{ to: "/movie/upcoming", label: "Upcoming" },
		{ to: "/movie/now_playing", label: "Now Playing" },
		{ to: "/movie/popular", label: "Popular" },
	];
	let currentCategory = listOfCategories.find(
		(item) => item.to === `/movie/${category}`
	);
		
	return (
		<>
			<Poster type="movie" category={category} />
			<div className=" ml-12 mb-4 flex gap-2">
				<div className="border-2 px-4">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="font-medium cursor-pointer flex items-center gap-2"
					>
						
						{currentCategory?.label || category}
						<ChevronDownIcon
							className={`w-4 h-4 transition-transform ${
								isOpen ? "rotate-180" : ""
							}`}
						/>
					</button>
					{isOpen && (
						<HambNav
							links={listOfCategories}
							onSelect={(path) => {
								setCategory(path.split("/").pop());
								setIsOpen(false);
							}}
						/>
					)}
				</div>
			</div>
			<Carousel url={`/movie/${category}`} pageNumber={1} />
			<Carousel url={`/movie/${category}`} pageNumber={2} />
			<Carousel url={`/movie/${category}`} pageNumber={3} />
			<Carousel url={`/movie/${category}`} pageNumber={4} />
			<Carousel url={`/movie/${category}`} pageNumber={5} />
			<Carousel url={`/movie/${category}`} pageNumber={6} />
			<Carousel url={`/movie/${category}`} pageNumber={7} />
			<Carousel url={`/movie/${category}`} pageNumber={8} />
			<Carousel url={`/movie/${category}`} pageNumber={9} />
			<Carousel url={`/movie/${category}`} pageNumber={10} />
		</>
	);
}
