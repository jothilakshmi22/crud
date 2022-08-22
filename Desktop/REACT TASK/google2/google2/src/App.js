import "./App.css";
import Products from "./Products";
import About from "./spicer/About";
import Conduct from "./spicer/Conduct";
import Home from "./spicer/Home";
import Navbarr from "./spicer/Navbarr";

function App() {
  return (
    <>
      <Navbarr />
      <Home />
      <About />
      <Products />
      <Conduct />
    </>
  );
}

export default App;
