import { useContext, useRef } from "react";
import {
  StyledSearchBox,
  StyledSearchInput,
  StyledSearchButton,
} from "./SearchBox.style";
import { MovieContext } from "../../Movie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBox = () => {
  //const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const { setSearchKeyword } = useContext(MovieContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchKeyword(inputRef?.current?.value);
    }
  };

  return (
    <StyledSearchBox>
      <StyledSearchInput
        ref={inputRef}
        color="black"
        isColored
        //onChange={(evt) => setInputValue(evt.target.value)}
        onKeyDown={handleKeyDown}
      />
      <StyledSearchButton
        onClick={() => setSearchKeyword(inputRef?.current?.value)}
      >
        <FontAwesomeIcon icon={faSearch} />
      </StyledSearchButton>
    </StyledSearchBox>
  );
};
