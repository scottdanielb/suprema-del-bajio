import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import grilled from '../../images/grilled.jpg';
import cheeseburger2 from '../../images/cheeseburger2.jpg';
import cheeseburger3 from '../../images/cheeseburger3.jpg';
import {
  HeroContainer,
  HeroContainer2,
  HeroContainer3,
  HeroContent,
  HeroContentText,
  HeroSubtitle,
  HeroTitle,
} from './hero-slider-bs.styled';

export const HeroSliderBs = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <HeroContainer></HeroContainer>
        <Carousel.Caption>
          <HeroContent>
            <HeroContentText>
              <HeroTitle>En Suprema del Bajío nos esforzamos</HeroTitle>
              <HeroSubtitle>
                En ofrecer productos de la más alta calidad, manteniendo los
                estandáres de seguridad alimentaria más altos.
              </HeroSubtitle>
            </HeroContentText>
          </HeroContent>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <HeroContainer2></HeroContainer2>
        <Carousel.Caption>
          <HeroContent>
            <HeroContentText>
              <HeroTitle>
                Nuestra misión es ser los mejores todos los días
              </HeroTitle>
              <HeroSubtitle>
                Contamos con instalaciones y equipos de vanguardia para el
                proceso, almacenaje y distribución de productos carnios de la
                más alta calidad.
              </HeroSubtitle>
            </HeroContentText>
          </HeroContent>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <HeroContainer3></HeroContainer3>

        <Carousel.Caption>
          <HeroContent>
            <HeroContentText>
              <HeroTitle>Compromiso. Honestidad. Responsabilidad.</HeroTitle>
              <HeroSubtitle>
                Abastecimiento seguro, entregas puntuales y atención
                personalizada con envíos a todo México.
              </HeroSubtitle>
            </HeroContentText>
          </HeroContent>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
