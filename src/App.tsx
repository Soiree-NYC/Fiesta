import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

import NavBar from './components/ui/layout/NavBar';

import Home from './components/pages/Home';
import VenueDetails from './components/pages/VenueDetails';

function App() {
  const [listItems, setListItems] = useState<number>(0);

  return (
    <div className='bg-skyline bg-cover bg-center h-full flex justify-center overflow-auto'>
      <div className='max-w-screen-xl flex flex-col backdrop-blur-sm'>
        <NavBar listItems={listItems} />
        <Routes>
          <Route path='/' element={<Home venues={{getter: listItems, setter: setListItems}}/>} />
          <Route path='/venue/:id' element={<VenueDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
