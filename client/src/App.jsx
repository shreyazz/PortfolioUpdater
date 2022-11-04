import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AddProjects from "./AddProjects";
import GetProjects from "./GetProjects";
const App = () => {
  
  return (
    <>

      <Routes>
        <Route path="/" element={<AddProjects/>}/>
        <Route path="/getProjects" element={<GetProjects/>}/>
      </Routes>
    </>
  );
};

export default App;
