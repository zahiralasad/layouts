import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import './App.css';
import Sidebar0 from './components/sidebar0';
import Sidebar1 from './components/sidebar1';
import Test from './components/Test';

function App() {
  return (
    <BrowserRouter>
    <div className="">
      {/* <Header/> */}
      <div className="">
        {/* <Sidebar/> */}
        <div className="main p-1">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="test" element={<Test />} />
            <Route path="sidebar0" element={<Sidebar0 />} />
            <Route path="sidebar1" element={<Sidebar1 />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter >
  );
}

export default App;
