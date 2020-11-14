import { useState } from "react";
import {
  StyledSearchBox,
  StyledSearchInput,
  StyledSearchButton,
} from "./SearchBox.style";

export const SearchBox = ({ setSearchKeyword }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <StyledSearchBox>
      <StyledSearchInput
        color="black"
        isColored
        onChange={(evt) => setInputValue(evt.target.value)}
      />
      <StyledSearchButton onClick={() => setSearchKeyword(inputValue)}>
        S
      </StyledSearchButton>
    </StyledSearchBox>
  );
};
