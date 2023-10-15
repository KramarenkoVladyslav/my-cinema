import { useState, useEffect } from 'react';
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

	const handleGenreClick = genre => {
		setSelectedGenre(genre);
	};

	const itemsPerGroup = 30;

	const filteredMovies =
		selectedGenre === 'All'
			? movies
			: movies.filter(movie => movie.genre === selectedGenre);

	const movieGroups = [];
	for (let i = 0; i < filteredMovies.length; i += itemsPerGroup) {
		movieGroups.push(filteredMovies.slice(i, i + itemsPerGroup));
	}

	useEffect(() => {
		if (selectedGenre === 'All') {
			const intervalId = setInterval(() => {
				const randomMovieIndex = Math.floor(
					Math.random() * movies.length
				);
				setRandomMovie(movies[randomMovieIndex]);
			}, 5000);

			const randomMovieIndex = Math.floor(Math.random() * movies.length);
			setRandomMovie(movies[randomMovieIndex]);

			return () => {
				clearInterval(intervalId);
			};
		}
	}, [selectedGenre]);

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

			{movieGroups.map((group, groupIndex) => (
				<div className={styles.movieList} key={groupIndex}>
					{group.map((movie, index) => (
						<MovieBlock
							key={index}
							title={movie.title}
							year={movie.year}
							rating={movie.rating}
							image={movie.image}
						/>
					))}
				</div>
			))}
		</div>
	);
}

export default Home;
