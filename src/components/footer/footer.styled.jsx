import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: rgba(10, 10, 10, 1);
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubheading = styled.p`
  font-family: 'Raleway', sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  font-family: 'Raleway', sans-serif;
  margin-bottom: 24px;
  font-size: 20px;
`;

// export const SocialMedia = styled.section`
//   max-width: 1000px;
//   width: 100%;
// `;

// export const SocialMediaWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 90%;
//   max-width: 100px;
//   margin: 40px auto 0 auto;

//   @media screen and (max-width: 520px) {
//     flex-direction: column;
//   }
// `;
// export const SocialLogo = styled(Link)`
//   color: #fff;
//   justify-self: start;
//   cursor: pointer;
//   text-decoration: none;
//   font-size: 2rem;
//   display: flex;
//   align-items: center;
//   margin-bottom: 16px;
// `;
// export const SocialIcon = styled.div`
//   margin-right: 10px;
// `;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  align-items: center;
`;
// export const SocialIcons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 240px;
// `;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
