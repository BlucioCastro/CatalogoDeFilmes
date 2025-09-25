import Carousel from "../components/Carousel";
import Poster from "../components/Poster";

export default function Home() {
	return (
		<div> 
      <Poster />
			<Carousel title="Populares" url="/tv/changes" />
			<Carousel title="Melhores avaliados" url="/movie/top_rated" />
			<Carousel title="Em cartaz nos cinemas" url="/movie/now_playing" />
			<Carousel title="Populares" url="/movie/popular" />
			<Carousel title="Próximos lançamentos" url="/movie/upcoming" />
		</div>
	);
}
