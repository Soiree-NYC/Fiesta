import { useState } from "react";

import { FC, Dispatch, SetStateAction } from 'react';

import Counter from "../ui/inputs/Counter";
import Calendar from "react-calendar";
import Time from "../ui/inputs/Time";

type Props = {
  guests: number;
  setGuests: Dispatch<SetStateAction<number>>;
  min: number;
  max: number;
};

const DateTime: FC<Props> = ({ guests, setGuests, min, max }) => {
  const [time, setTime] = useState<{start: string, end: string}>({start: '00:00', end: '00:00'});

  return (
    <div className='border rounded-2xl flex flex-col'>
      <Calendar className='flex flex-col border border-x-0 border-t-0 border-b-2 p-2 gap-5 text-center justify-between' />

      <div className='grid grid-cols-2'>
        <div className='flex flex-col border-r-2 p-2'>
          <span className="text-sm self-start px-1">START</span>
          <Time time={time} setTime={setTime}/>
        </div>
        <div className="flex flex-col p-2">
          <span className="text-sm self-start px-1">END</span>
          <Time time={time} setTime={setTime}/>
        </div>
      </div>
      <div className="border-t-2 p-2 flex justify-between items-center">
        <span className="text-md">GUESTS</span>
        <Counter count={guests} setCount={setGuests} min={min} max={max} />
      </div>
    </div>
  );
};

export default DateTime;
