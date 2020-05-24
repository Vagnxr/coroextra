import styled from "styled-components";

export const Title = styled.div`
  color: inherit;
  font-size: inherit;
  padding: 20px;
  font-size: 24px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 0.1px solid #c4c4c4 !important;

  header {
    display: flex;
    padding: 20px;
    min-width: 100%;
    justify-content: space-between;
    align-items: center;

    a {
      cursor: pointer;
      color: red;
    }
  }

  ul {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    height: 300px;
    padding: 0 40px;
  }

  li {
    font-size: 18px;
    margin: 0 0 30px 0;
    list-style: none;

    a {
      color: #717171;

      transition: all ease 0.1s;
      text-decoration: none;

      &:hover {
        filter: brightness(70%);
      }
    }
  }
`;
