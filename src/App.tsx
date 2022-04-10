import React from "react";
import GlobalStyle from "styles/GlobalStyle";
import { Mobile, PC } from "./styles/Mediaquery";
import Login from "./components/Login";
import Main from "./components/Main";
import { initializeApp } from "service/firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import NickName from "./components/NickName";
import styled from "styled-components";
function App() {
  console.log(initializeApp);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/nickname" element={<NickName />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
