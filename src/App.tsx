import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/project/0">project</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;