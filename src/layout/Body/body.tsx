import React from "react";

import Logo from "assets/images/logo.svg";

import {
  BsSearch,
  BsChevronLeft,
  BsChevronRight,
  BsStar,
} from "react-icons/bs";

import {
  Container,
  InputSearch,
  HashTags,
  Exposure,
  Company,
  Cards,
  Scroll,
  ButtonLeft,
  ButtonRight,
  ItemCard,
  Title,
} from "./style";

const Body: React.FC = () => {
  return (
    <>
      <Container>
        <img src={Logo} alt="Coroextra banner" />
        <h1>
          Nunca foi tão fácil pedir <strong>lanche</strong>
        </h1>
        <h5>Descubra restaurantes e mercados perto de você</h5>
      </Container>
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
      <Exposure>
        <a href="#">
          <img
            src="https://static-images.ifood.com.br/image/upload/f_auto,q_100/webapp/landing/landing-banner-1"
            alt=""
          />
        </a>

        <a href="#">
          <img
            src="https://static-images.ifood.com.br/image/upload/f_auto,q_100/webapp/landing/landing-banner-2"
            alt=""
          />
        </a>

        <a href="#">
          <img
            src="https://static-images.ifood.com.br/image/upload/f_auto,q_100/webapp/landing/landing-banner-3"
            alt=""
          />
        </a>
      </Exposure>
      <Company>
        <Title>The best of coroextra:</Title>

        <Cards>
          <ItemCard>
            <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/Logo McDonald_MCDON_DRIV15.jpg" />

            <div>
              <h1>McDonalds</h1>
              <span>
                <BsStar size={10} /> <strong>4.6</strong> Frutos do Mar . 5,6km
              </span>
              <span>60-70 min</span>
            </div>
          </ItemCard>

          <ItemCard>
            <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/Logo McDonald_MCDON_DRIV15.jpg" />

            <div>
              <h1>McDonalds</h1>
              <span>
                <BsStar size={10} /> <strong>4.6</strong> Frutos do Mar . 5,6km
              </span>
              <span>60-70 min</span>
            </div>
          </ItemCard>

          <ItemCard>
            <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/Logo McDonald_MCDON_DRIV15.jpg" />

            <div>
              <h1>McDonalds</h1>
              <span>
                <BsStar size={10} /> <strong>4.6</strong> Frutos do Mar . 5,6km
              </span>
              <span>60-70 min</span>
            </div>
          </ItemCard>

          <ItemCard>
            <img src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/Logo McDonald_MCDON_DRIV15.jpg" />

            <div>
              <h1>McDonalds</h1>
              <span>
                <BsStar size={10} /> <strong>4.6</strong> Frutos do Mar . 5,6km
              </span>
              <span>60-70 min</span>
            </div>
          </ItemCard>
        </Cards>
        <Scroll>
          <ButtonLeft>
            <BsChevronLeft size={20} />
          </ButtonLeft>
          <ButtonRight>
            <BsChevronRight size={20} />
          </ButtonRight>
        </Scroll>
      </Company>
    </>
  );
};

export default Body;
