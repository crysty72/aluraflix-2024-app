// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import CategorySection from '../components/CategorySection/CategorySection';
import Footer from '../components/Footer/Footer';
import VideoModal from '../components/Modal/VideoModal';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const frontendVideos = videos.filter(video => video.categoria === 'Front End');
  const backendVideos = videos.filter(video => video.categoria === 'Back End');
  const innovationVideos = videos.filter(video => video.categoria === 'Innovación y Gestión');

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalIsOpen(false);
  };

  const handleDelete = (videoToDelete) => {
    axios.delete(`http://localhost:3000/videos/${videoToDelete.id}`)
      // eslint-disable-next-line no-unused-vars
      .then(response => {
        setVideos(videos.filter(video => video.id !== videoToDelete.id));
      })
      .catch(error => {
        console.error('Error deleting video:', error);
      });
  };

  const handleSave = (updatedVideo) => {
    axios.put(`http://localhost:3000/videos/${updatedVideo.id}`, updatedVideo)
      // eslint-disable-next-line no-unused-vars
      .then(response => {
        setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
        closeModal();
      })
      .catch(error => {
        console.error('Error updating video:', error);
      });
  };

  return (
    <div>
      <Header />
      <Banner images={videos.map(video => video.urlImagen)} />
      <CategorySection title="Front End" videos={frontendVideos} onEditClick={openModal} onDeleteClick={handleDelete} />
      <CategorySection title="Back End" videos={backendVideos} onEditClick={openModal} onDeleteClick={handleDelete} />
      <CategorySection title="Innovación y Gestión" videos={innovationVideos} onEditClick={openModal} onDeleteClick={handleDelete} />
      <Footer />
      {selectedVideo && (
        <VideoModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          video={selectedVideo}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Home;
