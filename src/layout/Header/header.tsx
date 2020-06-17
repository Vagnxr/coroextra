import React, { useState, useContext } from "react";

import {
  Container,
  ListItems,
  Button,
  InputSearch,
  Banner,
  HashTags,
  HeaderItem,
  ResponsiveMenu,
  Menu,
  SwitchTheme,
} from "./style";

import Logo from "assets/images/logo.svg";

import { ThemeContext } from "styled-components";

import Switch from "react-switch";

import { MdRestaurantMenu } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { text, title } = useContext(ThemeContext);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

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

      <SwitchTheme>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={true}
          uncheckedIcon={true}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={text.secondary}
          onColor={text.primary}
        />
      </SwitchTheme>

      <Menu>
        <button onClick={handleMenu}>
          <MdRestaurantMenu size={24} />
        </button>
      </Menu>

      {showMenu && (
        <ResponsiveMenu>
          <a>
            <img alt="Coroextra logo" src={Logo} />
          </a>
          <ul>
            <li>Entregador</li>
            <li>Restaurante</li>
            <li>Carreiras</li>
            <li>iFood Empresas</li>
          </ul>
        </ResponsiveMenu>
      )}

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
