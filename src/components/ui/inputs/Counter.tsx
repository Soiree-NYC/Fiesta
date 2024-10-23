import { FC, Dispatch, SetStateAction, useEffect } from 'react';

import RoundedButton from '../buttons/RoundedButton';

type Props = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  min: number;
  max: number;
};

const Counter: FC<Props> = ({ count, setCount, min, max }) => {
  useEffect(() => {
    setCount(min)
  },[min]);

  const handleMinus = () => {
    if (count <= min) setCount(min)
      else if (count > max) setCount(max)
      else setCount(count - 1);
  };

  const handlePlus = () => {
    if (count >= max) setCount(min)
      else if (count < min) setCount(min)
      else setCount(count + 1);
  };

  return (
    <div className='flex items-center gap-2'>
      <RoundedButton title='-' callback={handleMinus} />
      <span>{count}</span>
      <RoundedButton title='+' callback={handlePlus} />
    </div>
  );
};

export default Counter;
