// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import { datos } from '../../data/archivos_iniciales';

Modal.setAppElement('#root');

const ModalContent = styled.div`
  padding: 20px;
  background-color: white;
  max-width: 500px;
  margin: auto;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 5px 0 0;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CloseButton = styled(Button)`
  background-color: #ff0000;
`;

const ClearButton = styled(Button)`
  background-color: #ffa500;
`;

const VideoModal = ({ isOpen, onRequestClose, video, onSave }) => {
  const [nombre, setNombre] = useState(video.nombre);
  const [categoria, setCategoria] = useState(video.categoria);
  const [urlImagen, setUrlImagen] = useState(video.urlImagen);
  const [urlVideo, setUrlVideo] = useState(video.urlVideo);
  const [descripcion, setDescripcion] = useState(video.descripcion);

  useEffect(() => {
    setNombre(video.nombre);
    setCategoria(video.categoria);
    setUrlImagen(video.urlImagen);
    setUrlVideo(video.urlVideo);
    setDescripcion(video.descripcion);
  }, [video]);

  const handleSave = () => {
    const updatedVideo = {
      ...video,
      nombre,
      categoria,
      urlImagen,
      urlVideo,
      descripcion
    };
    onSave(updatedVideo);
    onRequestClose();
  };

  const handleClear = () => {
    setNombre('');
    setCategoria(datos.categorias[0].nombre);
    setUrlImagen('');
    setUrlVideo('');
    setDescripcion('');
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <ModalContent>
        <Title>Editar Card</Title>
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
        <ClearButton onClick={handleClear}>Limpiar</ClearButton>
        <CloseButton onClick={onRequestClose}>Cerrar</CloseButton>
      </ModalContent>
    </Modal>
  );
};

VideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  video: PropTypes.shape({
    nombre: PropTypes.string,
    categoria: PropTypes.string,
    urlImagen: PropTypes.string,
    urlVideo: PropTypes.string,
    descripcion: PropTypes.string
  }).isRequired,
  onSave: PropTypes.func.isRequired
};

export default VideoModal;
