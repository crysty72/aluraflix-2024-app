/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import CategorySection from '../components/CategorySection/CategorySection';
import Footer from '../components/Footer/Footer';
import VideoModal from '../components/Modal/VideoModal';
import { getVideos, updateVideo, deleteVideo, addVideo } from '../api/api';
import { datos } from '../data/archivos_iniciales';


const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetchedVideos = await getVideos();
      setVideos(fetchedVideos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalIsOpen(false);
  };

  const handleDelete = async (videoToDelete) => {
    try {
      await deleteVideo(videoToDelete.id);
      setVideos(videos.filter(video => video.id !== videoToDelete.id));
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  const handleSave = async (updatedVideo) => {
    try {
      const response = await updateVideo(updatedVideo);
      setVideos(videos.map(video => video.id === updatedVideo.id ? response : video));
      closeModal();
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  const addNewVideo = async (newVideo) => {
    try {
      const response = await addVideo(newVideo);
      setVideos([...videos, response]);
    } catch (error) {
      console.error('Error adding new video:', error);
    }
  };

  const organizeVideosByCategory = (videos) => {
    const organizedVideos = {};
    datos.categorias.forEach(cat => {
      organizedVideos[cat.nombre] = videos.filter(video => video.categoria === cat.nombre);
    });
    return organizedVideos;
  };

  const organizedVideos = organizeVideosByCategory(videos);

  return (
    <div>
      <Header />
      <Banner images={videos.map(video => video.urlImagen)} />
      {Object.entries(organizedVideos).map(([category, categoryVideos]) => (
        <CategorySection
          key={category}
          title={category}
          videos={categoryVideos}
          onEditClick={openModal}
          onDeleteClick={handleDelete}
        />
      ))}
      <Footer />
      {selectedVideo && (
        <VideoModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          video={selectedVideo}
          onSave={handleSave}
          onAdd={addNewVideo}
        />
      )}
    </div>
  );
};

export default Home;
