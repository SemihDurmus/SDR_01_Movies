import React, { useState, useEffect, createContext, useCallback } from "react";
import axios from "axios";

import "./Movie.css";
import { SearchBox } from "./components/SearchBox";
import { CardList } from "./components/CardList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const apiKey = "f3c9033b9c73d900565955b9c26b38a0";
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const MovieContext = createContext();

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("earth");
  const [fav, setFav] = useState('');
  const [favList, setFavList] = useState([]);

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

  useEffect(() => {
    setFavList((JSON.parse(localStorage.getItem("FavStorage6")).filter((x) => x.length)) || []);
  }, [fav]);

  useEffect(() => {
    let temp = movieList.filter((item) => item.id == fav);
    localStorage.setItem("FavStorage6", JSON.stringify([...favList, temp]));
  }, [favList]);

  console.log(favList);

  return (
    <div className="App">
      <MovieContext.Provider
        value={{ movieList, baseImageUrl, setSearchKeyword, setFav }}
      >
        <header>
          <h1>
            <FontAwesomeIcon className="filmIcon" icon={faFilm} />
            &nbsp; Movie Stack &nbsp;
            <FontAwesomeIcon className="filmIcon" icon={faFilm} />
          </h1>
          <SearchBox />
        </header>
        <CardList />
      </MovieContext.Provider>
    </div>
  );
}

export default Movie;
