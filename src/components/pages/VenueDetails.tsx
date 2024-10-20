import { useState, useEffect, } from 'react';
import { Venue } from '../../shared/types/venue';
import { useParams } from "react-router-dom";

import PhotoCase from "../ui/cards/PhotoCase";
import QuickInfo from "../ui/cards/QuickInfo";
import HostInfo from "../ui/cards/HostInfo";
import CheckoutConfig from "../ui/cards/CheckoutConfig";
import Highlights from "../ui/cards/Highlights";
import Features from "../ui/cards/Features.tsx";

const VenueDetails = () => {
  const [loading, setLoading] = useState(false);
  const [venue, setVenue] = useState<Venue | null>(null);
  const [error, setError] = useState(null);
  const { id } = useParams<{id: string}>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/data/venues.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const jsonData: Venue[] = await response.json();
        console.log(jsonData)
        console.log('yo')

        const foundVenue = jsonData.find(v => v.id === parseInt(id || '', 10));
        if (!foundVenue) throw new Error('Venue not found');
        console.log(foundVenue)
        setVenue(foundVenue);
      } catch (err) {
        // @ts-ignore
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!venue) return <div className='text-white text-roboto'>No venue found</div>;

  const { name, description, photos, hallmarks, host } = venue;
  const mainImg = photos[0];
  const secondaryImgs = photos.slice(1);

  return (
    <main className="font-roboto backdrop-blur-sm">
      <div className="flex flex-col gap-10">
        <PhotoCase title={name} mainImg={mainImg} xImgs={secondaryImgs} />

        <div className="grid grid-cols-2 backdrop-blur-md rouned-r-2xl">
          <div className="p-4 flex flex-col gap-5 text-white">
            <QuickInfo description={description} desx={hallmarks} name={name}/>
            <HostInfo host={host} />
            <hr />
            <Highlights />
            <hr className="text-white" />
            <Features />
          </div>
          <CheckoutConfig />
        </div>
      </div>
    </main>
  );
};

export default VenueDetails;
