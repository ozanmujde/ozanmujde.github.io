import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Wisdomizer from "./pages/Wisdomizer";
import Sorting from "./pages/Sorting";
function App() {
  return (
    <div style={{width:'100%'}}>
      <main style={{width:'100%'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wisdomizer" element={<Wisdomizer />} />
          <Route path="/sorting" element={<Sorting />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
