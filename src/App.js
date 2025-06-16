import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Импортируйте компоненты страниц
import HomePage from "./pages/HomePage/HomePage"; //бул строка башкы бетти чакыргынга импорт
import LoginPage from "./pages/LoginPage/LoginPage"; //бул болос кируу страницасын чакырат
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import JobsPage from "./pages/JobsPage/JobsPage";
import JobDetailsPage from "./pages/JobsDetailsPage/JobDetailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* устундогу роут бакшы бетти чакырат  */}
          <Route path="/login" element={<LoginPage />} />
          {/* // бул болсо кируу баракчасын чакырат */}
          <Route path="/register" element={<RegisterPage />} />
          {/* // бул катталуу баракчасын чакырат */}
          <Route path="/about" element={<AboutPage />} />
          {/* // биз жонундо баркачасын чакырат */}
          <Route path="/jobs" element={<JobsPage />} />
          {/* // бардык жумуштардын баракчасы */}
          <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
