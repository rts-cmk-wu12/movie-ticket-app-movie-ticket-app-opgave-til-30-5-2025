import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ExploreMoviePage.css';

const API_KEY = "5b81260b7ad189ab18af2df5161d62de";

function ExploreMoviePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => setMovies(data.results.slice(0, 5)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="explore-page">
      <header className="header">
        <button>{'<'}</button>
        <h1>Explore Movie</h1>
        <button>🔍</button>
      </header>

      <div className="tabs">
        <button className="active">Now Showing</button>
        <button>Upcoming</button>
      </div>

      <section>
        <div className="section-header">
          <h2>Top Movies</h2>
          <span>See more</span>
        </div>
        <div className="movie-scroll">
          {movies.map(movie => (
            <Link key={movie.id} to={`/details/${movie.id}`} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
              <p className="rating">★ {movie.vote_average.toFixed(1)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2>Recommended</h2>
          <span>See more</span>
        </div>
        <div className="recommended">
          {/* Optional static or dynamic recommended content */}
        </div>
      </section>
    </div>
  );
}

export default ExploreMoviePage;