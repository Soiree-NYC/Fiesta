import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode[]
};

const Feed: FC<Props> = ({ children }) => {
  return (
    <div className='flex justify-center items-center gap-1 grid grid-cols-5 md:grid-cols-3 fit-content'>
      {children.map((child, i) => (
        <div key={i}>{child}</div>
      ))}
    </div>
  );
};

export default Feed;
