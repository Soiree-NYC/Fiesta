import {
  FC, Dispatch, SetStateAction,
  useState, useEffect,
} from 'react';
import axios from 'axios';

import SlideMenu from "../ui/inputs/SlideMenu";
import Feed from "../ui/cards/Feed";

type Props = {
  venues: {
    setter: Dispatch<SetStateAction<number>>;
    getter: number;
  };
};

const Home: FC<Props> = ({ venues }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(loading);

      try {
        const response = await axios.get('data/venues.json');
        const {data} = response;
        if (filter) {
          const filteredVenues = data.filter((venue: { neighborhood: string; }) => venue.neighborhood === filter);
          setData(filteredVenues);
        } else setData(data);
      } catch (err) {
        // @ts-ignore
        setError(err.message);
      } finally {
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, [data, filter]);

  const {setter, getter} = venues;

  const handleClick = (label: string) => {
    setter(getter + 1);
    setFilter(label);
  };
  const neighborhoodNames = ['West Village','Chelsea','FIDI', 'East Village','Upper West Side','SOHO',`Hell's Kitchen`,'DUMBO','Prospect Heights'];

  return (
    <main className="py-5">
      <SlideMenu items={neighborhoodNames} handler={handleClick} />
      {/* @ts-ignore */}
      <Feed data={data} />
    </main>
  );
};

export default Home;
