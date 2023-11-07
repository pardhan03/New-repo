import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Applayout from './App.js';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './About.js';
import Contact from './Contact.js';
import Error from './Error.js';
import Body from './Body.js';
import RestaurantMenu from './RestaurantMenu.js';
import Grocery from './Grocery.js'


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
          path:"/grocery",
          element:<Grocery/>,
      },
      {
          path:"/restaurant/:resid",
          element:<RestaurantMenu/>,
      }
    ],
    errorElement:<Error/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
