import { useState } from 'react';
import Calendar from 'react-calendar';

import { FC, Dispatch, SetStateAction } from 'react';

type Props = {
  time: {start: string, end: string};
  setTime: Dispatch<SetStateAction<{start: string, end: string}>>;
};

const Time: FC<Props> = ({ time, setTime }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = () => {
    console.log('yo')
  };

  console.log(time, setTime);
  return (
    <Calendar
      onChange={handleDateChange}
      value={date}
    />
  );
};

export default Time;
