import { FC, } from 'react';

interface Props {
  label: string;
  callback: () => void;
};

const Primary: FC<Props> = ({ label, callback }) => {
  return (
    <button onClick={callback} className='border rounded-lg px-2 py-1 text-xs' >
      {label}
    </button>
  );
};

export default Primary;
