import { FC } from 'react';

type Props = {
  title: string;
  callback: () => void;
  styles?: string;
};

const SpecialButton: FC<Props> = ({ title, callback, styles }) => {
  return (
    <button
      onClick={callback}
      className={`relative p-4 rounded-2xl overflow-hidden group ${styles || 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500'}`}>
      <span className="relative z-10">{title}</span>
      <span className="absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-300 group-hover:border-transparent group-hover:animate-sparkle bg-gradient-to-r from-white/30 via-transparent to-white/30 bg-[length:200%_100%]"></span>
    </button>
  );
};

export default SpecialButton;
