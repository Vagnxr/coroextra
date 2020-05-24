import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  padding: 0px;
  max-width: 100%;

  button {
    width: 12%;
    color: red;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: all ease 0.1s;

    &:hover {
      background-color: red;
      color: #fff;
      border: none;
    }
  }
`;

export const ListItems = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin-right: 2%;

  li {
    cursor: pointer;
    padding: 14px;
    transition: color 0.1s;

    &:hover {
      color: red;
    }
  }
`;

export const Button = styled.button``;
