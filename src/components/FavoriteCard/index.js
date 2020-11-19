import React, {useEffect} from 'react';

import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import {
  StyledCardWrapper,
  StyledText,
  StyledAvg,
  StyledDesc,
  StyledMovieImage,
  StyledButtonContainer,
  StyledButton,
} from "../Card/Card.style";

import noPoster from "../../assets/na.png";

export const FavoriteCard = ({ title, avg, poster_path, baseImageUrl, id, deleteFav }) => {
  const history = useHistory();

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

        <StyledButton onClick={() => deleteFav(id)}>
          <FontAwesomeIcon className="btn" icon={faTrash} />
        </StyledButton>
      </StyledButtonContainer>

      <StyledDesc>
        <StyledText>{title}</StyledText>
      </StyledDesc>
    </StyledCardWrapper>
  );
};
