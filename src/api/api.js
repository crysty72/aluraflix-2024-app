import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/videos/', // URL base para las solicitudes a la API local
});

export const getVideos = async () => {
  try {
    const response = await api.get('/'); // Obtener todos los videos
    return response.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};

export const updateVideo = async (video) => {
  try {
    const response = await api.put(`/${video.id}`, video); // Actualizar un video por su ID
    return response.data;
  } catch (error) {
    console.error(`Error updating video ${video.id}:`, error);
    throw error;
  }
};

export const deleteVideo = async (videoId) => {
  try {
    const response = await api.delete(`/${videoId}`); // Eliminar un video por su ID
    return response.data;
  } catch (error) {
    console.error(`Error deleting video ${videoId}:`, error);
    throw error;
  }
};

export const addVideo = async (newVideo) => {
  try {
    const response = await api.post('/', newVideo); // Agregar un nuevo video
    return response.data;
  } catch (error) {
    console.error('Error adding new video:', error);
    throw error;
  }
};
