import { FC } from 'react';

type Props = {
  title: string;
  callback: () => void;
};

const RoundedButton: FC<Props> = ({ title, callback }) => {
  return (
    <button className='border rounded-full text-xl p-4' onClick={callback}>{title}</button>
  );
};

export default RoundedButton;
