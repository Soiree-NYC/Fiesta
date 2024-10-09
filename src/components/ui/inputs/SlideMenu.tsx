import {
  FC,
  ReactNode,
  useState
} from 'react';

interface Props {
  items: ReactNode[];
};

const SlideMenu: FC<Props> = ({ items }) => {
  const [current, setCurrent] = useState<number>(0);

  const itemsShown = items.length / 4;

  const slideRight = (): void => {
    if (current < items.length) setCurrent(current + itemsShown)
      else setCurrent(0);
  };
  const slideLeft = (): void => {
    if (current > 0) setCurrent(current - itemsShown)
      else setCurrent(items.length - itemsShown);
  };

  return (
    <section className='flex gap-10 justify-center m-3 px-8 overflow-hidden relative text-white'>
      <button onClick={slideLeft}>◀</button>
      <div className='overflow-hidden relative max-w-96'>
        <ul className='flex gap-20 transition ease-in-out delay-125 px-6 pl-1'>
          {items.map((item, i) => (
          <li key={i} className='py-2'>
            <button className='text-slate-300  hover:scale-110 hover:text-slate-500 duration-300'>{item}</button>
          </li>
        ))}
        </ul>
        <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent rounded-r-full' />
      </div>
      <button onClick={slideRight}>▶</button>
    </section>
  );
};

export default SlideMenu;
