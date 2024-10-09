import { useState } from 'react';

import AccountAccess from "../buttons/AccountAccess";
import SearchBar from '../inputs/SearchBar';

const NavBar = () => {
  const [accountAccessToggle, setAccountAccessToggle] = useState<boolean>(false);

  return (
    <nav className='flex flex-col'>
      <section className='flex justify-between m-3 px-8'>
        <div className='flex text-3xl text-white font-roboto tracking-tight font-medium border border-black bg-red-500 py-1 px-2'>
          <img src='public/olive.svg' alt="" className='h-10'/>
          <div>SOIR<span>&#200;</span>E</div>
        </div>
        <div className='flex gap-4'>

          <button className='hover:bg-slate-50 rounded-full px-2'>
          🌐</button>
          <button className='hover:bg-slate-50 rounded-full px-2 text-xl'>
            ♡</button>
          <button className='hover:bg-slate-50 rounded-full px-2'>
            Book Now</button>
          <AccountAccess setter={setAccountAccessToggle} getter={accountAccessToggle} />
          {accountAccessToggle && (
            <div className="absolute right-10 mt-10 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul className="py-2 text-xs">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sign Up</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Log In</li>
              </ul>
              <hr />
              <ul className="py-2 text-xs">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Gift Cards</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Partify your business</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Help Center</li>
              </ul>
            </div>
          )}
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
