/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 20px;
  background-color: ${(props) => props.backgroundColor || '#add8e6'}; /* Celeste */
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const VideosWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const VideoWrapper = styled.div`
  flex: 2;
  max-width: 400px;
  position: relative;
  margin-left:20px;
`;

const VideoImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const VideoTitle = styled.h3`
  font-size: 1rem;
  text-align: center;
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${(props) => props.bgColor || 'white'};
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  color: white;
`;

const CategorySection = ({ title, videos, onEditClick, onDeleteClick, backgroundColor }) => {
  return (
    <SectionWrapper backgroundColor={backgroundColor}>
      <SectionTitle>{title}</SectionTitle>
      <VideosWrapper>
        {videos.map((video, index) => (
          <VideoWrapper key={index}>
            <VideoImage src={video.urlImagen} alt={video.nombre} />
            <VideoTitle>{video.nombre}</VideoTitle>
            <Button bgColor="#ffa500" onClick={() => onEditClick(video)}>Editar</Button>
            <Button bgColor="#ff0000" onClick={() => onDeleteClick(video)}>Borrar</Button>
          </VideoWrapper>
        ))}
      </VideosWrapper>
    </SectionWrapper>
  );
};

export default CategorySection;
