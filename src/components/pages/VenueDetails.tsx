import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { Venue } from '../../shared/types/Venue.ts';
import { Rating, VenueRating } from '../../shared/types/Rating.ts'

import PhotoCase from "../ui/cards/PhotoCase";
import QuickInfo from "../ui/cards/QuickInfo";
import HostInfo from "../ui/cards/HostInfo";
import CheckoutConfig from "../ui/cards/CheckoutConfig";
import Highlights from "../ui/cards/Highlights";
import Features from "../ui/cards/Features.tsx";

const VenueDetails = () => {
  const [loading, setLoading] = useState(false);
  const [venue, setVenue] = useState<Venue | null>(null);
  const [venueRating, setVenueRating] = useState<VenueRating | null>(null);
  const [error, setError] = useState(null);
  const { id } = useParams<{id: string}>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch venue data
        const venueResponse = await fetch('/data/venues.json');
        if (!venueResponse.ok) throw new Error('Network response was not ok');
        const venueData: Venue[] = await venueResponse.json();

        const foundVenue = venueData.find(v => v.id === parseInt(id || '', 10));
        if (!foundVenue) throw new Error('Venue not found');
        setVenue(foundVenue);

        // Fetch ratings data
        const ratingsResponse = await fetch('/data/ratings.json');
        if (!ratingsResponse.ok) throw new Error('Network response was not ok');
        const ratingsData = await ratingsResponse.json();

        const venueRatings = ratingsData.filter((r: { id: number; }) => r.id === foundVenue.id);
        //@ts-ignore
        const avgRating = Math.round(venueRatings.reduce((sum: number, r: { rating: Rating }) => sum + r.rating, 0) / venueRatings.length * 100)/100 || 0;

        // Create an array of rating objects without the id
        // @ts-ignore
        const ratingsArray = venueRatings.map(({ id, ...rest }) => rest);
        setVenueRating({ avg: avgRating, ratings: ratingsArray });

      } catch (err) {
        // @ts-ignore
        setError(err.message);
      } finally {
        setLoading(false);
      };
    };

    fetchData();
  }, []);

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!venue) return <div className='text-white text-roboto'>No venue found</div>;

  const {
    name,
    description,
    open_at,
    close_at,
    host,
    basePrice,
    standing,
    hallmarks,
    photos,
    features,
    menuOptions,
    neighborhood,
    writeUps,
  } = venue;

  const [mainImg, secondaryImgs] = [photos[0], photos.slice(1)];

  return (
    <main className="font-roboto backdrop-blur-sm">
      <div className="flex flex-col gap-10">
        <PhotoCase title={name} mainImg={mainImg} xImgs={secondaryImgs} />

        <div className="grid grid-cols-2 backdrop-blur-md rouned-r-2xl">
          <div className="p-4 flex flex-col gap-5 text-white">
            <QuickInfo
              description={description}
              desx={hallmarks}
              name={name}
              open_at={open_at}
              close_at={close_at}
              //@ts-ignore
              avg={venueRating.avg}
              neighborhood={neighborhood}
              />
            <HostInfo host={host} />
            <hr />
            <Highlights writeUps={writeUps} options={menuOptions} />
            <hr className="text-white" />
            <Features features={features} />
          </div>
          <CheckoutConfig basePrice={basePrice} standing={standing} />
        </div>
      </div>
    </main>
  );
};

export default VenueDetails;
