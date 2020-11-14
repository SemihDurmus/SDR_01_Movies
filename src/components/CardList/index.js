import { Card } from "../Card";
import { StyledCardList } from "./CardList.style";

export const CardList = ({ movieList, baseImageUrl }) => {
  return (
    <StyledCardList>
      {movieList?.map((movie, index) => (
        <Card
          key={index}
          title={movie.title}
          avg={movie.avg}
          imgSrc={baseImageUrl + movie.poster_path}
        />
      ))}
    </StyledCardList>
  );
};
