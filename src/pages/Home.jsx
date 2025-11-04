import Carousel from "../components/Carousel";
import Poster from "../components/Poster";


export default function Home() {
	return (
		<div> 
      <Poster type="movie" category="top_rated" />
			<Carousel title="Séries de TV populares" url="/tv/popular" pages={3}/>
			<Carousel title="Populares" url="/movie/popular" />
			<Carousel title="Melhores avaliados" url="/movie/top_rated" />
			<Carousel title="Séries melhores avaliadas" url="/tv/top_rated" />
			<Carousel title="Em cartaz nos cinemas" url="/movie/now_playing" />
			<Carousel title="Atualmente exibidas" url="/tv/airing_today" />
			<Carousel title="No ar agora" url="/tv/on_the_air" />
			<Carousel title="Próximos lançamentos" url="/movie/upcoming" />
		</div>
	);
}
