import { Routes, Route } from 'react-router-dom';
import './styles.css';

import NavBar from './components/ui/layout/NavBar';

import Home from './components/pages/Home';
import Venue from './components/pages/Venue';

function App() {
  return (
    <div className='bg-skyline bg-cover bg-center h-screen flex justify-center overflow-auto'>
      <div className='max-w-screen-xl flex flex-col backdrop-blur-sm'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/venue' element={<Venue />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
