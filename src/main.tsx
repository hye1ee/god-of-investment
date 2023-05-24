import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import Layout from "./pages/components/Layout";
import Signin from "./pages/signin/index";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import Issues from "./pages/issues/index";
import Search from "./pages/search/index";
import Simulation from "./pages/simulation/index";

import { Provider } from "react-redux";
import { store } from "./states/store";
import Signup from "./pages/signup";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/simulation" element={<Simulation />} />

            <Route path="/search" element={<Search />} />
          </Route>

          <Route path="/*" element={<Navigate replace to="/signin" />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
