import { FC, } from 'react';

type Props = {
  label: string;
  callback: () => void;
  bold?: boolean;
  frosted?: boolean;
};

const Primary: FC<Props> = ({ label, callback, bold, frosted }) => {
  return (
    <button onClick={callback} className={`border border-slate-300 hover:border-slate-50 rounded-lg px-2 py-1 text-sm text-nowrap ${bold ? 'font-bold' : 'font-normal'} ${frosted ? 'backdrop-opacity-40' : ''} text-slate-300 hover:text-slate-50`} >
      {label}
    </button>
  );
};

export default Primary;
