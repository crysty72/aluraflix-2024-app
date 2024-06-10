// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { datos } from '../data/archivos_iniciales';

const MainSection = styled.section`
  padding: 20px;
  background-image:url(https://tse3.mm.bing.net/th?id=OIP.EJpQNxz_tZxxESpBQTElKAHaEK&pid=Api&P=0&h=180);
  background-repeat:no-repeat;
  background-size:cover;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #0b0b0b;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #0c0c0c;
  border-radius: 5px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #090909;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 5px 0 0;
  background-color: #185ddc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const NewVideo = () => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState(datos.categorias.length > 0 ? datos.categorias[0].nombre : '');
  const [urlImagen, setUrlImagen] = useState('');
  const [urlVideo, setUrlVideo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSave = () => {
    // Aquí puedes agregar la lógica para guardar el nuevo video
    const nuevoVideo = {
      id: datos.videos.length + 1,
      nombre,
      categoria,
      urlImagen,
      urlVideo,
      descripcion
    };

    // Por ahora, solo imprimirá el nuevo video en la consola
    console.log('Nuevo video:', nuevoVideo);
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
