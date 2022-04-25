import styled from 'styled-components';
import grilled from '../../images/grilled.jpg';
import cheeseburger2 from '../../images/cheeseburger2.jpg';
import cheeseburger3 from '../../images/cheeseburger3.jpg';

export const HeroContainer = styled.div`
  background-image: url(${grilled});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 85vh;

  @media only screen and (max-width: 768px) {
    height: 65vh;
  }
`;

export const HeroContainer2 = styled.div`
  background-image: url(${cheeseburger2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 85vh;

  @media only screen and (max-width: 768px) {
    height: 65vh;
  }
`;

export const HeroContainer3 = styled.div`
  background-image: url(${cheeseburger3});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 85vh;

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
  justify-content: left;
  align-items: left;
  text-align: left;
  color: #fff;

  @media only screen and (max-width: 768px) {
    text-align: start;
    height: 55%;
  }
`;

export const HeroContentText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 375px) {
    position: absolute;
    align-items: flex-start;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(1rem, 4vw, 4rem);
  font-weight: 700;
  min-width: 528px;
  max-width: 528px;
  margin-top: inherit;
`;

export const HeroSubtitle = styled.h2`
  font-size: clamp(1rem, 2vw, 4rem);
  font-weight: 500;
  min-width: 544px;
  white-space: normal;
  margin-top: inherit;
`;
