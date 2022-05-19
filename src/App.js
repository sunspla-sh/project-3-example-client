import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProjectPage from "./pages/ProjectPage";

import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/signup" element={ <IsAnon><SignupPage /></IsAnon> } />
        <Route path="/login" element={ <IsAnon><LoginPage /></IsAnon> }  />
        <Route path="/projects" element={ <IsPrivate> <ProjectPage /> </IsPrivate> } />
      </Routes>
    </div>
  );
}

export default App;
