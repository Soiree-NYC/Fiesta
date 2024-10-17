import { FC } from 'react';

interface Props {
  host: string,
};

const HostInfo: FC<Props> = ({ host, }) => {
  return (
    <div className='flex gap-2 items-center'>
      <img
        src="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="rounded-full h-10 w-10 object-cover"
        alt="wtf" />
      <div>
        <strong>Hosted by {host}</strong>
        <p>Verified Host</p>
      </div>
    </div>
  );
};

export default HostInfo;
