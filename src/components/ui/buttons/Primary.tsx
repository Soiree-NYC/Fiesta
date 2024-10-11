import { FC, } from 'react';

interface Props {
  label: string;
  callback: () => void;
  bold?: boolean;
};

const Primary: FC<Props> = ({ label, callback, bold }) => {
  return (
    <button onClick={callback} className={`border rounded-lg px-2 py-1 text-sm text-nowrap ${bold ? 'font-bold' : 'font-normal'}`} >
      {label}
    </button>
  );
};

export default Primary;
