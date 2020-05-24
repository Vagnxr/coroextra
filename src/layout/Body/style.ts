import styled from "styled-components";

export const Container = styled.div`
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

export const Grid = styled.div``;

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

export const Exposure = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    transition: all linear 0.2s;

    &:hover {
      transform: translateY(-10px);
    }

    @media (max-width: 1240px) {
      margin-left: 10px;

      &:hover {
        transform: none;
        filter: brightness(90%);
      }
    }
  }

  @media (max-width: 1240px) {
    justify-content: unset;
    align-items: unset;
    overflow-x: auto;
  }
`;

export const Company = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  justify-content: center;
  padding: 0 30px;
  margin-top: 40px;
  width: 100%;
`;

export const Title = styled.div`
  color: inherit;
  font-size: inherit;
  padding: 20px;
  font-size: 24px;
`;

export const Cards = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  transition: all ease 0.3s;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Scroll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLeft = styled.button`
  left: 14px;
  top: 60%;
  position: absolute;
  background: white;
  border: 1px solid #c4c4c4;
  border-radius: 100%;
  z-index: 1;
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonRight = styled.button`
  right: 10px;
  top: 60%;
  position: absolute;
  background: white;
  border: 1px solid #c4c4c4;
  border-radius: 100%;
  z-index: 1;
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemCard = styled.div`
  display: flex;
  align-items: center;
  min-width: 32%;
  border: 1px solid #dcdcdc;
  padding: 20px;
  margin-left: 15px;
  color: #717171;

  div {
    display: flex;
    padding-left: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 5%;
  }

  strong {
    color: yellow;
  }

  span {
    margin-top: 10px;
    font-size: 14px;

    & + span {
      margin-top: 20px;
    }
  }

  h1 {
    font-size: 16px;
    color: #3e3e3e;
  }

  svg {
    color: yellow;
  }

  img {
    width: 85px;
    height: 85px;
    border-radius: 4px;
  }
`;
