import  { FC } from 'react';

import Primary from "../buttons/Primary";

interface Props {
  title: string;
  neighborhood: string;
  price: number;
  price_was: number;
  description: string;
  image: string;
};

const SimpleCard: FC<Props> = ({ title, neighborhood, price, price_was, description, image }) => {

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className='h-[20rem] relative flex flex-col gap-1 justify-between backdrop-blur-md rounded-lg mb-4 text-white bg-black bg-opacity-40'>
      <div className='p-3'>
        <p className='text-xl'>{title}</p>
        <p className='text-xs'>{neighborhood}</p>
      </div>

      <img src={image} className='h-4/5 object-cover rounded-b-md'/>

      <div className='absolute flex flex-col justify-between gap-3 p-3 bottom-0 z-20 bg-gradient-to-t from-black/100 to-transparent rounded-b-md w-full'>
        <p className='text-xs/[10px] bottom-[50px]'>{description}</p>

        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <p className='text-xs'>${price} <span className='text-xs line-through'>${price_was}</span></p>
            <p className='text-xs'>minimum per person</p>
          </div>

          <Primary label="Add to List" callback={handleClick} frosted={true} />
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
