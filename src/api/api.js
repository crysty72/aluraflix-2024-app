// src/services/videoService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Cambia esto si `json-server` está en otro puerto
});

export const getVideos = async () => {
  try {
    const response = await api.get('/videos');
    return response.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};

export const updateVideo = async (video) => {
  try {
    const response = await api.put(`/videos/${video.id}`, video);
    return response.data;
  } catch (error) {
    console.error(`Error updating video ${video.id}:`, error);
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const response = await api.delete(`/videos/${videoId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting video ${videoId}:`, error);
    throw error;
  }
};

export const addVideo = async (newVideo) => {
  try {
    const response = await api.post('/videos', newVideo);
    return response.data;
  } catch (error) {
    console.error('Error adding new video:', error);
    throw error;
  }
};
