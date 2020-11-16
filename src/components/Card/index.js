import { useHistory } from "react-router-dom";
import {
  StyledCardWrapper,
  StyledText,
  StyledAvg,
  StyledDesc,
  StyledMovieImage,
} from "./Card.style";

import noPoster from "../../assets/na.png";

export const Card = ({ title, avg, poster_path, baseImageUrl, id }) => {
  const history = useHistory();
  {
    console.log({ id });
  }
  return (
    <StyledCardWrapper onClick={() => history.push(`/detail/${id}`)}>
      <StyledMovieImage
        src={poster_path ? baseImageUrl + poster_path : noPoster}
        alt={"Movie Poster"}
      />
      <StyledDesc>
        <StyledText>{title}</StyledText>
        <StyledAvg>&nbsp;{avg}</StyledAvg>
      </StyledDesc>
    </StyledCardWrapper>
  );
};
