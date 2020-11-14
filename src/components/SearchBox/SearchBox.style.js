import styled, { css } from "styled-components";

// --------------BUTTON----------------
export const StyledButton = styled.button`
  cursor: pointer;
`;

export const StyledSearchButton = styled(StyledButton)`
  box-sizing: border-box;
  padding: 10px;
  width: 42.5px;
  height: 42.5px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  color: #07051a;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 900;
  transition: all 1s;
  outline: none;

  &:focus {
    outline: none;
  }
`;

// --------------INPUT----------------
export const StyledSearchInput = styled.input`
  color: ${(p) => p.color};

  ${(p) =>
    p.isColored &&
    css`
      color: red;
    `}
  /* border-radius: 1rem;
  margin-right: 0.5rem;
  height: 2rem;
  box-sizing: border-box;
  padding-left: 15px; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42.5px;
  line-height: 30px;
  outline: 0;
  border: 0;
  display: none;
  font-size: 1em;
  border-radius: 20px;
  padding: 0 20px;
`;

// --------------SEARCHBOX----------------
export const StyledSearchBox = styled.div`
  position: relative;
  transition: all 1s;
  width: 50px;
  height: 50px;
  background: #fff;
  box-sizing: border-box;
  border-radius: 25px;
  border: 4px solid #fff;
  padding: 5px;
  outline: 0;
  margin-left: -1%;

  /* input {
    border-radius: 6px;
    padding: 5px;
  } */

  &:hover {
    width: 200px;
    cursor: pointer;
  }

  &:hover input {
    display: block;
    background: transparent;
  }

  &:hover button {
    background: #07051a;
    color: white;
    /* background-color: transparent; */
  }
`;
