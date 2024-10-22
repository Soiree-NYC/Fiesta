import { Link } from 'react-router-dom';

import { FC } from 'react';
import { Publication } from '../../../shared/types/WriteUps';

type Props = {
  writeUps: Publication[];
};

const Highlights: FC<Props> = ({ writeUps }) => {
  return (
    <div className="flex justify-around text-slate-white">
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="w-6">
            <img src="https://img.icons8.com/?size=50&id=532&format=png&color=ffffff" alt="" />
          </div>
          <strong>Featured in</strong>
        </div>
        <div className="flex flex-col text-sm text-slate-400">
          {writeUps.map((item: Publication, index: number) => (
            <Link key={index} to={item.src}>{item.publication}, {item.date}</Link>
         ))}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-1">
          <div className="w-6">
            <img src="https://img.icons8.com/?size=100&id=611&format=png&color=ffffff" alt="" />
          </div>
          <strong>Menu options</strong>
        </div>
        <div className="flex flex-col gap-0 text-sm text-slate-400">
          <div className="flex items-center gap-1 mt-2">
            <p>Gluten-free</p>
            <div className="w-4">
              <img src="https://img.icons8.com/?size=100&id=6758&format=png&color=ffffff" alt="" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p>Vegan</p>
            <div className="w-4">
              <img src="https://img.icons8.com/?size=100&id=3379&format=png&color=ffffff" alt="" />
            </div>
          </div>
          <div>Allergen-friendly</div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
