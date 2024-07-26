import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import About from './pages/About';
import Home from './pages/Home';
import Groups from './pages/groups/GroupsPge';
import TopicPage from './pages/groups/TopicPage';
import PostsFeed from './pages/feed/PostsFeed';
import Messaging from './pages/messenger/MessagingPage';
import UserProfileView from './pages/profile/UserProfileView';
import Login from './pages/login/LoginPage';
import Register from './pages/register/RegisterPage';
import Navbar from './components/Navbar';
import { Paths } from './Paths';
import Profile from './pages/profile/Profile';

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