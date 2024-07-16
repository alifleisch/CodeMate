import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Messaging from './pages/Messaging';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-dark text-white min-vh-100">
        <Routes>
          <Route path="/pages/home" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/register" element={<Register />} />
          <Route path="/pages/profile" element={<Profile />} />
          <Route path="/pages/projects" element={<Projects />} />
          <Route path="/pages/messaging" element={<Messaging />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;