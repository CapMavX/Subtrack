import React from "react"; 

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/homepage'
import Dashboard from "./pages/Dashboard";

function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/user" element={<Dashboard/>}/>
      </Routes>
  
      
      </BrowserRouter>

    </div>
  )
}

export default App
