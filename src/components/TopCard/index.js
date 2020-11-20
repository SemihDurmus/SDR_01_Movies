import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

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

export const TopCard = ({ title, avg, poster_path, baseImageUrl, id }) => {
  const history = useHistory();

  return (
    <StyledCardWrapper>
      <StyledMovieImage
        src={poster_path ? baseImageUrl + poster_path : noPoster}
        alt={"Movie Poster"}
      />
      <StyledButtonContainer>
        <StyledAvg>{avg}</StyledAvg>
        <StyledButton onClick={() => history.push(`/detail/${id}`)}>
          <FontAwesomeIcon className="btn" icon={faInfoCircle} />
        </StyledButton>
      </StyledButtonContainer>

      <StyledDesc>
        <StyledText>{title}</StyledText>
      </StyledDesc>
    </StyledCardWrapper>
  );
};
