import { useState } from 'react';

import { FC } from 'react';

import Time from "../inputs/Time";
import Special from '../buttons/SpecialButton';
import Counter from '../inputs/Counter';

type Props = {
  basePrice: number;
  standing: number;
};

const CheckoutConfig: FC<Props> = ({ basePrice, standing }) => {
  const [guests, setGuests] = useState<number>(10);
  const [packageFocus, setPackageFocus] = useState<string>("Limited");

  const packages = [
    { name: 'Limited', color: 'bg-olive_r_1' },
    { name: 'Recommended', color: 'bg-olive_r_2' },
    { name: 'Soirée', color: 'bg-olive_r_3' },
  ];

  const parsePackages = () => {
    const  color  =  packages.find((packageItem) => packageItem.name === packageFocus);
    return color?.color;
  };

  return (
    <>
      <div className="flex text-white">
      <div className="flex text-white">
        {packages.map(({ name, color }) => (
          <div
            key={name}
            className={`${color} h-12 rounded-t-2xl w-52 flex justify-center items-center text-2xl font-roboto cursor-pointer`}
            style={{ opacity: packageFocus === name ? 1 : 0.5 }}
            onClick={() => setPackageFocus(name)}>
            <h1>{name}</h1>
          </div>
        ))}
      </div>
      </div>

      <div className={`flex flex-col  rounded-b-2xl ${parsePackages()} ${packageFocus === 'Soirée' ? 'text-slate-700' : 'text-slate-100'} p-6 gap-2 h-[30rem]`}>
        <div className='self-start flex'>
          <h1 className='text-3xl font-bold'>${basePrice}</h1>
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
            <Counter count={guests} setCount={setGuests} min={10} max={standing} />
          </div>
        </div>

        <div className='flex flex-col'>
          <Special title='Reserve' callback={()=> console.log('yo')} />
          <span className='self-center py-4'>You won't be charged yet</span>
          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <span className='px-1'>${basePrice} x {guests} guests</span>
              <span className='px-1'>${guests * basePrice}</span>
            </div>
            <div className='flex justify-between'>
              <span className='px-1'>Gratuity</span>
              <span className='px-1'>${((guests * basePrice)/100)*20}</span>
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
          <strong>${guests * 80 + ((guests * basePrice)/100)*20}</strong>
        </div>
      </div>
    </>
  );
};

export default CheckoutConfig;
