import { FC, useState } from 'react';

import AccountAccess from "../buttons/AccountAccess";
import DropMenu from '../menus/DropMenu';
import PlainButton from '../buttons/PlainButton';

type Props = {
  listItems: number;
};

const NavBar: FC<Props> = ({ listItems }) => {
  const [accountAccessToggle, setAccountAccessToggle] = useState<boolean>(false);
  const dropMenuItems = [
    [
      <div className='flex items-center'>
        <PlainButton title='Venue list' callback={()=>console.log('yo')} />
        {listItems > 0 && <div className='rounded-full bg-red-600 text-xs px-2 py-1'>{listItems}</div>}
      </div>,
      <PlainButton title='Sign up' callback={()=>console.log('yo')} />,
      <PlainButton title='Log in' callback={()=>console.log('yo')} />,

    ],
    [
      <PlainButton title='Gift Cards' callback={()=>console.log('yo')} />,
      <PlainButton title='List your venue' callback={()=>console.log('yo')} />,
      <PlainButton title='Help Center' callback={()=>console.log('yo')} />,
    ],
  ];

  return (
    <nav className='flex flex-col items-between text-white'>
      <section className='flex justify-between m-3 px-2'>
        <div className='scale-75 flex text-3xl text-white font-roboto tracking-tight font-medium py-1 px-2'>
          <img src='/olive.svg' alt="" className='h-10'/>
          <div>SOIR<span>&#201;</span>E</div>
        </div>

        <div className='flex gap-4'>
          <PlainButton title='&#127760;' callback={()=> console.log} />
          <PlainButton title='&#10084;' callback={()=> console.log} />
          <PlainButton title='Book Now' callback={()=> console.log} />

          <AccountAccess setter={setAccountAccessToggle} getter={accountAccessToggle} />
          {accountAccessToggle && <DropMenu items={dropMenuItems} />}
        </div>
      </section>

      <section className='flex flex-col items-center gap-5'>
        <h1 className='text-6xl text-roboto font-bold'>TIME TO PARTY</h1>
        <div className='flex flex-col items-center'>
          <p>Your favorite bar is ready to rent.</p>
          <p>Don't think, just pop.</p>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
