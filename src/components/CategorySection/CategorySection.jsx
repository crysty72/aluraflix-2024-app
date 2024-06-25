/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SectionWrapper = styled.section`
  padding: 20px;
  background-color: ${(props) => props.backgroundColor || '#add8e6'};
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
  margin-left: 20px;
`;

const VideoImage = styled.img`
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

const VideoTitle = styled.h3`
  font-size: 1rem;
  text-align: center;
`;

const CategorySection = ({ title, videos, onEditClick, onDeleteClick, backgroundColor }) => {
  return (
    <SectionWrapper backgroundColor={backgroundColor}>
      <SectionTitle>{title}</SectionTitle>
      <VideosWrapper>
        {videos.map((video, index) => (
          <VideoWrapper key={index}>
            {/* Wrap the image with Link and pass the video route as the to prop */}
            <Link to={`/video/${video.id}`}>
              <VideoImage src={video.urlImagen} alt={video.nombre} />
            </Link>
            <VideoTitle>{video.nombre}</VideoTitle>
            <button onClick={() => onEditClick(video)}>Editar</button>
            <button onClick={() => onDeleteClick(video)}>Borrar</button>
          </VideoWrapper>
        ))}
      </VideosWrapper>
    </SectionWrapper>
  );
};

export default CategorySection;
