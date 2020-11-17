import { StyledCardList } from "./components/CardList/CardList.style";
import { Card } from "./components/Card";


function FavMovies() {
  const temporary = JSON.parse(localStorage.getItem("FavStorage6"));

  let filmList = temporary.reduce((a, b) => {
    return a.concat(b);
  }, []);

  filmList = filmList.filter((item, index, self) =>
  index === self.findIndex((t) => (
    t.id === item.id
  ))
)

  console.log(temporary);
  console.log(filmList);

  return (
    <StyledCardList>
      {filmList?.map((movie, index) => (
        <div>
          <p style={{ color: "yellow" }}>{movie.title}</p>
        </div>
      ))}
    </StyledCardList>
  );
}

export default FavMovies;
