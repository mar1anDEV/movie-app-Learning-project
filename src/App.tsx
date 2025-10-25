import { Suspense} from 'react';
import HomePage from './pages/HomePage';
import MoviesCategory from './pages/MoviesCategory';
import MoviesGenre from './pages/MoviesGenre'
import SeriesPage from './pages/SeriesPage';
import LoaderContainer from './components/common/LoaderContainer';
import Navigation from './components/layout/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';



function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderContainer/>}>
        <Navigation />
        <Routes>
          {/* Routes */}
          <Route path="/" element={<HomePage/>}/>
          <Route path='/movies' element={<MoviesCategory/>}></Route>
          <Route path='/movies/trending' element={<MoviesCategory/>}></Route>
          <Route path='/movies/top-rated' element={<MoviesCategory/>}></Route>
          <Route path='/movies/popular' element={<MoviesCategory/>}></Route>

          {/* Genre routes */}
          <Route path='/movies/genre/:genreName' element={<MoviesGenre/>} />
  
        {/* TV Shows */}
        <Route path='/series' element={<SeriesPage/>} />

          <Route path=''></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
