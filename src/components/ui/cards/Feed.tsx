import { FC, } from 'react';
import { Venue } from '../../../shared/types/venue';
import { useNavigate } from 'react-router-dom';

import SimpleCard from './SimpleCard';

type Props = {
  data: Venue[];
};

const Feed: FC<Props> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className='gap-5 grid  md:grid-cols-3 grid-cols-5 fit-content'>
      {data.map((item, i) => {
        const {
          id,
          name,
          description,
          neighborhood,
          basePrice,
          photos,
        } = item;

        return (
        <div key={i}>
          <SimpleCard
            title={name}
            neighborhood={neighborhood}
            price={basePrice}
            description={description}
            image={photos[0]}
            callback={() => navigate(`/venue/${id}`)} />
        </div>
      )})}
    </div>
  );
};

export default Feed;
