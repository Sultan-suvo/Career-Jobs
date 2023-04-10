import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Components/Layout/Main';
import Home from './Components/Home/Home'
import Blog from './Components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
       path:"/",
       element:<Home></Home>,
       loader:()=> fetch('features.json')
       
      },
      {
        path:"blog",
        element:<Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
