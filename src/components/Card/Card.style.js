import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  width: 12rem;
  height: 24rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  transition: 0.2s;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
    background-color: #000;
    box-shadow: 0.1rem 0.1em 0.6rem tomato;
  }
`;

export const StyledMovieImage = styled.img`
  width: 100%;
  position: relative;
  height: 70%;
`;
export const StyledText = styled.p`
  color: #95a5a6;
  font-size: 1.2rem;
  font-family: "Rajdhani", sans-serif;
`;
export const StyledAvg = styled.p`
  color: tomato;
  font-size: 1.2rem;
  font-family: "Rajdhani", sans-serif;
`;

export const StyledDesc = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledButtonContainer = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;

  &:active {
    outline: none;
    border: none;
  }

  .btn {
    color: #95a5a6;
    font-size: 1.2rem;
    transition: 200ms;
  }
  .btn:hover {
    color: tomato;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
