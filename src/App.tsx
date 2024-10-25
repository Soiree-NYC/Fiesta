import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

import NavBar from './components/ui/layout/NavBar';

import Home from './components/pages/Home';
import VenueDetails from './components/pages/VenueDetails';
import Test from './components/pages/Test';

function App() {
  const [listItems, setListItems] = useState<number>(0);

  return (
    <div className='bg-skyline bg-cover bg-center flex justify-center overflow-auto fit-content'>
      <div className='max-w-screen-xl flex flex-col backdrop-blur-sm h-full mt-10'>
        <NavBar listItems={listItems} />
        <Routes>
          <Route path='/' element={<Home venues={{getter: listItems, setter: setListItems}}/>} />
          <Route path='/venue/:id' element={<VenueDetails />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
