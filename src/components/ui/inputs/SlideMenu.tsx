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
    <section className='flex justify-center m-3 px-8 overflow-hidden relative'>
      <button onClick={slideLeft}>◀</button>
      <div className='overflow-hidden relative max-w-96'>
        <ul
          className='flex gap-20 transition ease-in-out delay-150 px-6'>
          {items.map((item, i) => (
          <li key={i}>
            <button>{item}</button>
          </li>
        ))}
        </ul>
        <div className='absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent point-events-none' />
      </div>
      <button onClick={slideRight}>▶</button>
    </section>
  );
};

export default SlideMenu;
