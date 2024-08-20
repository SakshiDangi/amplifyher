import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Consultation from "./pages/Consultation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Tracking from "./pages/Tracking";
import Footer from "./components/Footer";

const App = () => {

  return (
    <BrowserRouter>
    <div>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;