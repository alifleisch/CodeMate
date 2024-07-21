import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import About from './pages/About';
import Home from './pages/Home';
import PostsFeed from './pages/PostsFeed';
import Groups from './pages/Groups';
import TopicPage from './pages/TopicPage';
import Messaging from './pages/messagingPage/Messaging';
import Profile from './pages/profilePage/Profile';
import UserProfileView from './pages/profilePage/UserProfileView';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { Paths } from './Paths';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid bg-dark text-white min-vh-100">
        <Routes>
          <Route path={Paths.Root} element={<About />} />
          <Route path={Paths.Home} element={<Home />} />
          <Route path={Paths.Login} element={<Login />} />
          <Route path={Paths.Register} element={<Register />} />
          <Route path={Paths.Postsfeed} element={<PostsFeed />} />
          <Route path={Paths.Profile} element={<Profile />} />
          <Route path={`${Paths.Profile}/:id`} element={<UserProfileView />} />
          <Route path={Paths.Groups} element={<Groups />} />
          <Route path={`${Paths.Groups}/:id`} element={<TopicPage />} />
          <Route path={Paths.Messaging} element={<Messaging />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;