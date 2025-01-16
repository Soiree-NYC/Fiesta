import { 
  FC, Dispatch, SetStateAction,
  useState, useEffect,
 } from 'react';
import axios from 'axios';

import SlideMenu from "../ui/inputs/SlideMenu";
import Feed from "../ui/cards/Feed";
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

  console.log(loading, error);

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
      frosted
      bold
    />,
    <Primary
      label='Chelsea'
      callback={handleClick}
      frosted
      bold
    />,
    <Primary
      label='FIDI'
      callback={handleClick}
      frosted
      bold
    />,
    <Primary
      label='East Village'
      callback={handleClick}
      frosted
      bold
    />,
    <Primary
      label='Upper West Side'
      callback={handleClick}
      frosted
      bold
    />,
    <Primary
      label='SOHO'
      callback={handleClick}
      frosted
      bold
    />,
    <Primary
      label={`Hell's Kitchen`}
      callback={handleClick}
      frosted
      bold
    />,
    <Primary
      label='DUMBO'
      callback={handleClick}
      frosted
      bold
    />,
    <Primary
      label='Prospect Heights'
      callback={handleClick}
      frosted
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
