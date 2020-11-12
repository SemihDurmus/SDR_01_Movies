import React, { useState, useEffect } from "react";
import { Card } from "../Card";
import axios from "axios";

const apiKey = "f3c9033b9c73d900565955b9c26b38a0"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";

export const CardList = () => {
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: 1,
          query: "Star Wars", //TODO: from input
        },
      })
      .then((res) => setMovieData(res.data.results), console.log(movieData))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {movieData &&
        movieData.map((movieData) => {
          return (
            <Card
              title={movieData.title}
              avg={movieData.vote_average}
              imgPath={baseUrl.concat(movieData.poster_path)}
            />
          );
        })}
    </>
  );
};
