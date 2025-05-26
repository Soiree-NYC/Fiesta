import { Dispatch, ChangeEvent, SetStateAction } from 'react';

type Pricing = {
  price_per_hour: string,
  price_per_day: string,
  currency: 'USD',
};

type Props = {
  pricing: Pricing;
  pricingSetter: Dispatch<SetStateAction<Pricing>>;
};

const Ingestion_5 = ({ pricing, pricingSetter, }: Props) => {
   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    pricingSetter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-6 text-xl">
      <h2 className="text-4xl font-bold text-center">Set your base price</h2>
      <p>This is the default price for any space at your venue.</p>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <label className="w-40 font-medium">Price per Hour:</label>
        <input
          type="number"
          name="price_per_hour"
          value={pricing.price_per_hour}
          onChange={handleChange}
          placeholder="e.g. 50"
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-60"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <label className="w-40 font-medium">Price per Day:</label>
        <input
          type="number"
          name="price_per_day"
          value={pricing.price_per_day}
          onChange={handleChange}
          placeholder="e.g. 300"
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-60"
        />
      </div>
    </div>
  );
};

export default Ingestion_5;