import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  background-color: #f5f3f4;
  max-width: 100%;
  padding: 16px;

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

export const InputSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    margin: 40px 0 0 20px;
    width: 140px;
    height: 50px;
    background: red;
    border-radius: 2px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: #ff092b;
    }
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    background-color: #fff;
    width: 50%;

    svg {
      color: red;
      margin-left: 10px;
    }

    input {
      flex: 1;
      height: 50px;
      background: transparent;
      border: none;
      padding: 0 24px;

      &::placeholder {
        color: #a6a6a6;
      }
    }

    @media (max-width: 730px) {
      flex: 1;
    }
  }
`;

export const HashTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
    width: 65%;
    list-style: none;

    li {
      cursor: pointer;
      font-size: 14px;
      color: #717171;
      padding: 6px;
      border: 1px solid #dcdcdc;
      border-radius: 5px;
    }
  }
`;

export const HeaderItem = styled.div`
  background-color: #f5f3f4;
  padding-bottom: 20px;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  color: #3e3e3e;

  h1 {
    font-size: 3rem;

    @media (max-width: 730px) {
      font-size: 2.4rem;
      text-align: center;
    }
  }

  h5 {
    font-size: 1.3rem;
    margin-top: 10px;

    @media (max-width: 730px) {
      text-align: center;
    }
  }

  img {
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    height: 175px;
  }

  strong {
    color: red;
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
