import React, { useState, useEffect, createContext } from "react";
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
  const [fav, setFav] = useState(null);
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
    setFavList(localStorage.getItem("FavStorage") || []);
  }, [fav]);

  useEffect(() => {
    console.log("fav", fav);
    console.log("Movielist", movieList);
    const filteredList = movieList.filter((x) => x.id == fav);
    console.log("Filtered List", filteredList);
    let temp = (favList) => [...favList, filteredList];
    console.log(temp);
    localStorage.setItem("FavStorage", temp);

    //localStorage.clear();
  }, [favList]);

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
