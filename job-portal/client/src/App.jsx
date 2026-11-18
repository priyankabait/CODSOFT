import React from "react";

import {

  BrowserRouter,

  Routes,

  Route

} from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Jobs from "./pages/Jobs";

import Dashboard from "./pages/Dashboard";

import JobDetail from "./pages/JobDetail";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
         path="/dashboard"
         element={<Dashboard />}
        />

        <Route
          path="/jobs/:id"
         element={<JobDetail />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;