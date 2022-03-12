import { Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/login" exact element={<LoginPage/>} />
      <Route path="/about" exact element={<AboutPage/>} />
      <Route path="/register" exact element={<RegisterPage/>} />
    </Routes>
  );
}

export default App;
