import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import axios from "axios";

import { StyledCardList } from "./components/CardList/CardList.style";
import { TopCard } from "./components/TopCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const apiKey = "f3c9033b9c73d900565955b9c26b38a0";
const baseUrl = "https://api.themoviedb.org/3/movie/top_rated";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

const PER_PAGE = 10;

function TopMovies() {
  const [topList, setTopList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * PER_PAGE;
  const currentPageData = topList
    .slice(offset, offset + PER_PAGE)
    .map((movie, index) => (
      <TopCard
        key={index}
        title={movie.title}
        avg={movie.vote_average}
        poster_path={movie.poster_path}
        baseImageUrl={baseImageUrl}
        id={movie.id}
      />
    ));
  const pageCount = Math.ceil(topList.length / PER_PAGE);

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: 10,
        },
      })
      .then((res) => setTopList(res?.data?.results))
      .catch()
      .finally();
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  return (
    <StyledCardList>
      <header>
        <h1>
          <FontAwesomeIcon className="filmIcon" icon={faStar} />
          &nbsp; Top Rated Movies &nbsp;
          <FontAwesomeIcon className="filmIcon" icon={faStar} />
        </h1>
      </header>
      <ReactPaginate
        previousLabel={
          <FontAwesomeIcon className="filmIcon" icon={faChevronLeft} />
        }
        nextLabel={
          <FontAwesomeIcon className="filmIcon" icon={faChevronRight} />
        }
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      {currentPageData}
    </StyledCardList>
  );
}

export default TopMovies;
