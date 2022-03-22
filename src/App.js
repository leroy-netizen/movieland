import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

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
  //function for fetching movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();
    console.log(data.Search);
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
          value="Batman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie"></div>
      </div>
    </div>
  );
};
export default App;
