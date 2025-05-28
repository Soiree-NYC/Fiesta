import React from 'react'

type Props = {}

const Confirmation = (props: Props) => {
  return (
    <>
      <h1 className='text-4xl'>Confirm and Pay</h1>
      <div className='grid grid-cols-2 gap-10'>
        <form>
          <h4>Your party</h4>
          <div className='flex flex-col gap-5'>
            <div className='grid grid-cols-2  justify-evenly'>
              <div className='flex flex-col gap-1'>
                <span>Dates</span>
                <span>Oct 17-19</span>
              </div>
              <div className='flex justify-end'>
                <button className='underline border  w-1/4'>Edit</button>
              </div>
            </div>
            <div className='grid grid-cols-2 justify-evenly'>
              <div className='flex flex-col gap-1'>
                <span>Guests</span>
                <span>1 guest</span>
              </div>
              <div className='flex justify-end'>
                <button className='underline border  w-1/4'>Edit</button>
              </div>
            </div>
          </div>
        </form>

        <div className='flex flex-col border rounded-xl p-10 gap-5'>
          <div className='flex gap-5'>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMtfxRzAnzUzNNjWeYBner5wRQQb56PyPY-JtwH=s680-w680-h510"
              className='rounded-2xl w-[7rem]'
              alt="" />
            <div className='flex flex-col justify-between'>
              <h4 className='font-bold text-2xl'>A private room in the city center of Paris</h4>
              <p>A private room in the city center of Paris</p>
              <span>⭐️4.90(293) • 🎖️Superhost</span>
            </div>
          </div>
          <hr />
          <div className='flex flex-col gap-5'>
            <h1 className='text-3xl'>Your Total</h1>
            <div className='flex flex-col text-xl'>
              <div className='flex justify-between'>
                <span>$67.30 x 2 nights</span>
                <span>$134.59</span>
              </div>
              <div className='flex justify-between'>
                <span>Taxes</span>
                <span>$18.05</span>
              </div>
            </div>
          </div>
          <hr />
          <div className='flex justify-between text-2xl'>
            <span>Total (USD)</span>
            <span>$152.64</span>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Confirmation;
