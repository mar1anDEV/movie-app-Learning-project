import { Suspense} from 'react';
import HomePage from './pages/HomePage';
import MoviesCategory from './pages/MoviesCategory';
import MoviesGenre from './pages/MoviesGenre';
import SeriesPage from './pages/SeriesPage';
import SeriesGenre from './pages/SeriesPage';
import LoaderContainer from './components/common/LoaderContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';
import { AppContext } from './context/AppContext';


function App() {

  

  return (
    <AppContext.Provider value={'Logo'}>
      <BrowserRouter>
      <Suspense fallback={<LoaderContainer/>}>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage/>}/>

          {/* Movies Category Routes */}
          <Route path='/movies' element={<MoviesCategory/>}/>
          <Route path='/movies/trending' element={<MoviesCategory/>}/>
          <Route path='/movies/top-rated' element={<MoviesCategory/>}/>
          <Route path='/movies/popular' element={<MoviesCategory/>}/>

          {/* Movies Genre Routes - Dynamic */}
          <Route path='/movies/:genre' element={<MoviesGenre/>} />

          {/* TV Shows Main Route */}
          <Route path='/tv-shows' element={<SeriesPage/>} />

          {/* TV Shows Genre Routes - Dynamic */}
          <Route path='/tv-shows/:genre' element={<SeriesGenre/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
