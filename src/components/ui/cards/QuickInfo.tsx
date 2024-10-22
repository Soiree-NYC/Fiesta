import { FC } from 'react';
import { Time } from '../../../shared/types/Time';

type Prop = {
  desx: string[];
  description: string;
  name: string;
  open_at: Time;
  close_at: Time;
};

const QuickInfo: FC<Prop> = ({ description, desx, name, open_at, close_at }) => {
  return (
    <div>
      <h1 className="text-white text-3xl py-1">{name}</h1>
      <h3 className="text-lg text-white">{description}</h3>
      <p>
        <span className='text-green-400'>
          Open: &nbsp;
        </span>
        {open_at} - {close_at}</p>
      <div className="flex flex-row gap-1">
        {desx.map((des, i) => (
          <div className="flex justify-center text-white gap-1">
            <p className="text-white self-stretch text-lg mb-4">{des}</p>
            {i < desx.length - 1 && (<span className="text-3xl">•</span>)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickInfo;
