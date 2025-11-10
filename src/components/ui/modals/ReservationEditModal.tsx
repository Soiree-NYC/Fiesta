import React, { useState,  } from 'react';

import DateTime from '../../form/DateTime';
import RoundedButton from '../buttons/RoundedButton';

const ReservationEditModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [guests, setGuests] = useState(Number(sessionStorage.getItem("guests")));
  // @ts-ignore
  const [date, setDate] = useState<Date>(new Date(sessionStorage.getItem("bookingDate")));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    sessionStorage.setItem("guests", String(guests));
    sessionStorage.setItem("bookingDate", date.toISOString());
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center backdrop-brightness-75'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
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
          textColor='text-black'
          type='submit'
        />
      </form>
    </div>
  );
};

export default ReservationEditModal;
