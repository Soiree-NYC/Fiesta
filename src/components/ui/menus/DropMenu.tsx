import { FC } from 'react';

interface Props {

}


const DropMenu = () => {
  return (
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
  );
};

export default DropMenu;
