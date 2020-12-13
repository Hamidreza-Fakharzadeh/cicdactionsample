
import './App.css';
import Intro from './components/Intro';
import Nav from './components/Nav.js';
import About from "./components/About";

function App() {
  return (
    <div className="container">
      <Nav/>
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
