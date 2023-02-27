import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import Header from "./pages/components/Header";
import BodyLayout from "./pages/components/BodyLayout";
import Login from "./pages/login/index";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import Issues from "./pages/issues/index";
import Search from "./pages/search/index";
import Simulation from "./pages/simulation/index";

import { Provider } from "react-redux";
import { store } from "./states/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <BodyLayout>
        <Provider store={store}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/search" element={<Search />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/*" element={<Navigate replace to="/home" />} />
          </Routes>
        </Provider>
      </BodyLayout>
    </BrowserRouter>
  </React.StrictMode>
);
