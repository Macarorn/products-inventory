import React, { useState } from 'react'
import "./sass/app.scss"
import {  Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import InStock from './components/in_stock';
import Sold from './components/sold';
import { ShowAddProductProvider } from './context/showAddProductContext';

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <ShowAddProductProvider>
            <InStock />
          </ShowAddProductProvider>
        } />
        <Route path="/sold" element={<Sold />} />
        <Route path="/*" element={<InStock />} />
      </Routes>
    </div>
  )
}

export default App
