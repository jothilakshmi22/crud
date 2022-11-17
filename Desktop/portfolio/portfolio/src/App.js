import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Interest from "./Interest";
import MainBanner from "./MainBanner";
import NavBar from "./NavBar";
import Projects from "./Projects";

import Skillset from "./Skillset";

function App() {
  return (
    <div className="w-100">
      <NavBar />
      <MainBanner />
      <About />

      <Skillset />
      <Projects />
      <Interest />
      <Contact />
    </div>
  );
}

export default App;
