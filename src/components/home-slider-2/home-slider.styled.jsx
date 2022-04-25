import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 600;
  font-size: 58px;
  position: absolute;
  color: #fff;
  padding-top: 10rem;
  padding-left: 3rem;
`;

export const Content = styled.p`
  position: absolute;
  font-size: 28px;
  color: #fff;
  padding-top: 20rem;
  padding-left: 3rem;
`;

export const Image = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin: auto;
  display: block;

  @media only screen and (max-width: 1574px) {
    /* height: 80vh;
    width: 100vw; */
    /* display: fill; */
  }
`;
