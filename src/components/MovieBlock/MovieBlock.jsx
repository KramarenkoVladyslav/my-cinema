import PropTypes from "prop-types";
import styles from "./MovieBlock.module.css";

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
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.67588 0.725971L9.25489 3.92547C9.36470 4.1480 9.577 4.30219 9.82260 4.33782L13.3536 4.85092C13.9721 4.94086 14.2188 5.70073 13.7715 6.13673L11.2165 8.62718C11.0389 8.80036 10.9577 9.05004 10.9998 9.29447L11.6028 12.8111C11.7085 13.4270 11.0620 13.8966 10.5089 13.606L7.35085 11.9458C7.13124 11.8305 6.8687 11.8305 6.64909 11.9458L3.49106 13.606C2.93795 13.8969 2.29139 13.4270 2.39711 12.8111L3.00016 9.29447C3.04221 9.05004 2.96102 8.80036 2.78347 8.62718L0.228483 6.13673C-0.21891 5.70044 0.0278571 4.94057 0.64638 4.85092L4.17734 4.33782C4.42294 4.30219 4.63524 4.1480 4.74505 3.92547L6.32406 0.725971C6.60032 0.165562 7.39932 0.165562 7.67588 0.725971Z"
                fill="#F37515"
              />
            </svg>
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
