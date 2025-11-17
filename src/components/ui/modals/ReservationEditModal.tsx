import React, { useState, FC  } from 'react';

import DateTime from '../../form/DateTime';
import RoundedButton from '../buttons/RoundedButton';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const ReservationEditModal: FC<Props> = ({ isOpen, setIsOpen }) => {
  const [guests, setGuests] = useState(Number(sessionStorage.getItem("guests")));
  // @ts-ignore
  const [date, setDate] = useState<Date>(new Date(sessionStorage.getItem("bookingDate")));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    sessionStorage.setItem("guests", String(guests));
    sessionStorage.setItem("bookingDate", date.toISOString());
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-brightness-50 flex items-center justify-center z-10">
      <div className="flex flex-col border border-black/20 rounded-xl bg-white/50 backdrop-blur-md items-end p-4 gap-5">
        {/* <RoundedButton
            title='x'
            callback={() => setIsOpen(!isOpen)}
            textColor='text-black'
            type='submit'
          /> */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black text-2xl font-light hover:text-gray-700 hover:font-extrabold transition">
          x
        </button>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 rounded-xl  text-white'>
          <DateTime
            guests={guests}
            setGuests={setGuests}
            date={date}
            setDate={setDate}
            min={10}
            max={50}
          />
          <RoundedButton
            title='Confirm Edits'
            callback={() => setIsOpen(!isOpen)}
            textColor='text-white'
            type='submit'
          />
        </form>
      </div>
    </div>
  );
};

export default ReservationEditModal;
