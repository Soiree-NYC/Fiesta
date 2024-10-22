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
    <div>
      <h1 className="flex items-center gap-2 text-white text-3xl py-1">{name} <span className="text-3xl">•</span>
        <span className='text-sm'>{neighborhood}</span>
        <span className='text-sm'>{avg}/5</span>
      </h1>
      <h3 className="text-lg text-white">{description}</h3>
      <div className="flex flex-row gap-1">
        {desx.map((des, i) => (
          <div key={i} className="flex justify-center text-white gap-1">
            <p className="text-white self-stretch text-lg mb-4">{des}</p>
            {i < desx.length - 1 && (<span className="text-3xl">•</span>)}
          </div>
        ))}
      </div>
      <p>
        <span className='text-green-400'>
          Open: &nbsp;
        </span>
        {open_at} - {close_at}</p>
    </div>
  );
};

export default QuickInfo;
