import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import grilled from '../../images/grilled.jpg';
import cheeseburger2_1 from '../../images/cheeseburger2_1.jpg';
import cheeseburger3 from '../../images/cheeseburger3.jpg';

import './styles.css';
import { Title, Content, Image, ContainerText } from './home-slider.styled';
// import required modules
import { Pagination, Navigation } from 'swiper';

export const HeroSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Title className='title'>En Suprema del Bajio nos esforzamos</Title>
          <Content className='content'>
            En ofrecer productos de la mas alta calidad, manteniendo los
            estandares de seguridad alimentaria mas altos
          </Content>

          <div className='hero-slide'>
            <div className='slide-image'>
              <Image src={grilled} alt='' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Title className='title'>
            Nuestra mision es ser los mejores todos los dias
          </Title>
          <Content className='content'>
            Contamos con instalaciones y equipos de vanguardia para el proceso,
            almacenaje y distribucion de productos carnios de la mas alta
            calidad
          </Content>
          <div className='hero-slide'>
            <div className='slide-image'>
              <Image src={cheeseburger2_1} alt='' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Title className='title'>
            Compromiso. Honestidad. Responsabilidad.
          </Title>
          <Content className='content'>
            Abastecimiento seguro, entregas puntuales y atencion personalizada
            con envios a todo Mexico
          </Content>
          <div className='hero-slide'>
            <div className='slide-image'>
              <Image src={cheeseburger3} alt='' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

// import React, { useState } from 'react';

// import 'swiper/css';
// import Swiper from 'react-id-swiper';

// import grilled from '../../images/grilled.jpg';
// import cheeseburger2 from '../../images/cheeseburger2.jpg';
// import cheeseburger3 from '../../images/cheeseburger3.jpg';

// //slider config options
// const HeroSliderConfigs = {
//   containerClass: 'swiper-container hero-slider',
//   parallax: true,
//   centeredSlides: true,
//   speed: 500,
//   effect: 'slide',
// };

// //slider component
// export const HeroSlider = () => {
//   const [parallaxSwiper, setParallaxSwiper] = useState(null);
//   const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
//   const parallaxOpacity = 0.5;

//   return (
//     <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
//       <div className='hero-slide'>
//         <div
//           className='slide-image'
//           data-swiper-parallax={parallaxAmount}
//           data-swiper-parallax-opacity={parallaxOpacity}
//         >
//           <Image src={grilled} alt='grilled' />
//         </div>
//       </div>
//     </Swiper>
//   );
// };
