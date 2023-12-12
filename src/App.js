import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Last from './components/Last'
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Projects />} path="/project" />
        <Route element={<Skill />} path="/skill" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Last />} path="/footer" />
      </Routes>
    </Router>
  );
}

export default App;
