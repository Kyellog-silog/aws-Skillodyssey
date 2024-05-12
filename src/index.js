import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignupPage from './component/auth/SignupPage';
import LoginPage from './component/auth/LoginPage';
import FrontendPage from './component/landing-page/FrontendPage';
import BackendPage from './component/landing-page/BackendPage';
import FrontPage from './component/auth/FrontPage';
import Landing from './component/landing-page/Landing-Page'

import reportWebVitals from './reportWebVitals';
import{
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import LandingPage from './component/landing-page/Landing-Page';

const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'/signup',
    element:<SignupPage/>,
  },
  {
    path:'/login',
    element:<LoginPage/>,
  },
  {
    path:'/frontend',
    element:<FrontendPage/>,
  },
  {
    path:'/backend',
    element:<BackendPage/>
  },
  {
    path:'/FrontPage',
    element:<FrontPage/>
  },
  {
    path:'/Landingpage',
    element:<LandingPage/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
