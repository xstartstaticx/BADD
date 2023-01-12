import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ContextProvider from "./components/Context";
import EditUser from "./components/EditUser";
import Overview from "./components/Overview";
import AddUser from "./components/AddUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/overview/:id" element={<Overview />} />
        <Route path="/dashboard/users/edit/:id" element={<EditUser />} />
        <Route path="/adduser/:id" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
