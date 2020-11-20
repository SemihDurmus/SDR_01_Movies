import styled from "styled-components";

export const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
  margin-top: 6rem;

  .pagination {
    position: absolute;
    top: 20rem;
    display: flex;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
    width: 300px;
  }

  .pagination a {
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    color: #e0e0e0;
  }

  .pagination__link--active a {
    color: #fff;
    background: tomato;
    outline: none;
    border: none;
  }

  .pagination__link--disabled a {
    color: rgb(198, 197, 202);
    border: 1px solid rgb(198, 197, 202);
    outline: none;
    border: none;
  }
`;
