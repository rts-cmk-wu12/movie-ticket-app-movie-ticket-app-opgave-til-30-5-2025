import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/DetailsMoviePage.css';

const API_KEY = "5b81260b7ad189ab18af2df5161d62de";

function DetailsMoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

   const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate('/select-seats');
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="details-page">
      <header className="header">
        <button>{'<'}</button>
        <h1>Details Movie</h1>
        <button>🔖</button>
      </header>

      <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

      <h2>{movie.title}</h2>
      <p className="director">Rating: ★ {movie.vote_average.toFixed(1)}</p>

      <div className="tags">
        {movie.genres?.slice(0, 2).map(genre => (
          <span key={genre.id}>{genre.name}</span>
        ))}
        <span>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
      </div>

      <h3>Synopsis</h3>
      <p className="overview">{movie.overview}</p>

      <button className="book-button" onClick={handleBookTicket}>Book Ticket</button>
    </div>
  );
}

export default DetailsMoviePage;