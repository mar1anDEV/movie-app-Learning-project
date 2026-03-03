import {Suspense,lazy} from 'react';
import LoaderContainer from './components/loaderComponent/LoaderContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';
import { AppContext } from './context/AppContext';

  const HomePage = lazy(()=>import('./pages/home/HomePage'))
  const MoviesPage = lazy(()=>import('./pages/page-movie-genre/MoviesPage'))
  const SeriesPage = lazy(()=>import('./pages/page-series-genre/SeriesPage'))

function App() {

  

  return (
    <AppContext.Provider value={'Logo'}>
      <BrowserRouter>
      <Suspense fallback={<LoaderContainer/>}>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage/>}/>

          {/* Movies Category Routes */}
          <Route path='/movies' element={<MoviesPage/>}/>
          {/* Movies Genre Routes - Dynamic */}
          <Route path='/movies/:params' element={<MoviesPage/>}/>

          {/* TV Shows Main Route */}
          <Route path='/tv-shows' element={<SeriesPage/>} />

          {/* TV Shows Genre Routes - Dynamic */}
          <Route path='/tv-shows/:params' element={<SeriesPage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
