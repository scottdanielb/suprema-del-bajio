import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LogoContainer,
} from './navbar.styled';

import { ReactComponent as Logo } from '../../assets/logoSuprema.svg';

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavContainer>
            <NavLogo to='/' onClick={closeMobileMenu}  >
              <Logo />
              Suprema del Bajio
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>Inicio</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/nosotros/'>Nosotros</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/productos/'>Productos</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contacto/'>Contacto</NavLinks>
              </NavItem>
            </NavMenu>
          </NavContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};
