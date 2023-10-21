import PropTypes from "prop-types";
import styles from "./MovieBlock.module.css";

import movieInfo from  "../../assets/images/movieInfo.svg";

function MovieBlock({ title, genre, year, rating, image, color }) {
  return (
    <div className={styles.movieBlock} style={{ borderColor: color }}>
      <div className={styles.movieImageContainer}>
        <img src={image} alt={title} className={styles.movieImage} />
        <div className={styles.movieImageOverlay}></div>
      </div>
      <div className={styles.movieInfo}>
        <h2 className={styles.movieTitle}>{title}</h2>
        <span className={styles.movieGenre}>{genre}</span>
        <div className={styles.movieDetails}>
          <span className={styles.movieYear}>{year}</span>
          <div className={styles.movieRatingBlock}>
            <img src={movieInfo} alt="Movie Info" />
            <span className={styles.movieRating}>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieBlock.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default MovieBlock;
