import styled, { keyframes } from "styled-components";

const Fade = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 0.9;
}
`;

export const SwitchTheme = styled.div`
  position: absolute;
`;

export const Container = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.background.primary};
  max-width: 100%;
  padding: 16px;

  @media (max-width: 730px) {
    display: none;
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
    background: ${(props) => props.theme.background.tertiary};
    border-radius: 2px;
    border: 0;
    color: ${(props) => props.theme.text.tertiary};
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    background-color: ${(props) => props.theme.background.secondary};
    width: 50%;

    svg {
      color: ${(props) => props.theme.background.tertiary};
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
  background-color: ${(props) => props.theme.background.primary};
  padding-bottom: 20px;
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  color: ${(props) => props.theme.text.primary};

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
    color: ${(props) => props.theme.text.quaternary};
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
      color: ${(props) => props.theme.text.quaternary};
    }
  }
`;

export const Button = styled.button`
  width: 12%;
  color: ${(props) => props.theme.text.quaternary};
  background-color: ${(props) => props.theme.background.secondary};
  border: 1px solid ${(props) => props.theme.greys.primary};
  border-radius: 4px;
  transition: all ease 0.1s;

  &:hover {
    background-color: ${(props) => props.theme.text.quaternary};
    color: ${(props) => props.theme.text.tertiary};
    border: none;
  }
`;

export const Menu = styled.div`
  display: none;

  @media (max-width: 730px) {
    display: flex;
    min-width: 100%;
    justify-content: flex-end;
    align-items: center;
    border: none;
    background-color: transparent;
    padding: 20px;
    position: absolute;

    button {
      z-index: 2;
    }
  }

  button {
    border: none;
    background-color: transparent;
  }

  svg {
    color: #c12e38;
    transition: all ease 0.2s;

    &:hover {
      filter: brightness(70%);
    }
  }
`;

export const ResponsiveMenu = styled.div`
  animation: ${Fade} 0.3s linear forwards;
  transition: all linear 0.3s;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background.quaternary};
  opacity: 0.9;
  z-index: 1;

  a {
    cursor: pointer;
    width: fit-content;
  }

  img {
    height: 70px;
    width: 70px;
    transition: all ease 0.2s;

    &:hover {
      filter: brightness(70%);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 40px;
    z-index: 2;

    li {
      cursor: pointer;
      color: ${(props) => props.theme.text.tertiary};
      margin: 10px 0;
      list-style: none;
      transition: all ease 0.2s;

      &:hover {
        filter: brightness(70%);
      }
    }
  }
`;
