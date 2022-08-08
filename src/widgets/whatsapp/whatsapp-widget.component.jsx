import React from 'react';

import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const WhatsAppContact = () => {
  return (
    <WhatsAppWidget
      phoneNumber='524497532760'
      textReplyTime='Tiempo de respuesta aproximado: 1 hora'
      message={'¡Hola! 👋🏼 \n\nEn que puedo ayudarle?'}
      companyName='Suprema Del Bajío'
      sendButton='Enviar'
    />
  );
};

export default WhatsAppContact;
