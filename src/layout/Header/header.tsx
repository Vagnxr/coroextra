import React from "react";

import {
  Container,
  ListItems,
  Button,
  InputSearch,
  Banner,
  HashTags,
  HeaderItem,
} from "./style";

import Logo from "assets/images/logo.svg";

import { BsSearch } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <ListItems>
          <li>Entregador</li>
          <li>Restaurante</li>
          <li>Carreiras</li>
          <li>iFood Empresas</li>
        </ListItems>
        <Button>Entrar</Button>
      </Container>
      <HeaderItem>
        <Banner>
          <img src={Logo} alt="Coroextra banner" />
          <h1>
            Nunca foi tão fácil pedir <strong>lanche</strong>
          </h1>
          <h5>Descubra restaurantes e mercados perto de você</h5>
        </Banner>
        <InputSearch>
          <form>
            <BsSearch size={20} />
            <input placeholder="Buscar" />
          </form>
          <button>Buscar</button>
        </InputSearch>
        <HashTags>
          <ul>
            <li>#mercado</li>
            <li>#pizza</li>
            <li>#lanche</li>
            <li>#comidajaponesa</li>
            <li>#comidabrasileira</li>
            <li>#comidaárabe</li>
            <li>#comidach</li>
          </ul>
        </HashTags>
      </HeaderItem>
    </>
  );
};

export default Header;
