import { useHistory } from "react-router-dom";

import { useContext } from "react";
import { MovieContext } from "../../Movie";

import {
  StyledCardWrapper,
  StyledText,
  StyledAvg,
  StyledDesc,
  StyledMovieImage,
  StyledFavButton,
} from "./Card.style";

import noPoster from "../../assets/na.png";

export const Card = ({ title, avg, poster_path, baseImageUrl, id }) => {
  const history = useHistory();
  const { setFav } = useContext(MovieContext);

  return (
    <StyledCardWrapper
    // onClick={() => history.push(`/detail/${id}`)}
    >
      <StyledMovieImage
        src={poster_path ? baseImageUrl + poster_path : noPoster}
        alt={"Movie Poster"}
      />
      <StyledDesc>
        <StyledFavButton onClick={() => setFav(id)}>FAV</StyledFavButton>
        <StyledText>{title}</StyledText>
        <StyledAvg>&nbsp;{avg}</StyledAvg>
      </StyledDesc>
    </StyledCardWrapper>
  );
};
