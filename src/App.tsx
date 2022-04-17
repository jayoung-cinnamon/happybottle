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
import HbMain from "./components/HbMain";
import UpdateModal from "components/UpdateModal";
import Write from "components/Write";
import ArchiveRead from "components/ArchiveRead";
import Bottle from "components/Bottle";
import Read from "components/Read/Read";
import CreateBottle from "components/CreateBottle";
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
          <Route path="/hbmain" element={<HbMain />} />
          <Route path="/updateInfo" element={<UpdateModal />} />
          <Route path="/write" element={<Write />} />
          <Route path="/archive" element={<ArchiveRead />} />
          <Route path="/bottle" element={<Bottle />} />
          <Route path="/read" element={<Read />} />
          <Route path="/createbottle" element={<CreateBottle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
