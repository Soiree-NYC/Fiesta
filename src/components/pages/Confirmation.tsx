import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import SpecialButton from '../ui/buttons/SpecialButton';
import CheckoutForm from '../form/CheckoutForm';
import RoundedButton from '../ui/buttons/RoundedButton';
import ReservationEditModal from '../ui/modals/ReservationEditModal';

type TaxBreakdown = {
  base: number;
  nyStateTax: number;
  nycSalesTax: number;
  occupancyTax: number;
  hotelUnitFee: number;
  totalTax: number;
  total: number;
};

const stripePromise = loadStripe('pk_test_51SKmo7AcDkAE5MSss1LmHrZ2ZrdYKuyDrkTNSN9u4JCLIt72rcngKv9bfL1ujIQJQPGig2TQOb71bBukWFuiwRVw00LID8JGOc');

const Confirmation = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('email', email);
  }, [phone, email]);

  useEffect(() => {
    const { total } = calculateNYCReservationTax(Number(sessionStorage.getItem('basePrice')), Number(sessionStorage.getItem('guests')));

    sessionStorage.setItem('total', (total*100).toFixed(2));
  }, [sessionStorage.getItem('basePrice'), sessionStorage.getItem('guests')]);

  const calculateNYCReservationTax = (base: number, guests: number = 1): TaxBreakdown => {
    const nyStateTax = base * 0.04;
    const nycSalesTax = base * 0.045;
    const occupancyTax = base * 0.05875;
    const hotelUnitFee = 1.5 * guests;

    const totalTax = nyStateTax + nycSalesTax + occupancyTax + hotelUnitFee;
    const price = base * guests
    const total = Number((price + totalTax).toFixed(2));

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
  const startTime = sessionStorage.getItem('bookingTime') ? JSON.parse(sessionStorage.getItem('bookingTime') || '{}').start : '00:00';
  const endTime = sessionStorage.getItem('bookingTime') ? JSON.parse(sessionStorage.getItem('bookingTime') || '{}').end : '00:00';

  const {
    totalTax,
    total
  } = calculateNYCReservationTax(basePrice, guests);

  const handleConfirm = async () => {
    // console.log(sessionStorage);
    // const res = await fetch('https://ec2-3-141-30-224.us-east-2.compute.amazonaws.com/create-payment-intent', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(sessionStorage)
    // });

    // const data = await res.json();
    setClientSecret(
"pi_3SRvcIAcDkAE5MSs0iQQ4OqF_secret_pUWzpCbVKYXEkehILfac7QfNl");

    // window.location.href = data.url;
  };

  const iso = sessionStorage.getItem('bookingDate');
  // @ts-ignore
  const date = new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric', });

  const name = sessionStorage.getItem('venueName');
  const description = sessionStorage.getItem('venueDescription');

  const handleModal = () => {
    setIsEditorOpen(!isEditorOpen);
  }

  return (
    <div className='flex flex-col gap-20 mt-10'>
      <h1 className='text-4xl'>Confirm and Pay</h1>

      <div className='grid grid-cols-2 gap-10'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-3xl font-medium'>Confirm your details</h4>
          <div className='flex flex-col gap-5 text-xl'>
            <div className='grid grid-cols-2 justify-evenly gap-3'>
              <div className='flex flex-col'>
                <span className='font-bold'>Reservation Date</span>
                <span className='font-extralight '>{date}</span>
              </div>
              <div className='flex flex-col'>
                <span className='font-bold'>Check-in</span>
                <span className='font-extralight '>{startTime}</span>
              </div>
              <div className='flex flex-col'>
                <span className='font-bold'>Guests</span>
                <span className='font-extralight '>{guests}</span>
              </div>
              <div className='flex flex-col'>
                <span className='font-bold'>Check-out</span>
                <span className='font-extralight '>{endTime}</span>
              </div>
            </div>
            <RoundedButton
              title='Edit'
              callback={handleModal}
              textColor='text-black' />
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
                required
              />
            </label>
            <label className='border rounded-lg p-4'>
              <input 
                type="email"
                className="appearance-none border-none outline-none bg-transparent shadow-none text-lg"
                placeholder='Email'
                onChange={e=> setEmail(e.target.value)}
                required
              />
            </label>
          </div>
        </div>

        <div className='flex flex-col border rounded-xl p-10 gap-5'>
          <div className='flex gap-5'>
            <img
              src={sessionStorage.getItem('photo') ?? ''}
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
                <span>${totalTax.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className='flex justify-between text-2xl'>
            <span>Total (USD)</span>
            <span>${total.toFixed(2)}</span>
          </div>

          { clientSecret
            ? <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm />
              </Elements>
            : <SpecialButton
                title='Confirm'
                callback={handleConfirm} />
          }

          { isEditorOpen &&
            <ReservationEditModal
              isOpen={isEditorOpen}
              setIsOpen={setIsEditorOpen} />
          }
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
