import PropTypes from "prop-types";
import styles from "./MovieBanner.module.css";

const MovieBanner = ({ movie }) => {
  return (
    <div className={styles.randomMovie}>
      <div className={styles.randomMovieImageContainer}>
        <img
          src={movie.image}
          alt={movie.title}
          className={styles.randomMovieImage}
        />
        <div className={styles.randomMovieImageOverlay}></div>
      </div>
      <div className={styles.randomMovieInfo}>
        <h2 className={styles.movieTitle}>{movie.title}</h2>
        <p className={styles.movieDescription}>{movie.description}</p>
        <div className={styles.movieDetails}>
          <span className={styles.movieYear}>{movie.year}</span>
          <span className={styles.movieGenre}>{movie.genre}</span>
          <span className={styles.movieDuration}>{movie.duration} min</span>
        </div>
      </div>
    </div>
  );
};

MovieBanner.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieBanner;
