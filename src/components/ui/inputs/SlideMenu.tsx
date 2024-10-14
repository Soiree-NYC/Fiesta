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

      <div className='overflow-hidden relative max-w-96 flex gap-20'>
        <ul className='flex gap-5 transition ease-in-out delay-125 px-6'>
          {items.map((item, i) => (
          <li key={i} className='py-2'>
            {item}
          </li>
        ))}
        </ul>

        <div className='absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[rgba(255,255,255,0.3)] to-transparent rounded-r-full' />
        {/* <div className='w-20 bg-gradient-to-l from-[rgba(255,255,255,0.3)] to-transparent rounded-r-full' /> */}
      </div>

      <button onClick={slideRight}>▶</button>
    </section>
  );
};

export default SlideMenu;
