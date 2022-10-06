// import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Polymer/About";
import Blog from "./Polymer/Blog";
import Login from "./Polymer/Login";
import NavBar from "./Polymer/NavBar";
import Polymer from "./Polymer/Polymer";
import Pricing from "./Polymer/Pricing";
function App() {
  return (
    <>
      <Router>
        {/* <Polymer /> */}
        <NavBar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Polymer />} />

          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/pricing" element={<Pricing />} />
          {/* {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
