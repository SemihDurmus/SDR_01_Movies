import React, { useState, useCallback } from "react";
import { StyledCardList } from "./components/CardList/CardList.style";
import { FavoriteCard } from "./components/FavoriteCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function FavMovies() {
  const temporary = JSON.parse(localStorage.getItem("FavStorage"));
  const [flag, setFlag] = useState(false);
  const history = useHistory();

  let filmList = temporary.reduce((a, b) => {
    return a.concat(b);
  }, []);

  filmList = filmList.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  function deleteFav(id) {
    const updatedList = filmList.filter((item) => item.id !== id);
    localStorage.setItem("FavStorage", JSON.stringify(updatedList));
    setFlag(!flag);
  }

  useCallback(() => {
    history.push(`/fav/`);
    window.addEventListener(
      "beforeunload",
      localStorage.setItem("FavStorage", JSON.stringify(filmList))
    );
  }, [flag]);

  localStorage.setItem("FavStorage", JSON.stringify(filmList));

  console.log(filmList);

  return (
    <StyledCardList>
      <header style={{ marginBottom: -30 }}>
        <h1>
          <FontAwesomeIcon className="filmIcon" icon={faHeart} />
          &nbsp; Favorite Movies &nbsp;
          <FontAwesomeIcon className="filmIcon" icon={faHeart} />
        </h1>
      </header>
      {filmList?.map((movie, index) => (
        <FavoriteCard
          key={index}
          title={movie.title}
          avg={movie.vote_average}
          poster_path={movie.poster_path}
          baseImageUrl={baseImageUrl}
          id={movie.id}
          deleteFav={deleteFav}
        />
      ))}
    </StyledCardList>
  );
}

export default FavMovies;
