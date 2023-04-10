import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import V from './Components/v/V';
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home'

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
        path:'s',
        element:<V></V>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)