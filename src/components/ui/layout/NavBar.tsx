import AccountAccess from "../buttons/AccountAccess";

const NavBar = () => {
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
        <AccountAccess />
      </div>
    </nav>
  );
};

export default NavBar;
