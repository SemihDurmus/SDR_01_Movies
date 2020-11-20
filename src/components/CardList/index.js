import { useContext, useState } from "react";
import { MovieContext } from "../../Movie";

import { Card } from "../Card";
import { StyledCardList } from "./CardList.style";

export const CardList = () => {
  const { movieList, baseImageUrl } = useContext(MovieContext);

  return (
    <StyledCardList>
      {movieList?.map((movie, index) => (
        <Card
          key={index}
          title={movie.title}
          avg={movie.vote_average}
          poster_path={movie.poster_path}
          baseImageUrl={baseImageUrl}
          id={movie.id}
        />
      ))}
    </StyledCardList>
  );
};
