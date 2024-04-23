import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import EmployeesList from './features/EmployeesList/EmployeesList';
import Error404 from './features/Error404/Error404';
import Home from './features/Home/Home';

import { CreateEmployeeProvider } from './context/CreateEmployeeFormContext';

import './index.min.scss';

library.add(faXmark);

/**
 * Définit les routes de l'application et les éléments correspondants à afficher pour chaque route.
 */
const App = () => (
  <CreateEmployeeProvider>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/employees' element={<EmployeesList />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  </CreateEmployeeProvider>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found");
}
