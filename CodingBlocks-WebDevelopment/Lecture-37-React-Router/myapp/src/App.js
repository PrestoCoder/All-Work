import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav> */}

      {/* Alternatively */}
      {/* The only difference from above is that it adds a class "active" to which ever link that is clicked */}
      {/* We can then add css to class, and that class' css will get applied to the link clicked */}
      <nav>
        <NavLink className="navItem" to="/">Home</NavLink>
        <NavLink className="navItem" to="/about">About</NavLink>
        <NavLink className="navItem" to="/contact">Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
