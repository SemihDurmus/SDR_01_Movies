import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  color: #feca57;
  font-size: 3.2rem;
  font-family: "Rajdhani", sans-serif;
  font-family: "Acme", sans-serif;
`;
export const StyledMiniWrapper = styled.div`
  width: 80vw;
  height: 50vh;
  display: flex;
  align-items: flex-start;
`;
export const StyledImage = styled.img`
  height: 100%;
`;

export const StyledTable = styled.table`
  color: #e0e0e0;
  margin-left: 2rem;
  font-size: 1.4rem;
  font-family: "Rajdhani", sans-serif;
  height: 100%;
  width: 60%;
  text-align: justify;
  border: 1px solid #e0e0e0;
  border-collapse: collapse;
  .label {
    padding: 0.5rem;
    width: 10rem;
    color: #feca57;
  }
  .value {
    padding: 1rem;
  }
  .single {
    background-color: #2c3e50;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  transition: 200ms;

  &:hover {
    cursor: pointer;
    color: #fbc531;
  }
  &:hover .btn {
    color: #fbc531;
  }

  &:focus {
    outline: none;
    border: none;
  }

  &:active {
    outline: none;
    border: none;
  }

  .btn {
    font-size: 4rem;
    margin-top: 3rem;
    color: #e1b12c;
  }
`;
