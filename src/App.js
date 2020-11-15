import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

import "./App.css";
import { SearchBox } from "./components/SearchBox";
import { CardList } from "./components/CardList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const apiKey = "";
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

//const movieContext = createContext();
const { Provider, Consumer } = createContext();

function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("earth");

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: 1,
          include_adult: false,
          query: searchKeyword,
        },
      })
      .then((res) => setMovieList(res?.data?.results))
      .catch()
      .finally();
  }, [searchKeyword]);

  return (
    <div className="App">
      <header>
        <h1>
          <FontAwesomeIcon className="filmIcon" icon={faFilm} />
          &nbsp; Movie Database &nbsp;
          <FontAwesomeIcon className="filmIcon" icon={faFilm} />
        </h1>
        <SearchBox setSearchKeyword={setSearchKeyword} />
      </header>
      <CardList movieList={movieList} baseImageUrl={baseImageUrl} />
    </div>
  );
}

export default App;
