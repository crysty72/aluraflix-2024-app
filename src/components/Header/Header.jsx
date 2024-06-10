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

// Estilo para el logo
const LogoImage = styled.img`
  height: 50px; // Ajusta el tamaño según tus necesidades
  width: auto;
`;

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
      {/* Importa tu logo y ajusta la ruta según dónde lo hayas guardado */}
      <LogoImage src="/assets/img/LogoAlura.png" alt="Logo Alura" />
      <nav>
        {/* Agrega exact para asegurar que la coincidencia de la ruta sea exacta */}
        <NavButton to="/" exact>Home</NavButton>
        {/* Asegúrate de que la ruta coincida exactamente con la ruta de tu componente NewVideo */}
        <NavButton to="/new-video">Nuevo Video</NavButton>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
