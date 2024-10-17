import { Routes, Route } from 'react-router-dom';
import './styles.css';

import NavBar from './components/ui/layout/NavBar';

import Home from './components/pages/Home';
import Venue from './components/pages/Venue';

function App() {
  return (
    <div className='bg-skyline flex-col px-8 bg-cover bg-center h-screen overflow-auto'>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/venue' element={<Venue />} />
      </Routes>
    </div>
  );
};

export default App;
