import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
// import landing from './pages/landing';
import LandingPage from './pages/landing';
import HomePageGamer from './pages/HomePageGamer'
import ProfilePage from './pages/ProfilePage';
import HomePageHost from './pages/HomePageHost'
import HomePageOrg from './pages/HomePageOrg';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profilePage' element={<ProfilePage />} />
        <Route path='/homepagehost' element={<HomePageHost />} />
        <Route path='/homepageorg' element={<HomePageOrg />} />
        <Route path='/homepagegamer' element={<HomePageGamer />} />

        {/* <Route element={<PrivateRoute />}> */}
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/homepagegamer' element={<HomePageGamer/>} />
      </Routes>
    </BrowserRouter>
  );
}
