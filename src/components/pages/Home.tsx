import { 
  FC, Dispatch, SetStateAction,
  useState, useEffect,
 } from 'react';
import axios from 'axios';

import SlideMenu from "../ui/inputs/SlideMenu";
import Feed from "../ui/cards/Feed";
import SimpleCard from "../ui/cards/SimpleCard";
import Primary from "../ui/buttons/Primary";

type Props = {
  venues: {
    setter: Dispatch<SetStateAction<number>>;
    getter: number;
  };
};

const Home: FC<Props> = ({ venues }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('data/venues.json');
        setData(response.data);
      } catch (err) {
        // @ts-ignore
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const {setter, getter} = venues;

  const handleClick = () => {
    setter(getter + 1);
  };

  const items = [
    <Primary
      label='West Village'
      callback={handleClick}
      bold
    />,
    <Primary
      label='Chelsea'
      callback={handleClick}
      bold
    />,
    <Primary
      label='FIDI'
      callback={handleClick}
      bold
    />,
    <Primary
      label='East Village'
      callback={handleClick}
      bold
    />,
    <Primary
      label='Upper West Side'
      callback={handleClick}
      bold
    />,
    <Primary
      label='SOHO'
      callback={handleClick}
      bold
    />,
    <Primary
      label={`Hell's Kitchen`}
      callback={handleClick}
      bold
    />,
    <Primary
      label='DUMBO'
      callback={handleClick}
      bold
    />,
    <Primary
      label='Prospect Heights'
      callback={handleClick}
      bold
    />,
  ];

  return (
    <main className="py-5">
      <SlideMenu items={items} />
      {/* @ts-ignore */}
      <Feed data={data} />
    </main>
  );
};

export default Home;
