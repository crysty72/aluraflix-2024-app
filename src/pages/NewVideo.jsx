// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import { datos } from '../data/archivos_iniciales';

const MainSection = styled.section`
  padding: 20px  ;
  background-image:url(https://tse2.mm.bing.net/th?id=OIP.U4ex9V5XdYC_Cw7FBmEakgHaE8&pid=Api&P=0&h=180);
  background-repeat: no-repeat;
  background-size: cover;
  
 
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align:center;
`;

const Input = styled.input`
  display: block;
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #0b0b0b;
  border-radius: 5px;
  margin-left: 20px;
 
`;

const TextArea = styled.textarea`
  display: block;
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #0c0c0c;
  border-radius: 5px;
  margin-left: 20px;
`;

const Select = styled.select`
  display: block;
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #090909;
  border-radius: 5px;
  margin-left: 20px;
`;

const Button = styled.button`
  padding: 20px 20px;
  margin: 10px 5px 0 0;
  background-color: #185ddc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  margin-left: 20px;
`;

const NewVideo = () => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState(datos.categorias.length > 0 ? datos.categorias[0].nombre : '');
  const [urlImagen, setUrlImagen] = useState('');
  const [urlVideo, setUrlVideo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSave = () => {
    const nuevoVideo = {
      nombre,
      categoria,
      urlImagen,
      urlVideo,
      descripcion
    };

    axios.post('http://localhost:3000/videos', nuevoVideo)
      .then(response => {
        console.log('Nuevo video agregado:', response.data);
        // Lógica para actualizar el estado de videos en Home
        // No olvides actualizar el estado de los videos en Home
      })
      .catch(error => {
        console.error('Error al agregar nuevo video:', error);
      });

    // Limpia los campos después de guardar
    handleClear();
  };

  const handleClear = () => {
    setNombre('');
    setCategoria(datos.categorias.length > 0 ? datos.categorias[0].nombre : '');
    setUrlImagen('');
    setUrlVideo('');
    setDescripcion('');
  };

  return (
    <div>
      <Header />
      <MainSection>
        <Title>Nuevo Video</Title>
        <Input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Título del video"
        />
        <Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          {datos.categorias.map(cat => (
            <option key={cat.id} value={cat.nombre}>{cat.nombre}</option>
          ))}
        </Select>
        <Input
          type="text"
          value={urlImagen}
          onChange={(e) => setUrlImagen(e.target.value)}
          placeholder="URL de la imagen"
        />
        <Input
          type="text"
          value={urlVideo}
          onChange={(e) => setUrlVideo(e.target.value)}
          placeholder="URL del video"
        />
        <TextArea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción del video"
        />
        <Button onClick={handleSave}>Guardar</Button>
        <Button onClick={handleClear}>Limpiar</Button>
      </MainSection>
      <Footer />
    </div>
  );
};

export default NewVideo;
