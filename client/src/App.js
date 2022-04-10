import {React, useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  console.log(window.localStorage.getItem("isAuthenticated"));
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} /> 
          <Route path='/signup' element={<Signup/>} /> 
          <Route path='/' element={ window.localStorage.getItem("isAuthenticated")==="true"? <Home/>:<Navigate to="/login" />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
