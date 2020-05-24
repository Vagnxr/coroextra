import styled from "styled-components";

export const BodyComponent = styled.div`
  background-color: #fff;
`;

export const Grid = styled.div``;

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
  .slick-slider {
    width: 98% !important;

    svg {
      color: #000;
    }

    .slick-prev {
      margin-left: 40px;
    }

    .slick-next {
      margin-right: 20px;
    }
  }
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

  @media (max-width: 1140px) {
    flex-direction: column;
    overflow: unset;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemCard = styled.div`
  display: flex !important;
  align-items: center;
  border: 1px solid #dcdcdc;
  padding: 20px;
  margin: 0 15px;
  color: #717171;
  transition: all ease 0.1s;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border-color: #717171;
  }

  @media (max-width: 1140px) {
    min-width: 100%;
  }

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
