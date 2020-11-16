import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = "f3c9033b9c73d900565955b9c26b38a0"; //temporary
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl + id, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setMovieDetails(res?.data))
      .catch()
      .finally();
  }, [id]);

  return (
    <div>
      <h1>{movieDetails?.original_title}</h1>

      <p>{movieDetails?.overview}</p>
    </div>
  );
}
