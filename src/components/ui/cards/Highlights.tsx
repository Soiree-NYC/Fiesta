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
    <div className="flex flex-col gap-5 justify-around text-slate-white">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <div className="w-6">
            <img src="https://img.icons8.com/?size=100&id=IzYXNYBBP9ql&format=png&color=ffffff" alt="" />
          </div>
          <strong className='text-xl'>Featured in</strong>
        </div>
        <div className="flex flex-col text-sm text-slate-300">
          {writeUps.map((item: Publication, index: number) => (
            <Link key={index} to={item.src}>{item.publication}, {item.date}</Link>
         ))}
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex gap-1">
          <div className="w-6">
            <img src="https://img.icons8.com/?size=100&id=10732&format=png&color=ffffff" alt="" />
          </div>
          <strong className='text-xl'>Menu options</strong>
        </div>
        <div className="flex flex-wrap items-center gap-1 text-sm text-slate-300">
          {options.map((item, i) => {
            const menuItem = menuOptions[item];
            const option_name = menuOptions[item]?.option;
            if (!menuItem) return null;
            const {src} = menuItem;

            return (
              <div key={i} className='flex mt-2 p-2 border rounded-full'>
                <img src={src} alt="" />
                <span className='ml-2'>{option_name}</span>
              </div>)}
          )}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
