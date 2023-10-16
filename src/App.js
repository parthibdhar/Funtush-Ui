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
import Password from './Screens/DashBoard/Password';
import FavoriteMovies from './Screens/DashBoard/FavoriteMovies';
import MoviesList from './Screens/DashBoard/Admin/MoviesList';
import DashBoard from './Screens/DashBoard/Admin/DashBoard';
import Categories from './Screens/DashBoard/Admin/Categories';
import Users from './Screens/DashBoard/Admin/Users';
import AddMovie from './Screens/DashBoard/Admin/AddMovie';
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
      <Route path ='/password' element = {<Password/>} />
      <Route path ='/favorites' element = {<FavoriteMovies/>} />
      <Route path ='/movieslist' element = {<MoviesList/>} />
      <Route path ='/dashboard' element = {<DashBoard/>} />
      <Route path ='/categories' element = {<Categories/>} />
      <Route path ='/users' element = {<Users/>} />
      <Route path ='/addmovie' element = {<AddMovie/>} />
      <Route path ='/*' element = {<NotFound/>} />  
    </Routes>
  );
}

export default App;
