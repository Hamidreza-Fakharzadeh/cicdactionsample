
import './App.css';
import Intro from './components/Intro';
import Nav from './components/Nav.js';
import About from "./components/About";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="container-fluid" id="cont-id">
      <Nav/>
      <Intro/>
      <About/>
      <Tech/>
    </div>
  );
}

export default App;
