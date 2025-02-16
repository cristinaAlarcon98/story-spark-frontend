import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.component";
import ResultsPage from "./pages/ResultsPage.component";
import "./styles.css"; // Ensure this is at the top of App.js



function App() {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  </Router>
  )
 
}

export default App;
