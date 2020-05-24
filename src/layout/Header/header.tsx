import React from "react";

import { Container, ListItems, Button } from "./style";

const Header: React.FC = () => {
  return (
    <Container>
      <ListItems>
        <li>Entregador</li>
        <li>Restaurante</li>
        <li>Carreiras</li>
        <li>iFood Empresas</li>
      </ListItems>
      <Button>Entrar</Button>
    </Container>
  );
};

export default Header;
