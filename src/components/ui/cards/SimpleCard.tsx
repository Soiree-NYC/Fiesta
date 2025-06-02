import  { FC } from 'react';

import Primary from "../buttons/Primary";

type Props = {
  title: string;
  neighborhood: string;
  price: number;
  description: string;
  image: string;
  callback: () => void;
};

const SimpleCard: FC<Props> = ({ title, neighborhood, price,  description, image, callback }) => {
  return (
    <div className='relative flex flex-col gap-1 justify-between rounded-lg mb-4 border bg-white'>
      <div className='p-3'>
        <p className='text-xl'>{title}</p>
        <p className='text-xs'>{neighborhood}</p>
      </div>

      <img src={image} className='h-4/5 object-cover rounded-b-md' />

      <div className='absolute flex flex-col gap-3 p-3 bottom-0 z-20 bg-gradient-to-t from-black/100 to-transparent rounded-b-md w-full text-white'>
        <p className='text-xs/[10px]'>{description}</p>

        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <p className='text-xs'>${price}</p>
            <p className='text-xs'>minimum per person</p>
          </div>

          <Primary label="More" callback={callback} frosted={true} />
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
