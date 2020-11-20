import Movie from "./Movie";
import FavMovies from "./FavMovies";
import TopMovies from "./TopMovies";
import MovieDetails from "./MovieDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar appears on every page */}
      <Navbar />
      <Switch>
        <Route path="/detail/:id" component={MovieDetails} exact />
        <Route path="/fav/" component={FavMovies} />
        <Route path="/top/" component={TopMovies} />
        <Route path="/" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
