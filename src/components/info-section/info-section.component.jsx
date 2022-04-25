import React from 'react';
import { Container } from '../../globalStyles';
import {
  InfoColumn,
  InfoRow,
  InfoSec,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './info-section.styled';

const InfoSection = ({
  lightBg,
  imgStart,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
