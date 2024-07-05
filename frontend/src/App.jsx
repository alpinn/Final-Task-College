import react from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/forms/LoginForm";
import Homepage from "./pages/Homepage";
import Register from "./components/forms/RegisterForm";
import ForgotPassword from "./components/forms/ForgotPasswordForm";
import About from "./pages/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Homepage />}
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
            path="/lupapassword"
            element={<ForgotPassword />}
          />
          <Route
            path="/about-us"
            element={<About />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
