import React from 'react';
import { headerInfo, nosotrosObjOne } from './data';
import InfoSection from '../../components/info-section/info-section.component';
import HeadSection from '../../components/hero-section-nosotros/hero-section-nosotros.component';

const Nosotros = () => {
  return (
    <>
      <HeadSection {...headerInfo} />
      <InfoSection {...nosotrosObjOne} />
    </>
  );
};

export default Nosotros;
