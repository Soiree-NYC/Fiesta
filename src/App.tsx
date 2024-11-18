import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles.css';

import NavBar from './components/ui/layout/NavBar';

import EarlyAccess from './components/ui/modals/EarlyAccess';
import Home from './components/pages/Home';
import VenueDetails from './components/pages/VenueDetails';
import Test from './components/pages/Test';

function App() {
  const [listItems, setListItems] = useState<number>(0);

  const { pathname } = useLocation();

  const exclustion_list = [
    '/',
    '/test',
  ];

  const checkExclustions = (list:string[]) => {
    return !list.includes(pathname);
  };

  return (
    <div className='bg-skyline bg-cover bg-center flex justify-center overflow-auto'>
      <div className='max-w-screen-xl flex flex-col pt-10'>
        {checkExclustions(exclustion_list) && <NavBar listItems={listItems} />}

        <Routes>
          <Route path='/' element={<EarlyAccess />} />
          <Route path='/home' element={<Home venues={{getter: listItems, setter: setListItems}}/>} />
          <Route path='/venue/:id' element={<VenueDetails />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
