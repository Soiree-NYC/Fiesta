const NavBar = () => {
  return (
    <nav className='flex justify-between m-3'>
      <div className='px-8 text-3xl'>
        🎉
      </div>
      
      <div className='flex gap-4 px-8'>
        <button className='hover:bg-slate-100 rounded-full p-2'>
          Partify your business</button>
        <button className='hover:bg-slate-100 rounded-full p-4'>
          🌐</button>
        <button className='hover:shadow-md border p-2 rounded-full'>
          sign up group</button>
      </div>
    </nav>
  );
};

export default NavBar;
