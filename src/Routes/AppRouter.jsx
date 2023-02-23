
import Login from './Components/Login'
import './App.css'
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'

import { NotFount, Login, LoginUsuarios } from "../pages";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFount />
  },
  {
    path: "/createUsers/",
    element: <LoginUsuarios />,
    errorElement: <NotFount />
  }
]);