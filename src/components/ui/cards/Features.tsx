import { FC } from 'react';
import { FeatureKeys, features as featureDetails } from '../../../shared/enums/Feature';

type Props = {
  features: FeatureKeys[];
};

const Features: FC<Props> = ({ features }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <img src='https://img.icons8.com/?size=20&id=7856&format=png&color=ffffff'/>
        <strong className='text-xl'>Amenities</strong>
      </div>
      <div className="flex items-center flex-wrap gap-2 text-sm">
        {features.map((feature, i) => {
          const { src, description } = featureDetails[feature];

          return (
            <div key={i} className='flex justify-center mt-2 px-2 py-2 border rounded-full'>
              <img src={src} alt="" />
              <span className='ml-2'>{description}</span>
            </div>
          )})}
      </div>
    </div>
  );
};

export default Features;
