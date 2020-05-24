import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsChevronLeft, BsChevronRight, BsStar } from "react-icons/bs";

import { BodyComponent, Exposure, Company, ItemCard, Title } from "./style";

import Slider from "react-slick";

const Body: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    slidesToScroll: 1,
    nextArrow: <BsChevronRight size={24} />,
    prevArrow: <BsChevronLeft size={24} />,
  };

  return (
    <>
      <BodyComponent>
        <Exposure>
          <a href="http://localhost:3000">
            <img
              src="https://static-images.ifood.com.br/image/upload/f_auto,q_100/webapp/landing/landing-banner-1"
              alt="Component page"
            />
          </a>

          <a href="http://localhost:3000">
            <img
              src="https://static-images.ifood.com.br/image/upload/f_auto,q_100/webapp/landing/landing-banner-2"
              alt="Component page"
            />
          </a>

          <a href="http://localhost:3000">
            <img
              src="https://static-images.ifood.com.br/image/upload/f_auto,q_100/webapp/landing/landing-banner-3"
              alt="Component page"
            />
          </a>
        </Exposure>
        <Company>
          <Title>The best of coroextra:</Title>

          <Slider {...settings}>
            <ItemCard>
              <img
                alt="Item card"
                src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/Logo McDonald_MCDON_DRIV15.jpg"
              />

              <div>
                <h1>McDonalds</h1>
                <span>
                  <BsStar size={10} /> <strong>4.6</strong> Frutos do Mar .
                  5,6km
                </span>
                <span>60-70 min</span>
              </div>
            </ItemCard>

            <ItemCard>
              <img
                alt="Item card"
                src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/Logo McDonald_MCDON_DRIV15.jpg"
              />

              <div>
                <h1>McDonalds</h1>
                <span>
                  <BsStar size={10} /> <strong>4.6</strong> Frutos do Mar .
                  5,6km
                </span>
                <span>60-70 min</span>
              </div>
            </ItemCard>

            <ItemCard>
              <img
                alt="Item card"
                src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/Logo McDonald_MCDON_DRIV15.jpg"
              />

              <div>
                <h1>McDonalds</h1>
                <span>
                  <BsStar size={10} /> <strong>4.6</strong> Frutos do Mar .
                  5,6km
                </span>
                <span>60-70 min</span>
              </div>
            </ItemCard>

            <ItemCard>
              <img
                alt="Item card"
                src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/Logo McDonald_MCDON_DRIV15.jpg"
              />

              <div>
                <h1>McDonalds</h1>
                <span>
                  <BsStar size={10} /> <strong>4.6</strong> Frutos do Mar .
                  5,6km
                </span>
                <span>60-70 min</span>
              </div>
            </ItemCard>
          </Slider>
        </Company>
      </BodyComponent>
    </>
  );
};

export default Body;
