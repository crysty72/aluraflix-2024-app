// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 20px;
  text-align: center;
`;

// Estilo para el logo
const LogoImage = styled.img`
  height: 50px; // Ajusta el tamaño según tus necesidades
  width: auto;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      {/* Importa tu logo y ajusta la ruta según dónde lo hayas guardado */}
      <LogoImage src="/public/assets/img/LogoAlura.png" alt="Logo de la empresa" />
      <p>Todos los derechos reservados &copy; 2024</p>
      <p>Desarrollado por Cristina Carrizo</p>
    </FooterWrapper>
  );
};

export default Footer;
