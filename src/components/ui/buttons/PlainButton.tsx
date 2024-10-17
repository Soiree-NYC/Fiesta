import { FC } from 'react';

type Props = {
  title: string;
  callback: () => void;
};

const PlainButton: FC<Props> = ({ title, callback }) => {
  return (
    <button
      onClick={callback}
      className="hover:underline hover:underline-offset-4 px-4 py-2 delay-125"
      >
      {title}
    </button>
  );
};

export default PlainButton;
