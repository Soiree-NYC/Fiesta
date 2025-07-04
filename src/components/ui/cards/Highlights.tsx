import { Link } from 'react-router-dom';

import { FC } from 'react';
import { Publication } from '../../../shared/types/WriteUps';
import { menuOptions, MenuOptionsKeys } from '../../../shared/types/MenuOptions';

type Props = {
  writeUps: Publication[];
  options: MenuOptionsKeys[];
};

const Highlights: FC<Props> = ({ writeUps, options }) => {
  return (
    <div className="flex flex-col gap-5 justify-around">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <div className="w-6">
            <img src="https://img.icons8.com/?size=100&id=IzYXNYBBP9ql&format=png&color=000000" alt="" />
          </div>
          <strong className='text-xl'>Featured in</strong>
        </div>
        <div className="flex flex-col text-sm">
          {writeUps.map((item: Publication, index: number) => (
            <Link key={index} to={item.src} className='hover:underline hover:decoration-solid'>{item.publication}, {item.date}</Link>
         ))}
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex gap-1">
          <div className="w-6">
            <img src="https://img.icons8.com/?size=100&id=10732&format=png&color=000000" alt="" />
          </div>
          <strong className='text-xl'>Menu options</strong>
        </div>
        <div className="flex flex-wrap items-center gap-1 text-sm">
          {options.map((item, i) => {
            const menuItem = menuOptions[item];
            const option_name = menuOptions[item]?.option;
            if (!menuItem) return null;

            return (
              <div key={i} className='mt-2 p-2 border rounded-full'>
                <span>{option_name}</span>
              </div>)}
          )}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
