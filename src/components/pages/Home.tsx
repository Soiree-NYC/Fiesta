import { useState } from 'react';

const Home = () => {
  const [current, setCurrent] = useState<number>(0);
  const items = ['1','2','3','4','5','6','7','8','9','10',];
  const itemsShown = items.length / 4;

  const slideRight = (): void => {
    if (current < items.length) setCurrent(current + itemsShown)
      else setCurrent(0);
  };
  const slideLeft = (): void => {
    if (current > 0) setCurrent(current - itemsShown)
      else setCurrent(items.length - itemsShown);
  };

  console.log(current * (100 / itemsShown))

  return (
    <main className='px-8'>
      <section className='flex m-3 px-8 overflow-hidden relative'>
        <button onClick={slideLeft}>◀</button>
        <div className='overflow-hidden relative'>
          <ul
            className='flex gap-20 transition ease-in-out delay-150 border px-6'>
            {items.map(item => (
            <li key={item}>
              <button>{item}</button>
            </li>
          ))}
          </ul>
          <div className='absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent point-events-none'/>
        </div>
        <button onClick={slideRight}>▶</button>
      </section>
      <section></section>
      <section></section>
    </main>
  );
};

export default Home;
