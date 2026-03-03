import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import './App.css';
import About from './views/About';
import Homepage from './views/HomePage';
import MyPlants from './views/MyPlants';
import Update from './views/Update';
import Layout from './views/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true, 
        element: <Homepage />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "myPlants",
        element: <MyPlants />
      },
      {
        path: "update/:id",
        element: <Update />
      }
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;