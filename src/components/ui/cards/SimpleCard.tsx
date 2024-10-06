import React from 'react'

const SimpleCard = () => {
  return (
    <div className='p-3 hover:shadow-md rounded-lg mb-4'>
      <img src='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg' className='rounded-lg' />
      <p className='text-xl'>Hotel Beacon</p>

      <p className='text-xs'>$80 <span className='text-xs line-through green'>$120</span></p>
      <p className='text-xs'>per person</p>
    </div>
  );
};

export default SimpleCard;
