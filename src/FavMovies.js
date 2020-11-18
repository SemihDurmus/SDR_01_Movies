import { StyledCardList } from "./components/CardList/CardList.style";
import { Card } from "./components/Card";

function FavMovies() {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const temporary = JSON.parse(localStorage.getItem("FavStorage6"));

  let filmList = temporary.reduce((a, b) => {
    return a.concat(b);
  }, []);

  filmList = filmList.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  console.log(temporary);
  console.log(filmList);

  return (
    <StyledCardList>
      {filmList?.map((movie, index) => (
        <div>
          <p style={{ color: "yellow" }}>{movie.title}</p>
        </div>
        // <Card
        //   key={index}
        //   title={movie.title}
        //   avg={movie.vote_average}
        //   poster_path={movie.poster_path}
        //   baseImageUrl={baseImageUrl}
        //   id={movie.id}
        // />
      ))}
    </StyledCardList>
  );
}

export default FavMovies;
