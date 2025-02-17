import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ResultsPage from "./pages/ResultsPage";



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
