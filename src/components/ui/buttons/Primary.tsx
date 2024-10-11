import { FC, } from 'react';

interface Props {
  label: string;
  callback: () => void;
};

const Primary: FC<Props> = ({ label, callback }) => {
  return (
    <button
      onClick={callback}
      aria-label={label}
      className='border rounded-sm'
      />
  );
};

export default Primary;
