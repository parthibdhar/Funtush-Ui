import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import About from './Screens/About';
import NotFound from './Screens/NotFound';
import Contact from './Screens/Contact';
import MoviesPage from './Screens/Movies';
function App() {
  return (
    <Routes >
      <Route path ='/' element = {<HomeScreen/>} />
      <Route path ='/about-us' element = {<About/>} />
      <Route path ='/contact-us' element = {<Contact/>} />
      <Route path ='/movies' element = {<MoviesPage/>} />
      <Route path ='/*' element = {<NotFound/>} />

    </Routes>
  );
}

export default App;
