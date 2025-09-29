export default function Card({ item }) {
	return (
		<div >
			<img
				src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
				alt={item.title}
				className=" md:w-70 md:h-64 rounded-[.25rem]"
			/>
		</div>
	);
}
