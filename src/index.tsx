import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import { RecoilRoot } from "recoil";

const reactNode = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(reactNode).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
