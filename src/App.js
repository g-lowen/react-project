import "./App.css";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import { Routes, Route } from "react-router-dom";
import Contact from "../src/Views/Contact";
import Home from "../src/Views/Home";
import Rules from "../src/Views/Rules";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-main">
        <Routes>
          <Route element={<Contact />} path="/contact" />
          <Route element={<Home />} index />
          <Route element={<Rules />} path="/rules" />
        </Routes>
      </main>
      <Footer value={"Footer (actually a prop)"} />
    </div>
  );
}

export default App;
