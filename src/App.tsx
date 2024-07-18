import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/App.scss';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/profile/Profile';
import Projects from './pages/Projects';
import Messaging from './pages/Messaging';
import Navbar from './components/Navbar';
import PostsFeed from './pages/PostsFeed';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid bg-dark text-white min-vh-100">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/pages/home" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/login" element={<Login />} />
          <Route path="/pages/register" element={<Register />} />
          <Route path="/pages/postsfeed" element={<PostsFeed />} />
          <Route path="/pages/profile" element={<Profile />} />
          <Route path="/pages/projects" element={<Projects />} />
          <Route path="/pages/messaging" element={<Messaging />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;