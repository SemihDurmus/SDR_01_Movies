import { StyledCardList } from "./components/CardList/CardList.style";
import { Card } from "./components/Card";


function FavMovies() {
  const temporary = JSON.parse(localStorage.getItem("FavStorage6"));
  const filmList = temporary.filter((x) => x.length);
  console.log(temporary);
  console.log(filmList);
  return (
    <StyledCardList>
      {filmList?.map((movie, index) => (
        <div>
          <p style={{ color: "white" }}>{movie[0].title}</p>
        </div>
      ))}
    </StyledCardList>
  );
}

export default FavMovies;
