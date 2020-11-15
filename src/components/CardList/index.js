import { Card } from "../Card";
import { StyledCardList } from "./CardList.style";

export const CardList = ({ movieList, baseImageUrl }) => {
  return (
    <StyledCardList>
      {movieList?.map((movie, index) => (
        <Card
          key={index}
          title={movie.title}
          avg={movie.vote_average}
          poster_path={movie.poster_path}
          baseImageUrl={baseImageUrl}
        />
      ))}
    </StyledCardList>
  );
};
