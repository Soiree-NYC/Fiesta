import { useState } from 'react';

import { FC } from 'react';

import Special from '../buttons/SpecialButton';
import DateTime from '../../form/DateTime';

type Props = {
  basePrice: number;
  standing: number;
};

const PreCheckout: FC<Props> = ({ basePrice, standing }) => {
  const [guests, setGuests] = useState<number>(10);
  const [packageFocus, setPackageFocus] = useState<string>("Limited");

  const packages = [
    { name: 'Limited',
      color: 'bg-olive_r_1',
      desc: 'Enjoy a simple selection of house drinks in a cozy space, ideal for a quick celebration.',
      basePrice: 100,
      min_count: 10,
    },
    { name: 'Recommended',
      color: 'bg-olive_r_2',
      desc: 'Elevate your event with our Recommended package, offering a more private setting and a wider variety of drinks, extra time and premium service.',
      basePrice: 250,
      min_count: 40,
    },
    { name: 'Soirée',
      color: 'bg-olive_r_3',
      desc: 'Host the ultimate exclusive event with our Soiree package, featuring all-night access, luxury drinks, and personalized service. It’s the VIP treatment for a once-in-a-lifetime celebration.',
      basePrice: 500,
      min_count: 100,
    },
  ];

  const parsePackages = (item: string) => {
    const packageItem = packages.find((pkg) => pkg.name === packageFocus);
    // @ts-ignore
    return packageItem?.[item];
  };

  const min = parsePackages('min_count');

  return (
    <div className='flex flex-col text-white'>
      <div className="flex text-white">
        {packages.map(({
          name,
          color,
        }) => (
          <div
            key={name}
            className={`${color} h-12 rounded-t-2xl w-dvw flex justify-center items-center text-2xl font-roboto cursor-pointer`}
            style={{ opacity: packageFocus === name ? 1 : 0.5 }}
            onClick={() => setPackageFocus(name)}>
            <h1>{name}</h1>
          </div>
        ))}
      </div>

      <div className={`flex flex-col rounded-b-2xl ${parsePackages('color')} ${packageFocus === 'Soirée' ? 'text-slate-700' : 'text-slate-100'} p-6 gap-2`}>
        <h2 className='leading-5 h-[5rem]'>{parsePackages('desc')}</h2>
        <div className='self-start flex'>
          <h1 className='text-3xl font-bold'>${parsePackages('basePrice')}</h1>
          <p className='self-end'>/guest</p>
        </div>
        <DateTime guests={guests} setGuests={setGuests} min={min} max={standing} />

        <div className='flex flex-col'>
          <Special title='Reserve' callback={()=> console.log('yo')} />
          <span className='self-center py-4'>You won't be charged yet</span>
          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <span className='px-1'>${parsePackages('basePrice')} x {guests} guests</span>
              <span className='px-1'>${guests * parsePackages('basePrice')}</span>
            </div>
            <div className='flex justify-between'>
              <span className='px-1'>Gratuity</span>
              <span className='px-1'>${((guests * parsePackages('basePrice'))/100)*18}</span>
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
    </div>
  );
};

export default PreCheckout;
