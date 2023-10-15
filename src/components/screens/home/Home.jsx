import { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';
import MovieBlock from '../../MovieBlock/MovieBlock';
import movies from '../../../constants/MovieList';
import Sidebar from '../../Sidebar/Sidebar';
import RandomMovie from '../../RandomMovie/RandomMovie';

const genres = [
	'All',
	'Comedy',
	'Fantasy',
	'Drama',
	'History',
	'Horror',
	'Thriller',
	'Action',
	'Detective',
	'Criminal',
];

function Home() {
	const [selectedGenre, setSelectedGenre] = useState('All');
	const [randomMovie, setRandomMovie] = useState(null);
	const [specialOffers, setSpecialOffers] = useState([]);
	const [genreMovies, setGenreMovies] = useState([]);
	const intervalId = useRef(null);

	const handleGenreClick = genre => {
		setSelectedGenre(genre);
	};

	useEffect(() => {
		// Рандомний фільм для вкладки "All"
		if (selectedGenre === 'All') {
			intervalId.current = setInterval(() => {
				const randomMovieIndex = Math.floor(
					Math.random() * movies.length
				);
				setRandomMovie(movies[randomMovieIndex]);
			}, 5000);

			const randomMovieIndex = Math.floor(Math.random() * movies.length);
			setRandomMovie(movies[randomMovieIndex]);

			if (specialOffers.length === 0) {
				const specialOfferMovies = [];
				const uniqueRandomIndexes = new Set();

				while (uniqueRandomIndexes.size < 7) {
					const randomIndex = Math.floor(
						Math.random() * movies.length
					);
					uniqueRandomIndexes.add(randomIndex);
				}

				uniqueRandomIndexes.forEach(index => {
					specialOfferMovies.push(movies[index]);
				});

				setSpecialOffers(specialOfferMovies);
			}
		} else {
			setRandomMovie(null);
			setSpecialOffers([]);

			// Завантажити фільми, які відповідають вибраному жанру
			const genreFilteredMovies = movies.filter(
				movie => movie.genre === selectedGenre
			);

			setGenreMovies(genreFilteredMovies);
		}

		return () => {
			clearInterval(intervalId.current);
		};
	}, [selectedGenre, specialOffers.length]);

	return (
		<div className={styles.homePage}>
			<Sidebar />
			<h1 className={styles.title}>My cinema</h1>
			<div className={styles.genres}>
				<ul className={styles.genresBlock}>
					{genres.map((genre, index) => (
						<li
							key={index}
							onClick={() => handleGenreClick(genre)}
							className={`${styles.genre} ${
								selectedGenre === genre
									? styles.genreSelected
									: ''
							}`}
						>
							{genre}
						</li>
					))}
				</ul>
			</div>

			{selectedGenre === 'All' && randomMovie && (
				<RandomMovie movie={randomMovie} />
			)}

			{selectedGenre === 'All' && specialOffers.length > 0 && (
				<div className={styles.movieList}>
					{specialOffers.map((movie, index) => (
						<MovieBlock
							key={index}
							title={movie.title}
							year={movie.year}
							rating={movie.rating}
							image={movie.image}
						/>
					))}
				</div>
			)}

			{selectedGenre !== 'All' && genreMovies.length > 0 && (
				<div className={styles.movieList}>
					{genreMovies.map((movie, index) => (
						<MovieBlock
							key={index}
							title={movie.title}
							year={movie.year}
							rating={movie.rating}
							image={movie.image}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
