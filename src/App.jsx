import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";

const App = () => {

  //state to hold data for popular movies
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const imgUrl = process.env.REACT_APP_BASE_IMGURL;

  const search = async (q) => {
    if(q === ""){
      return
    }
    const query = await searchMovie(q);
    setPopularMovies(query.results);
  };

  const listOfMovies = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movieWrapper" key={i}>
          <div className="movieTitle">{movie.title}</div>
          <img className="movieImage" src={`${imgUrl}/${movie.poster_path}`} alt=""/>
          <div className="movieDate">Release Date : {movie.release_date}</div>
          <div className="movieRate">Rate : {movie.vote_average}</div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Movies</h1>
        <input
          type="text"
          className="input-search"
          placeholder="Search film..."
          onChange={({ target }) => search(target.value)}
        />
        <div className="movieContainer">
        {listOfMovies()} 
        </div>
      </header>
    </div>
  );
};

export default App;
