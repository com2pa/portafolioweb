import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../page/Home';
import About from '../page/About';
import Project from '../page/Project';
import Resumen from '../page/Resumen';

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/mi-app/'
          element={<Home />}
        />
        <Route
          path='/mi-app/conoceme'
          element={<About />}
        />
        <Route
          path='/mi-app/proyectos'
          element={<Project />}
        />

        <Route
          path='/mi-app/resumen'
          element={<Resumen />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
