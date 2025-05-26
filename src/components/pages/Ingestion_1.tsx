import {
  Dispatch,
  SetStateAction,
  ChangeEvent
} from 'react';

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
type Props = {
  venue: Venue;
  setVenue: Dispatch<SetStateAction<Venue>>;
};

const Ingestion_1 = ({ venue, setVenue, }: Props) => {
  const handleVenueChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>  ) => {
    const { name, value } = e.target;
    setVenue(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="min-h-screen  p-6 md:p-12 flex flex-col gap-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center leading-tight">Let's get to know you!</h1>
        <div>
          <label htmlFor ="name" className="block text-xl font-semibold mb-2">What's the name of this establishment?</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full md:w-1/2 p-3 border  border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="e.g., The Blue Orchid Lounge"
            value={venue.name}
            onChange={handleVenueChange}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-xl font-semibold mb-2">Give a short description</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="What makes this place special?"
            value={venue.description}
            onChange={handleVenueChange}
          />
        </div>
        <div>
          <label htmlFor ="email" className="block text-xl font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="you@example.com"
            value={venue.email}
            onChange={handleVenueChange}
          />
        </div>
        <div>
          <label htmlFor ="phone" className="block text-xl font-semibold mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="(123) 456-7890"
            value={venue.phone}
            onChange={handleVenueChange}
          />
        </div>
        <div>
          <label htmlFor ="street" className="block text-xl font-semibold mb-2">Street Address</label>
          <input
            type="text"
            id="street"
            name="street"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="123 Main Street"
            value={venue.street}
            onChange={handleVenueChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor ="city" className="block text-xl font-semibold mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="New York"
              value={venue.city}
            onChange={handleVenueChange}
            />
          </div>
          <div>
            <label htmlFor ="state" className="block text-xl font-semibold mb-2">State</label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="NY"
              value={venue.state}
              onChange={handleVenueChange}
            />
          </div>
          <div>
            <label htmlFor ="zip" className="block text-xl font-semibold mb-2">ZIP Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="10001"
              value={venue.zip}
            onChange={handleVenueChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingestion_1;
