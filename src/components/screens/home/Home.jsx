import { useState, useEffect, useRef } from "react";

import styles from "./Home.module.css";

import { movies, genres } from "../../../constants/index";

import MovieBlock from "../../MovieBlock/MovieBlock";
import Sidebar from "../../Sidebar/Sidebar";
import MovieBanner from "../../MovieBanner/MovieBanner";

function Home() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [movieBanner, setMovieBanner] = useState(null);
  const [specialOffers, setSpecialOffers] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const intervalId = useRef(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  useEffect(() => {
    // Function to select a random movie
    const selectMovieBanner = () => {
      const randomMovieIndex = Math.floor(Math.random() * movies.length);
      setMovieBanner(movies[randomMovieIndex]);
    };

    if (selectedGenre === "All") {
      // Select a random movie at the start and set an interval to change it
      if (!movieBanner) {
        selectMovieBanner();
        intervalId.current = setInterval(selectMovieBanner, 5000);
      }

      // Select special offer movies if not already set
      if (specialOffers.length === 0) {
        const uniqueRandomIndexes = new Set();

        while (uniqueRandomIndexes.size < 7) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          uniqueRandomIndexes.add(randomIndex);
        }

        const specialOfferMovies = Array.from(uniqueRandomIndexes).map(
          (index) => movies[index]
        );
        setSpecialOffers(specialOfferMovies);
      }
    } else {
      // Clear random movie and special offers if not in "All" genre
      setMovieBanner(null);
      setSpecialOffers([]);

      // Filter and set movies for the selected genre
      const genreFilteredMovies = movies.filter(
        (movie) => movie.genre === selectedGenre
      );

      setGenreMovies(genreFilteredMovies);
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [selectedGenre, movieBanner, specialOffers]);

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
                selectedGenre === genre ? styles.genreSelected : ""
              }`}
            >
              {genre}
            </li>
          ))}
        </ul>
      </div>

      {selectedGenre === "All" && movieBanner && (
        <MovieBanner movie={movieBanner} />
      )}

      {selectedGenre === "All" && specialOffers.length > 0 && (
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

      {selectedGenre !== "All" && genreMovies.length > 0 && (
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
