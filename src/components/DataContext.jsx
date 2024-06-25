/* eslint-disable react/prop-types */
// En un archivo como context/DataContext.js
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
import { datos as initialData } from '../data/archivos_iniciales';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [datos, setDatos] = useState(initialData);

  const agregarVideo = (nuevoVideo) => {
    setDatos(prevDatos => ({
      ...prevDatos,
      videos: [...prevDatos.videos, nuevoVideo]
    }));
  };

  return (
    <DataContext.Provider value={{ datos, agregarVideo }}>
      {children}
    </DataContext.Provider>
  );
};
