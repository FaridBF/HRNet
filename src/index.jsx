import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import EmployeesList from './features/EmployeesList/EmployeesList';
import Error404 from './features/Error404/Error404';
import Home from './features/Home/Home';

import { CreateEmployeeProvider } from './context/CreateEmployeeFormContext';

import './index.css';

library.add(faXmark);

const routes = createBrowserRouter([
  { errorElement: <Error404 /> },
  {
    element: <Home />,
    path: '/'
  },
  {
    element: <EmployeesList />,
    path: '/employees'
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreateEmployeeProvider>
      <RouterProvider router={routes} />
    </CreateEmployeeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
