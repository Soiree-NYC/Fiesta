import { useState } from 'react';

import Time from "../inputs/Time";
import Special from '../buttons/SpecialButton';
import Counter from '../inputs/Counter';

const CheckoutConfig = () => {
  const [guests, setGuests] = useState<number>(10);

  return (
    <div className='flex flex-col border rounded-2xl bg-slate-100 p-6 gap-2 h-[30rem]'>
      <div className='self-start flex'>
        <h1 className='text-3xl font-bold'>$80</h1>
        <p className='self-end'>/guest</p>
      </div>

      <div className='border rounded-2xl flex flex-col'>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col border-r-2 p-2'>
            <span className="text-sm self-start px-1">SOIR&#201;E</span>
            <Time />
          </div>
          <div className="flex flex-col p-2">
            <span className="text-sm self-start px-1">AFTERPARTY</span>
            <Time />
          </div>
        </div>
        <div className="border-t-2 p-2 flex justify-between items-center">
          <span className="text-md">GUESTS</span>
          <Counter count={guests} setCount={setGuests} min={10} max={150} />
        </div>
      </div>

      <div className='flex flex-col'>
        <Special title='Reserve' callback={()=> console.log('yo')} />
        <span className='self-center py-4'>You won't be charged yet</span>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <span className='px-1'>$80 x {guests} guests</span>
            <span className='px-1'>${guests * 80}</span>
          </div>
          <div className='flex justify-between'>
            <span className='px-1'>Gratuity</span>
            <span className='px-1'>${((guests * 80)/100)*20}</span>
          </div>
          <div className='flex justify-between'>
            <span className='px-1 line-through'>Service fee</span>
            <span className='px-1'>$0 </span>
          </div>
        </div>
      </div>

      <hr />

      <div className='flex justify-between'>
        <strong>Total before taxes</strong>
        <strong>${guests * 80 + ((guests * 80)/100)*20}</strong>
      </div>
    </div>
  );
};

export default CheckoutConfig;
