import {
  StyledCardWrapper,
  StyledText,
  StyledAvg,
  StyledDesc,
  StyledMovieImage,
} from "./Card.style";
import noPoster from "../../assets/na.png";
export const Card = ({ title, avg, poster_path, baseImageUrl }) => {
  return (
    <>
      <StyledCardWrapper>
        <StyledMovieImage
          src={poster_path ? baseImageUrl + poster_path : noPoster}
        />
        <StyledDesc>
          <StyledText>{title}</StyledText>
          <StyledAvg>&nbsp;{avg}</StyledAvg>
        </StyledDesc>
      </StyledCardWrapper>
    </>
  );
};
