import React from 'react';
import '../../css/movieDetails.css';
import '../../css/homeMoviesView.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faPlus, faStar, faTimes} from '@fortawesome/free-solid-svg-icons'
import { filterTextLength } from '../model.js'
import Toast from 'react-bootstrap/Toast'

function MovieDetailsView(props) {
    return (
        <div className="movie-details">

            <div className="movie-details-intro">
                <h1>
                    {props.movie.title}
                </h1>
                <div className="movie-details-intro-content">
                    <div className="movie-details-intro-content-left">
                        <p>
                            <FontAwesomeIcon icon={faStar} size="lg" color="#EBDE8E"/> Rating: {props.movie.vote_average}
                        </p>
                    </div>
                    <div className="movie-details-intro-content-center">
                        <p>
                            <FontAwesomeIcon icon={faClock} size="lg" color="#EBDE8E"/> Duration: {props.movie.runtime} min
                        </p>
                    </div>
                    <div className="movie-details-intro-content-right">
                        <p>
                            <FontAwesomeIcon icon={faCalendarAlt} size="lg" color="#EBDE8E"/> Release: {props.movie.release_date}
                        </p>
                    </div>
                    <div className="movie-details-button">
                        <button className="movie-details-button-watch" onClick={() => props.addToWatchlist(props.movie)}>
                            <FontAwesomeIcon icon={faPlus}/> ADD LIST
                        </button>
                    </div>
                </div>
            </div>

            <div className="movie-details-image">
                <img src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`} alt="Movie Backdrop" />
            </div>
        </div>
    );
}

export default MovieDetailsView;
