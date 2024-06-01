import React from 'react';
import About from './Pages/About';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from './Pages/BlogPage';
import Login  from './Pages/Login';
import BlogDetails from './Pages/BlogDetails';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sanjay-ms-22-lakshakainsta" element={<Home/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
  </Routes>
  </BrowserRouter>
  );
};

export default App;
