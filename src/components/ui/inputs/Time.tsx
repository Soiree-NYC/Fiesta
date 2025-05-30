import { FC, Dispatch, SetStateAction } from 'react';

type Props = {
  time: { start: string; end: string };
  setTime: Dispatch<SetStateAction<{ start: string; end: string }>>;
  type: 'start' | 'end';
};

const Time: FC<Props> = ({ time, setTime, type }) => {
  const handleTimeSelect = (value: string) => {
    setTime({ ...time, [type]: value });
  };

  return (
    <div className="text-sm">
      <select
        className="bg-transparent"
        name={type}
        value={time[type]}
        onChange={(e) => handleTimeSelect(e.target.value)}>
        <option value="08:00">08:00 AM</option>
        <option value="09:00">09:00 AM</option>
        <option value="10:00">10:00 AM</option>
        <option value="11:00">11:00 AM</option>
        <option value="12:00">12:00 PM</option>
        <option value="13:00">01:00 PM</option>
        <option value="14:00">02:00 PM</option>
        <option value="15:00">03:00 PM</option>
        <option value="16:00">04:00 PM</option>
        <option value="17:00">05:00 PM</option>
        <option value="18:00">06:00 PM</option>
        <option value="19:00">07:00 PM</option>
        <option value="20:00">08:00 PM</option>
        <option value="21:00">09:00 PM</option>
        <option value="22:00">10:00 PM</option>
        <option value="23:00">11:00 PM</option>
        <option value="00:00">12:00 AM</option>
        <option value="01:00">01:00 AM</option>
        <option value="02:00">02:00 AM</option>
        <option value="03:00">03:00 AM</option>
      </select>
    </div>
  );
};

export default Time;
