import styled from 'styled-components';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

export const WhatsappComponent = styled(WhatsAppWidget)`
  position: relative;
  z-index: -1;
`;
