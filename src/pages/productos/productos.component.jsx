import React from 'react';
import {
  headerInfo,
  productosObjOne,
  productosObjTwo,
  productosObjThree,
  productosObjFour,
} from './data';
import InfoSection from '../../components/info-section/info-section.component';
import HeadSection from '../../components/head-section/head-section.component';

const Productos = () => {
  return (
    <>
      <HeadSection {...headerInfo} />
      <InfoSection {...productosObjOne} />
      <InfoSection {...productosObjTwo} />
      <InfoSection {...productosObjThree} />
      <InfoSection {...productosObjFour} />
    </>
  );
};

export default Productos;
