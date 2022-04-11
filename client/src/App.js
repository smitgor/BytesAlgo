import {React, useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Home_candidate from "./pages/Home_candidate";
import Application from "./pages/Application";
import Candidate_list from "./pages/Candidate_list";

function App() {
  console.log(window.localStorage.getItem("isAuthenticated"));
  var role = window.localStorage.getItem("role");
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>} /> 
          <Route path='/signup' element={<Signup/>} /> 
          {role==="Recruiter" && <Route path='/' element={ window.localStorage.getItem("isAuthenticated")==="true"? <Home/>:<Navigate to="/login" />} />}
          {role==="Candidate" && <Route path='/' element={ window.localStorage.getItem("isAuthenticated")==="true"? <Home_candidate/>:<Navigate to="/login" />} />}
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/jobs/*' element={ window.localStorage.getItem("isAuthenticated")==="true"? <Application/>:<Navigate to="/login" />} />
          <Route path='/candicates/*' element={ window.localStorage.getItem("isAuthenticated")==="true"? <Candidate_list/>:<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
