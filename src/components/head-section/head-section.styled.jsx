import styled from 'styled-components';
import ImgBg from '../../images/fourBurgers.jpg';

export const HeroContainer = styled.div`
  background-image: url(${ImgBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 55vh;

  @media only screen and (max-width: 768px) {
    height: 65vh;
  }
`;

export const HeroContent = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;

  @media only screen and (max-width: 768px) {
    text-align: start;
    height: 55%;
  }
`;

export const HeroContentText = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  @media only screen and (max-width: 375px) {
    position: absolute;
    align-items: flex-start;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(1rem, 5vw, 5rem);
  font-weight: 900;
`;

export const HeroSubtitle = styled.h2`
  font-size: clamp(2rem, 2vw, 4rem);
  font-weight: 700;
  padding-top: 1rem;
`;
