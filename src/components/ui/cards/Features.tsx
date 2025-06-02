import { FC } from 'react';
import { FeatureKeys, features as featureDetails } from '../../../shared/enums/Feature';

type Props = {
  features: FeatureKeys[];
};

const Features: FC<Props> = ({ features }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <img src='https://img.icons8.com/?size=25&id=7856&format=png&color=000000'/>
        <strong className='text-xl'>Amenities</strong>
      </div>
      <div className="flex items-center flex-wrap gap-1 text-sm text-black">
        {features.map((feature, i) => {
          const { description } = featureDetails[feature];

          return (
            <div key={i} className='mt-2 px-2 py-2 border rounded-full'>
              <span>{description}</span>
            </div>
          )})}
      </div>
    </div>
  );
};

export default Features;
