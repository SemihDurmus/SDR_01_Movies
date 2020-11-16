import { useHistory } from "react-router-dom";

import { useContext } from "react";
import { MovieContext } from "../../Movie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  StyledCardWrapper,
  StyledText,
  StyledAvg,
  StyledDesc,
  StyledMovieImage,
  StyledButtonContainer,
  StyledButton,
} from "./Card.style";

import noPoster from "../../assets/na.png";

export const Card = ({ title, avg, poster_path, baseImageUrl, id }) => {
  const history = useHistory();
  const { setFav } = useContext(MovieContext);

  return (
    <StyledCardWrapper>
      <StyledMovieImage
        src={poster_path ? baseImageUrl + poster_path : noPoster}
        alt={"Movie Poster"}
      />
      <StyledButtonContainer>
        <StyledButton onClick={() => history.push(`/detail/${id}`)}>
          <FontAwesomeIcon className="btn" icon={faInfoCircle} />
        </StyledButton>

        <StyledAvg>{avg}</StyledAvg>

        <StyledButton onClick={() => setFav(id)}>
          <FontAwesomeIcon className="btn" icon={faHeart} />
        </StyledButton>
      </StyledButtonContainer>

      <StyledDesc>
        <StyledText>{title}</StyledText>
      </StyledDesc>
    </StyledCardWrapper>
  );
};
