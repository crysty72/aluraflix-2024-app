// Importaciones de React y React Router
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewVideo from './pages/NewVideo';

// Componente principal de la aplicación
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-video" element={<NewVideo />} />
      </Routes>
    </Router>
  );
};

export default App;
