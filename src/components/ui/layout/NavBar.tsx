import { FC, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import AccountAccess from "../buttons/AccountAccess";
import DropMenu from '../menus/DropMenu';
import PlainButton from '../buttons/PlainButton';

import { checkExcludedPaths } from '../../../utils/checkExcludedPaths';
import { navbarExclusions } from '../../../shared/exclusionLists';

type Props = {
  listItems: number;
};

const NavBar: FC<Props> = ({ listItems }) => {
  const [accountAccessToggle, setAccountAccessToggle] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dropMenuRef = useRef<HTMLDivElement | null>(null);

  const dropMenuItems = [
    [
      <div className='flex items-center'>
        <PlainButton title='Venue list' callback={()=> navigate('/')} />
        {listItems > 0 && <div className='rounded-full bg-red-600 text-xs px-2 py-1'>{listItems}</div>}
      </div>,
      <PlainButton title='Sign up' callback={()=> alert('This feature is currently under construction')} />,
      <PlainButton title='Log in' callback={()=> alert('This feature is currently under construction')} />,
    ],
    [
      <PlainButton title='Gift Cards' callback={()=> alert('This feature is currently under construction')} />,
      <PlainButton title='List your venue' callback={()=> navigate('/addvenue')} />,
      <PlainButton title='Help Center' callback={()=> alert('This feature is currently under construction')} />,
    ],
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropMenuRef.current &&
        !dropMenuRef.current.contains(event.target as Node)
      ) {
        setAccountAccessToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='flex flex-col justify-between items-center text-white m-4'>
      <section className='flex items-center justify-between w-full'>
        <Link to='/'>
          <div className='flex items-center text-2xl font-roboto tracking-wide'>
            <img src='/olive.svg' alt="" className='h-10'/>
            <div>SOIRÉE</div>
          </div>
        </Link>

        <div className='flex gap-4'>
          <div className='hidden md:block'>
            <PlainButton title='&#127760;' callback={()=> alert('This feature is currently under construction')} />
            <PlainButton title='&#10084;' callback={()=> alert('This feature is currently under construction')} />
            <PlainButton title='List Your Venue' callback={() => navigate('/addvenue')} />
          </div>

          <div className='flex justify-end' ref={dropMenuRef}>
            <AccountAccess setter={setAccountAccessToggle} getter={accountAccessToggle} />
            {accountAccessToggle && <DropMenu items={dropMenuItems} />}
          </div>
        </div>
      </section>

      {checkExcludedPaths(navbarExclusions, pathname) && <section className='hidden md:flex flex-col items-center gap-5'>
        <h1 className='text-6xl text-roboto font-bold'>TIME TO PARTY</h1>
        <div className='flex flex-col items-center'>
          <p>Your favorite bar is ready to rent.</p>
          <p>Don't think, just pop.</p>
        </div>
      </section>}
    </nav>
  );
};

export default NavBar;
