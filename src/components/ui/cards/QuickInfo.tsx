import { FC } from 'react';
import { Time } from '../../../shared/types/Time';

type Prop = {
  desx: string[];
  description: string;
  name: string;
  open_at: Time;
  close_at: Time;
  avg: number;
  neighborhood: string;
};

const QuickInfo: FC<Prop> = ({ description, desx, name, open_at, close_at, avg, neighborhood }) => {
  return (
    <div className='text-slate-300'>
      <h1 className="flex items-center gap-2 text-white text-3xl py-1">{name}</h1>
      <div className='flex gap-2'>
        <span>{neighborhood}</span>
        <span>•</span>
        <span>{avg}/5</span>
      </div>
      <h3>{description}</h3>
      <div className="flex flex-row gap-3">
        {desx.map((des, i) => (
          <div key={i}>
            <p>{des}{i < desx.length-1 && <span>,</span>}</p>
          </div>
        ))}
      </div>
      <p className='text-white'>
        <span className='text-green-400'>
          Open: &nbsp;
        </span>
        {open_at} - {close_at}</p>
    </div>
  );
};

export default QuickInfo;
