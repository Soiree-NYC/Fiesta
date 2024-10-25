import { FC, Dispatch, SetStateAction } from 'react';

type Props = {
  time: {start: string, end: string};
  setTime: Dispatch<SetStateAction<{start: string, end: string}>>;
};

const Time: FC<Props> = () => {
  return (
    <div className="text-sm">
      <select className='bg-transparent' name="time">
        <option value="08:00">08:00 AM</option>
        <option value="09:00">09:00 AM</option>
        <option value="10:00">10:00 AM</option>
        <option value="11:00">11:00 AM</option>
        <option value="12:00">12:00 PM</option>
        <option value="13:00">01:00 PM</option>
        <option value="14:00">02:00 PM</option>
        <option value="15:00">03:00 PM</option>
        <option value="16:00">04:00 PM</option>
        <option value="16:00">05:00 PM</option>
        <option value="16:00">06:00 PM</option>
        <option value="16:00">07:00 PM</option>
        <option value="16:00">08:00 PM</option>
        <option value="16:00">09:00 PM</option>
        <option value="16:00">10:00 PM</option>
        <option value="16:00">11:00 PM</option>
        <option value="16:00">12:00 AM</option>
        <option value="16:00">01:00 AM</option>
        <option value="16:00">02:00 AM</option>
        <option value="16:00">03:00 AM</option>
      </select>
    </div>
  );
};

export default Time;
