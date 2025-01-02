import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Импортируйте компоненты страниц
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
