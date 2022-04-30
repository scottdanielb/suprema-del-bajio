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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 35px;
  font-weight: 700;
  margin-top: inherit;
`;

export const HeroSubtitle = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 100;
  margin-top: inherit;
`;
