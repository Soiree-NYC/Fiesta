import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RoundedButton from '../ui/buttons/RoundedButton';
import SpecialButton from '../ui/buttons/SpecialButton';

type TaxBreakdown = {
  base: number;
  nyStateTax: number;
  nycSalesTax: number;
  occupancyTax: number;
  hotelUnitFee: number;
  totalTax: number;
  total: number;
};

const Confirmation = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem('phone', phone);
  }, [phone]);

  useEffect(() => {
    sessionStorage.setItem('email', email);
  }, [email]);

  const calculateNYCReservationTax = (base: number, guests: number = 1): TaxBreakdown => {
    const nyStateTax = base * 0.04;
    const nycSalesTax = base * 0.045;
    const occupancyTax = base * 0.05875;
    const hotelUnitFee = 1.5 * guests;

    const totalTax = nyStateTax + nycSalesTax + occupancyTax + hotelUnitFee;
    const price = base * guests
    const total = price + totalTax;

    return {
      base,
      nyStateTax,
      nycSalesTax,
      occupancyTax,
      hotelUnitFee,
      totalTax,
      total
    };
  };

  const basePrice = Number(sessionStorage.getItem('basePrice'));
  const guests = Number(sessionStorage.getItem('guests'));
  const {
    totalTax,
    total
  } = calculateNYCReservationTax(basePrice, guests);

  const handleConfirm = () => {
    setShowSuccessModal(true);
  };

  const handleShowSuccess = () => {
    setShowSuccessModal(false);
    navigate('/');
  };

  const iso = sessionStorage.getItem('bookingDate');
  const date = iso
    ? new Date(iso).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : "Invalid date";
  const name = sessionStorage.getItem('venueName');
  const description = sessionStorage.getItem('venueDescription');
  
  console.log(sessionStorage)

  return (
    <div className='flex flex-col gap-20 mt-10'>
      <h1 className='text-4xl'>Confirm and Pay</h1>
      <div className='grid grid-cols-2 gap-10'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-3xl font-medium'>Your party</h4>
          <div className='flex flex-col gap-5 text-xl'>
            <div className='grid grid-cols-2 justify-evenly'>
              <div className='flex flex-col gap-1'>
                <span>Dates</span>
                <span>{date}</span>
              </div>
              <div className='flex justify-end'>
                <RoundedButton
                  title='Edit'
                  callback={() => console.log('yo')}
                />
              </div>
            </div>
            <div className='grid grid-cols-2 justify-evenly'>
              <div className='flex flex-col gap-1'>
                <span>Guests</span>
                <span>{ sessionStorage.getItem('guests') } guests</span>
              </div>
              <div className='flex justify-end'>
                <RoundedButton
                  title='Edit'
                  callback={() => console.log('yo')}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className='flex flex-col gap-5'>
            <h4 className='text-3xl font-medium'>Contact Details</h4>
            <label className='border rounded-lg p-4'>
              <input
                type="tel"
                className="appearance-none border-none outline-none bg-transparent shadow-none text-lg"
                placeholder='Phone number'
                onChange={e=> setPhone(e.target.value)}
              />
            </label>
            <label className='border rounded-lg p-4'>
              <input 
                type="email"
                className="appearance-none border-none outline-none bg-transparent shadow-none text-lg"
                placeholder='Email'
                onChange={e=> setEmail(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className='flex flex-col border rounded-xl p-10 gap-5'>
          <div className='flex gap-5'>
            <img
              src={sessionStorage.getItem('photo')}
              className='rounded-2xl w-[7rem]'
              alt="" />
            <div className='flex flex-col justify-center gap-3'>
              <h4 className='font-semibold text-2xl'>{name}</h4>
              <p>{description}</p>
              <span>⭐️{sessionStorage.getItem('rating')}(293) • 🎖️Superhost</span>
            </div>
          </div>
          <hr />
          <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-medium'>Your Total</h1>
            <div className='flex flex-col text-xl'>
              <div className='flex justify-between'>
                <span>${sessionStorage.getItem('basePrice')} x {sessionStorage.getItem('guests')} guests</span>
                <span>${basePrice * guests}</span>
              </div>
              <div className='flex justify-between'>
                <span>Taxes</span>
                <span>${totalTax}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className='flex justify-between text-2xl'>
            <span>Total (USD)</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <SpecialButton
            title='Confirm'
            callback={handleConfirm}
          />
        </div>

        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-60 rounded shadow-lg text-center text-black">
              <h2 className="text-4xl font-bold mb-2">🎉 You're all done!</h2>
              <p className="mb-4">Everything has been saved successfully.</p>
              <button
                onClick={handleShowSuccess}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Okay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
