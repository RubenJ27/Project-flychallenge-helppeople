import { createBrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import { NotFount, Login, LoginUsuarios } from "../Components";
import '../App.css'

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginUsuarios />,
    errorElement: <NotFount />
  },
  {
    path: "/createUsers/",
    element: <Login />,
    errorElement: <NotFount />
  }
]);