import React from "react";
import { Header } from "./features/header/Header";
import  Login  from "./features/login/Login";
import User from "./features/user/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./features/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
