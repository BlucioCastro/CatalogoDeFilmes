import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Poster from "../components/Poster";

export default function Home() {
	return (
		<div>
			<div>
				<Poster type="movie" category="top_rated" />
				<Carousel title="Popular TV Shows" url="/tv/popular" pages={3} />
				<Carousel title="Popular Movies" url="/movie/popular" />
				<Carousel title="Top Rated Movies" url="/movie/top_rated" />
				<Carousel title="Top Rated TV Shows" url="/tv/top_rated" />
				<Carousel title="Now in Theaters" url="/movie/now_playing" />
				<Carousel title="Airing Today" url="/tv/airing_today" />
				<Carousel title="On the Air Now" url="/tv/on_the_air" />
				<Carousel title="Upcoming Releases" url="/movie/upcoming" />
			</div>
			<Footer />
		</div>
	);
}
