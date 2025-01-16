import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  label?: string;
  callback?: () => void;
  bold?: boolean;
  frosted?: boolean;
  link?: string;
  img?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const Primary: FC<Props> = ({ label, callback, bold, frosted, link, img, size }) => {
  return (
    <div>
      {link ? (
        <Link to={link}>
          <button
            onClick={callback}
            className={`border border-slate-300 hover:border-slate-50 rounded-lg px-2 py-1 ${
              size ? `text-${size}` : 'text-sm'
            } text-nowrap ${bold ? 'font-bold' : 'font-normal'} ${
              frosted ? 'bg-white text-slate-500' : 'bg-transparent text-slate-300'
            } hover:text-slate-50 hover:font-bold`}
          >
            {label}
            {img && <img src={img} alt={label || 'Image'} className="h-[5rem]" />}
          </button>
        </Link>
      ) : (
        <button
          onClick={callback}
          className={`border border-slate-300 hover:border-slate-50 rounded-lg px-2 py-1 ${
            size ? `text-${size}` : 'text-sm'
          } text-nowrap ${bold ? 'font-bold' : 'font-normal'} ${
            frosted ? 'bg-white text-slate-500' : 'bg-transparent text-slate-300'
          } hover:text-slate-500 hover:font-bold`}
        >
          {label}
          {img && <img src={img} alt={label || 'Image'} className="h-[5rem]" />}
        </button>
      )}
    </div>
  );
};

export default Primary;
