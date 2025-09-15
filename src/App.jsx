import { useEffect, useState } from "react";

export default function App() {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [page, setPage] = useState(1);


	const apiKey = import.meta.env.VITE_TMDB_API_KEY;

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
				);
				if (!response.ok) {
					throw new Error(`HTTP Error! status: ${response.status}`);
				}
				const result = await response.json();
				setData(result);
				setError(null);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [page]);

	if (error) return <div>Error: {error}</div>;
	if (loading) return <div>Loading...</div>;
	if (!data) return <div>Not data found</div>;

	return (
		<>
		</>
	);
}
