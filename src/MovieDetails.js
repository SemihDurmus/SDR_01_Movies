import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import {
  StyledWrapper,
  StyledTitle,
  StyledImage,
  StyledTable,
  StyledMiniWrapper,
  StyledButton,
} from "./MovieDetails.style";

import noPoster from "../src/assets/na.png";

const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = "f3c9033b9c73d900565955b9c26b38a0"; //temporary
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();
  const history = useHistory();

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
    <StyledWrapper>
      <StyledTitle>{movieDetails?.original_title}</StyledTitle>
      <StyledMiniWrapper>
        <StyledImage
          src={
            movieDetails?.poster_path
              ? baseImageUrl + movieDetails?.poster_path
              : noPoster
          }
          alt={"Movie Poster"}
        />
        <StyledTable>
          <tr>
            <td className="label ">Release date</td>
            <td className="value">{movieDetails?.release_date}</td>
          </tr>
          <tr className="single ">
            <td className="label">Original language</td>
            <td className="value">
              {movieDetails?.original_language == "en"
                ? "English"
                : movieDetails?.original_language}
            </td>
          </tr>
          <tr>
            <td className="label ">Overview</td>
            <td className="value">{movieDetails?.overview}</td>
          </tr>
        </StyledTable>
      </StyledMiniWrapper>
      <StyledButton onClick={() => history.goBack()}>
        <FontAwesomeIcon className="btn" icon={faArrowCircleLeft} />
      </StyledButton>
    </StyledWrapper>
  );
}
