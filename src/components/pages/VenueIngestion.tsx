import {
  useState,
  useEffect,
  FormEvent,
} from "react";

import Ingestion_1 from "./Ingestion_1";
import Ingestion_2 from "./Ingestion_2";
import Ingestion_3 from "./Ingestion_3";
import Ingestion_4 from "./Ingestion_4";
import Ingestion_5 from "./Ingestion_5";
import Ingestion_6 from "./Ingestion_6";
import Ingestion_7 from "./Ingestion_7";
import Ingestion_8 from "./Ingestion_8";
import Ingestion_9 from "./Ingestion_9";

type Venue = {
  id?: number;
  name: string;
  description?: string;
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  neighborhood?: string;
  borough?: string;
  latitude?: number | null;
  longitude?: number | null;
  created_at?: string;
  updated_at?: string;
};
type Accessibility = {
  ada_compliant: boolean | null,
  elevator: boolean | null,
  ramp: boolean | null,
  braille_signage: boolean | null,
  accessible_restroom: boolean | null,
};
type Parking = {
  street_parking: boolean | null;
  garage: boolean | null;
  valet: boolean | null;
  nearby_lot: boolean | null;
};
type Day = {
  day: string;
  open_time: string;
  close_time: string;
};
type Pricing = {
  price_per_hour: string,
  price_per_day: string,
  currency: 'USD',
};
type Catering = {
  in_house: boolean | null,
  external_allowed: boolean | null,
  kitchen_available: boolean | null,
};
type Licences = {
  liquor: boolean | null,
  entertainment: boolean | null,
  sound: boolean | null,
};
type Space = {
  space_name: string;
  capacity: string;
  indoor: boolean;
  outdoor: boolean;
  square_feet: string;
  photos: File[];
};
type CancellationPolicy = {
  policy: string;
  days_notice_required: number;
};

const VenueIngestion = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [step]);

  const [venue, setVenue] = useState<Venue>({
    name: '',
    description: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    neighborhood: '',
    borough: '',
    latitude: null,
    longitude: null,
  });
  const [accessibility, setAccessibility] = useState<Accessibility>({
    ada_compliant: null,
    elevator: null,
    ramp: null,
    braille_signage: null,
    accessible_restroom: null,
  });
  const [parking, setParking] = useState<Parking>({
    street_parking: null,
    garage: null,
    valet: null,
    nearby_lot: null,
  });
  const [hours, setHours] = useState<Day[]>([
    { day: 'Monday', open_time: '', close_time: '' },
    { day: 'Tuesday', open_time: '', close_time: '' },
    { day: 'Wednesday', open_time: '', close_time: '' },
    { day: 'Thursday', open_time: '', close_time: '' },
    { day: 'Friday', open_time: '', close_time: '' },
    { day: 'Saturday', open_time: '', close_time: '' },
    { day: 'Sunday', open_time: '', close_time: '' },
  ]);
  const [pricing, setPricing] = useState<Pricing>({
    price_per_hour: '',
    price_per_day: '',
    currency: 'USD',
  });
  const [catering, setCatering] = useState<Catering>({
    in_house: null,
    external_allowed: null,
    kitchen_available: null,
  });
  const [licences, setLicences] = useState<Licences>({
    liquor: false,
    entertainment: false,
    sound: false,
  });
  const [cancellationPolicy, setCancellationPolicy] = useState<CancellationPolicy>({
    policy: '',
    days_notice_required: 7,
  });
  const [spaces, setSpaces] = useState<Space[] | []>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      venue,
      accessibility,
      parking,
      hours,
      pricing,
      catering,
      licences,
      cancellation_policy: cancellationPolicy,
      spaces,
    };

    console.log(`payload: `, payload)
    // try {
    //   const res = await fetch('/api/venues', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(payload),
    //   });

    //   if (!res.ok) {
    //     throw new Error('Failed to submit venue');
    //   }

    //   const data = await res.json();
    //   console.log('Success:', data);
    // } catch (err) {
    //   console.error('Submission error:', err);
    // }
  };

  const  ingestionList = [
    <Ingestion_1 venue={venue} setVenue={setVenue} />,
    <Ingestion_2 accessibility={accessibility} accessibilitySetter={setAccessibility} />,
    <Ingestion_3 parking={parking} parkingSetter={setParking} />,
    <Ingestion_4 hours={hours} hoursSetter={setHours} />,
    <Ingestion_5 pricing={pricing} pricingSetter={setPricing} />,
    <Ingestion_6 catering={catering} cateringSetter={setCatering} />,
    <Ingestion_7 licences={licences} licencesSetter={setLicences} />,
    <Ingestion_8 spaces={spaces} spacesSetter={setSpaces} />,
    <Ingestion_9 cancellationPolicy={cancellationPolicy} cancellationsPolicySetter={setCancellationPolicy} />,
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col justify-between text-white font-roboto p-4 py-10 backdrop-blur-md md:min-w-[1200px] md:min-h-[90vh]'>
        {ingestionList[step]}
        <div className="text-center flex justify-center gap-10">
          {
            step !== 0 && <button
              type='button'
              className="px-6 py-3 text-white font-bold rounded-full bg-blue-600 hover:bg-blue-700 transition"
              onClick={()=> setStep(step-1)}
            >
              Back
            </button>
          }
          {
            step !== ingestionList.length-1 
              ? <button
                  type='button'
                  className="px-6 py-3 text-white font-bold rounded-full bg-blue-600 hover:bg-blue-700 transition"
                  onClick={()=> setStep(step+1)}>
                  Next
                </button>
              : <button
                  type='submit'
                  className="px-6 py-3 text-white font-bold rounded-full bg-blue-600 hover:bg-blue-700 transition">
                  Done
                </button>
          }
        </div>
      </div>
    </form>
  );
};

export default VenueIngestion;
