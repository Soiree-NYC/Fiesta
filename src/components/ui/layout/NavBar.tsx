import { useState } from 'react';
import AccountAccess from "../buttons/AccountAccess";

const NavBar = () => {
  const [accountAccessToggle, setAccountAccessToggle] = useState<boolean>(false);

  return (
    <nav className='flex justify-between m-3 px-8'>
      <div className='text-3xl'>
        🎉
      </div>
      
      <div className='flex gap-4'>
        <button className='hover:bg-slate-50 rounded-full px-2'>
          Partify your business</button>
        <button className='hover:bg-slate-50 rounded-full px-3'>
          🌐</button>
        <AccountAccess setter={setAccountAccessToggle} getter={accountAccessToggle} />
      </div>
    </nav>
  );
};

export default NavBar;
