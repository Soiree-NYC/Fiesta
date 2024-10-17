import { useState } from 'react';

import AccountAccess from "../buttons/AccountAccess";
import SearchBar from '../inputs/SearchBar';
import DropMenu from '../menus/DropMenu';

const NavBar = () => {
  const [accountAccessToggle, setAccountAccessToggle] = useState<boolean>(false);

  return (
    <nav className='flex flex-col items-between text-white'>
      <section className='flex justify-between m-3 px-2'>
        <div className='scale-75 flex text-3xl text-white font-roboto tracking-tight font-medium py-1 px-2'>
          <img src='/olive.svg' alt="" className='h-10'/>
          <div>SOIR<span>&#201;</span>E</div>
        </div>

        <div className='flex gap-4'>
          <button className='hover:underline hover:underline-offset-4 decoration-slate-50 rounded-full px-2 delay-125 text-white'>&#127760;</button>
          <button className='hover:underline hover:underline-offset-4 rounded-full px-2  delay-125 text-white'>	&#10084;</button>
          <button className='hover:underline hover:underline-offset-4 rounded-full px-2 delay-125'>Book Now</button>
          
          <AccountAccess setter={setAccountAccessToggle} getter={accountAccessToggle} />
          {accountAccessToggle && <DropMenu />}
        </div>
      </section>

      <section>
        <SearchBar />
      </section>

      <br />
      <hr />
    </nav>
  );
};

export default NavBar;
