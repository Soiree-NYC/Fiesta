import { FC, ButtonHTMLAttributes } from 'react';

type Props = {
  title: string;
  callback: () => void;
  textColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const RoundedButton: FC<Props> = ({ title, callback, textColor='text-white' }) => {
  return (
    <button
      onClick={callback}
      className={`relative border rounded-lg text-xl p-4 overflow-hidden group transition-all duration-300 ${textColor} border-gray-300 hover:border-gray-400`}>
      
      {/* Text */}
      <span className="relative z-10">{title}</span>
      
      {/* Shimmer overlay */}
      <span className="absolute inset-0 border-2 border-transparent rounded-lg 
        transition-all duration-300 group-hover:border-transparent group-hover:animate-sparkle 
        bg-gradient-to-r from-white/30 via-transparent to-white/30 
        bg-[length:200%_100%] pointer-events-none"></span>
    </button>
  );
};

export default RoundedButton;
