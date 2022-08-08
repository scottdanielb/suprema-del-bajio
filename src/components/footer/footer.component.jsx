import React from 'react';

import { FaInstagram } from 'react-icons/fa';

import {
  FooterContainer,
  FooterSubscription,
  FooterSubheading,
  FooterSubText,
  SocialIconLink,
  WebsiteRights,
} from './footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubheading>
          Disfruta de las mejores hamburgesas para todas las ocasiones
        </FooterSubheading>
        <FooterSubText>
          {' '}
          Síguenos en nuestras redes sociales
        </FooterSubText>
        <SocialIconLink
          href='https://www.instagram.com/supremadelbajio/'
          target='_blank'
          aria-label='Instagram'
        >
          <FaInstagram />
        </SocialIconLink>
      </FooterSubscription>
      <WebsiteRights>
        Derechos reservados Suprema Del Bajío 2022 ©{' '}
      </WebsiteRights>
    </FooterContainer>
  );
};

export default Footer;
