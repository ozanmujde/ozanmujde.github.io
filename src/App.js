import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Wisdomizer from "./pages/Wisdomizer";
function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wisdomizer" element={<Wisdomizer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
