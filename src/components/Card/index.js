import { StyledCardWrapper, StyledText, StyledMovieImage } from "./Card.style";

export const Card = ({ title, imgSrc }) => {
  return (
    <div>
      <StyledCardWrapper>
        <StyledMovieImage src={imgSrc} alt="Poster not found" />
        <StyledText>{title}</StyledText>
      </StyledCardWrapper>
    </div>
  );
};
