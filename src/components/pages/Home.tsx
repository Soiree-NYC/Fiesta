import { FC, useState, useEffect } from 'react';
import axios from 'axios';

import Feed from "../ui/cards/Feed";

const Home: FC = () => {
  const [data, setData] = useState([]);
  const [_loading,setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response =
        // await axios.get('http://localhost:3000/venues/');
        await axios.get('/data/venues.json');
        const { data } = response;
        setData(data);
      } catch (err) {
        // @ts-ignore2e
        setError(err.message);
      } finally {
        setLoading(false);
        console.error(error);
      };
    };

    fetchData();
  }, []);

  return (
    <main className="py-5">
      {/* @ts-ignore */}
      <Feed data={data} />
    </main>
  );
};

export default Home;
