import { FC, } from 'react';

type Props = {
  title: string;
  mainImg: string;
  xImgs: string[];
};

const PhotoCase: FC<Props> = ({ title, mainImg, xImgs }) => {
  return (
    <div className="backdrop-blur-sm">
      <div className="flex justify-between">
        <h1 className="text-white text-2xl my-4 font-roboto">{title}</h1>
        <div className="flex gap-5">
          <div className="flex items-center gap-1">
            <img src="https://img.icons8.com/?size=20&id=FupVmEePjs1T&format=png&color=ffffff" alt="" />
            <span className="text-white">Share</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="https://img.icons8.com/?size=20&id=87&format=png&color=ffffff" alt="" />
            <span className="text-white">Save</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1">
        <img
          className="w-full h-[38rem] object-cover rounded-l-2xl"
          src={mainImg}
          alt="" />

        <div className="grid grid-cols-2 gap-1">
          {xImgs.map((src, i) => (
            <img
              key={i}
              className={`w-full h-[18.9rem] object-cover ${i === 1 ? 'rounded-tr-2xl' : ''} ${i === 3 ? 'rounded-br-2xl' : ''}`}
              src={src}
              alt={`${title} side image`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoCase;
