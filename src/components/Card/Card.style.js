import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  width: 12rem;
  height: 23rem;
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
    transform: scale(1.05);
    background-color: #000;
    box-shadow: 0.1rem 0.1em 0.6rem tomato;
  }
`;

export const StyledMovieImage = styled.img`
  width: 100%;
  position: relative;
  height: auto;
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
  display: flex;
  align-items: center;
`;
