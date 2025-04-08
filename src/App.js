import React from "react";
import { Header } from "./features/header/Header";
import  {Login}  from "./features/Login";
import User from "./features/user/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./features/footer/Footer";
import { Home } from "./features/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<User />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
