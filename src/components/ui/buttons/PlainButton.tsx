import { FC } from 'react';

type Props = {
  title: string;
  callback: () => void;
};

const PlainButton: FC<Props> = ({ title, callback }) => {
  return (
    <button
      onClick={callback}
      className="hover:underline hover:underline-offset-4 text-white py-2"
      >
      {title}
    </button>
  );
};

export default PlainButton;
