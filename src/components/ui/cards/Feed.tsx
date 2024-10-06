import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode[]
};

const Feed: FC<Props> = ({ children }) => {
  return (
    <div className='h-96 border rounded-lg shadow-md'>
      {children.map((child, i) => (
        <div key={i}>{child}</div>
      ))}
    </div>
  );
};

export default Feed;
