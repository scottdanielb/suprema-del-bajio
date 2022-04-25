import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroContentText,
  HeroTitle,
  HeroSubtitle,
} from './hero-section-nosotros.styled';

const HeadSection = ({ headline, description, img }) => {
  return (
    <>
      <HeroContainer src={img}>
        <HeroContent>
          <HeroContentText>
            <HeroTitle>{headline}</HeroTitle>
            <HeroSubtitle>{description}</HeroSubtitle>
          </HeroContentText>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeadSection;
