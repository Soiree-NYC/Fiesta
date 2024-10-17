import { FC, Dispatch, SetStateAction } from 'react';

import RoundedButton from '../buttons/RoundedButton';

type Props = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  min: number;
  max: number;
};

const Counter: FC<Props> = ({ count, setCount, min, max }) => {
  const handleMinus = () => {
    if (count <= min) {
      alert(`${min} is the minimum number allowed`);
      setCount(min);
    } else setCount(count - 1);
  };

  const handlePlus = () => {
    if (count >= max) {
      alert(`${max} is the maximum number allowed`);
      setCount(max);
    } else setCount(count + 1);
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
