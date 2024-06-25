// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-image: url(https://images.alphacoders.com/101/thumb-1920-1019517.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  
`



const NavButton = styled(NavLink)`
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #2166f1;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  color: black;
 
  &.active {
    background-color: #2166f1;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      {/* Asegúrate de que la ruta sea correcta */}
      <LogoImage src="/assets/img/LogoAlura.png" alt="Logo Alura" />
      <nav>
        <NavButton to="/" end>Home</NavButton>
        <NavButton to="/new-video">Nuevo Video</NavButton>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
