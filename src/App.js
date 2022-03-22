import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard.component";

//1b2f9763

const API_URL = "http://www.omdbapi.com?apikey=1b2f9763";

const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  Title: "Batman Begins",
  Type: "movie",
  Year: "2005",
  imdbID: "tt0372784",
};

const App = () => {
  //setting a new state for movies
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //function for fetching movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    // console.log(data.Search);
  };
  //the useEffect hook accepts a callback func and an empty dependency array if we only want to call it at the start.
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search movie"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No movies Found </h2>
        </div>
      )}
    </div>
  );
};
export default App;
