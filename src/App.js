import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeScreen from './Screens/HomeScreen';
import About from './Screens/About';
import NotFound from './Screens/NotFound';
import Contact from './Screens/Contact';
import MoviesPage from './Screens/Movies';
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Profile from './Screens/DashBoard/Profile';
function App() {
  AOS.init()
  return (
    <Routes >
      <Route path ='/' element = {<HomeScreen/>} />
      <Route path ='/about-us' element = {<About/>} />
      <Route path ='/contact-us' element = {<Contact/>} />
      <Route path ='/movies' element = {<MoviesPage/>} />
      <Route path ='/movies/:id' element = {<SingleMovie/>} />
      <Route path ='/watch/:id' element = {<WatchPage/>} />
      <Route path ='/login' element = {<Login/>} />
      <Route path ='/register' element = {<Register/>} />
      <Route path ='/profile' element = {<Profile/>} />
      <Route path ='/*' element = {<NotFound/>} />

    </Routes>
  );
}

export default App;
