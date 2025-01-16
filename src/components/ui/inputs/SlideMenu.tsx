import { FC, ReactNode, } from 'react';

type Props = {
  items: ReactNode[];
};

const SlideMenu: FC<Props> = ({ items }) => {
  return (
    <section className='flex gap-10 justify-center m-3 px-8 relative text-white'>
      <div className='overflow-x-scroll
        md:overflow-hidden'>
        <ul className='flex gap-1'>
          {items.map((item, i) => (
          <li key={i} className='py-2 px-0.5 hover:scale-105'>
            {item}
          </li>
        ))}
        </ul>
      </div>
    </section>
  );
};

export default SlideMenu;
