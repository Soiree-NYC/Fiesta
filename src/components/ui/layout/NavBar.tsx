import { useState } from 'react';

import AccountAccess from "../buttons/AccountAccess";
import SearchBar from '../inputs/SearchBar';

const NavBar = () => {
  const [accountAccessToggle, setAccountAccessToggle] = useState<boolean>(false);

  return (
    <nav className='flex flex-col items-between text-white'>
      <section className='flex justify-between m-3 px-2'>
        <div className='scale-75 flex text-3xl text-white font-roboto tracking-tight font-medium py-1 px-2'>
          <img src='/olive.svg' alt="" className='h-10'/>
          <div>SOIR<span>&#200;</span>E</div>
        </div>

        <div className='flex gap-4'>
          <button className='hover:underline hover:underline-offset-4 decoration-slate-50 rounded-full px-2 delay-125'>
          🌐</button>
          <button className='hover:underline hover:underline-offset-4 rounded-full px-2 text-xl delay-125'>
            ♡</button>
          <button className='hover:underline hover:underline-offset-4 rounded-full px-2 delay-125'>
            Book Now</button>
          <AccountAccess setter={setAccountAccessToggle} getter={accountAccessToggle} />
          {accountAccessToggle && (
            <div className="absolute right-12 top-6 mt-10 w-48 bg-transparent backdrop-blur-md border border-gray-200 rounded-md shadow-lg z-20">
              <ul className="py-2 text-xs">
                <li className="px-4 py-2 hover:underline hover:underline-offset-4 decoration-slate-50 cursor-pointer">Sign Up</li>
                <li className="px-4 py-2 hover:underline hover:underline-offset-4 decoration-slate-50 cursor-pointer">Log In</li>
              </ul>
              <hr />
              <ul className="py-2 text-xs">
                <li className="px-4 py-2 hover:underline hover:underline-offset-4 decoration-slate-50 cursor-pointer">Gift Cards</li>
                <li className="px-4 py-2 hover:underline hover:underline-offset-4 decoration-slate-50 cursor-pointer">Partify your business</li>
                <li className="px-4 py-2 hover:underline hover:underline-offset-4 decoration-slate-50 cursor-pointer">Help Center</li>
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
