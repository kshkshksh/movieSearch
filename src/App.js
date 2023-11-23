import './App.css';
import { Routes,Route } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import Home from './pages/Home';
import HeaderPage from './components/HeaderPage';
import FooterPage from './components/FooterPage';

function App() {
  return (
    <div className="App">
      <HeaderPage/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/movies' element={<Movies></Movies>}></Route>
        <Route path='/movies/:id' element={<MovieDetail></MovieDetail>}></Route>
      </Routes>
      <FooterPage/>
    </div>
  );
}


export default App;
