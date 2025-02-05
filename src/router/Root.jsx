import {BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import About from '../page/About';
import Project from '../page/Project';
import Resumen from '../page/Resumen';

export const Root = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/conoceme'
          element={<About />}
        />
        <Route
          path='/proyectos'
          element={<Project />}
        />

        <Route
          path='/resumen'
          element={<Resumen />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
