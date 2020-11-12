import { StyledCardWrapper, StyledText } from "./Card.style";

export const Card = (props) => {
  return (
    <div>
      <StyledCardWrapper>
        <StyledText>{props.title}</StyledText>
        <StyledText>{props.avg}</StyledText>
        <img src={props.imgPath} />
      </StyledCardWrapper>
      <p>{props.imgPath}</p>
    </div>
  );
};
