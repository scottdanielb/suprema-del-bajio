import React from 'react';
import HeadSectionContact from '../../components/hero-section-contacto/hero-section-contacto.component';
import { InputForm } from '../../components/input-form/input-form.component';
import { headerInfo } from './data';

const Contacto = () => {
  return (
    <>
      <HeadSectionContact {...headerInfo} />
      <div className='container mx-auto p-5 '>
        <div className='row justify-content-center'>
          <div className='"col align-self-center"'>
            <InputForm></InputForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
