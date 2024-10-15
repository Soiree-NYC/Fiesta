import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode[]
};

const Feed: FC<Props> = ({ children }) => {
  return (
    <div className='gap-5 grid  md:grid-cols-3 grid-cols-5 fit-content'>
      {children.map((child, i) => (
        <div key={i}>{child}</div>
      ))}
    </div>
  );
};

export default Feed;
