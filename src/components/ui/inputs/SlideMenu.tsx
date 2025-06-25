import { FC, } from 'react';
import Primary from '../buttons/Primary';

type Props = {
  items: string[];
  handler: (label: string) => void;
};

const SlideMenu: FC<Props> = ({ items, handler }) => {
  return (
    <section className='flex gap-10 justify-center m-3 px-8 relative text-white'>
      <div className='overflow-x-scroll
        md:overflow-hidden'>
        <ul className='flex gap-1'>
          {items.map((item, i) => (
          <li key={i} className='py-2 px-0.5 hover:scale-105'>
            <Primary
              label={item}
              callback={() => handler(item)}
            />
          </li>
        ))}
        </ul>
      </div>
    </section>
  );
};

export default SlideMenu;
