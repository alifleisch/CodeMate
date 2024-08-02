import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import About from '@app/pages/about/AboutPage';
import DiscoverUsers from '@app/pages/socialNetwork/DiscoverUsersPage';
import Groups from '@app/pages/groups/GroupsPage';
import TopicPage from '@app/pages/groups/TopicPage';
import PostsFeed from '@app/pages/feed/PostsFeed';
import Messaging from '@app/pages/messenger/MessagingPage';
import UserProfileView from '@app/pages/profile/UserProfileView';
import Login from '@app/pages/login/LoginPage';
import Register from '@app/pages/register/RegisterPage';
import Navbar from '@app/components/Navbar';
import { Paths } from './Paths';
import Profile from '@app/pages/profile/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid bg-dark text-white min-vh-100">
        <Routes>
          <Route path={Paths.Root} element={<About />} />
          <Route path={Paths.About} element={<About />} />
          <Route path={Paths.DiscoverUsers} element={<DiscoverUsers />} />
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