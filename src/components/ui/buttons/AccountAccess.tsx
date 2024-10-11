import { FC } from 'react';

interface Props {
  setter: React.Dispatch<React.SetStateAction<boolean>>,
  getter: boolean,
};

const AccountAccess: FC<Props> = ({ setter, getter }) => {
  const handleClick = () => {
    setter(!getter);
  };

  return (
    <button
      className='hover:shadow-md border px-3 rounded-full flex gap-3 items-center'
      onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10" height="10" viewBox="0 0 50 50"><path fill='white' d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg>
      <img src="https://img.icons8.com/?size=25&id=7819&format=png&color=ffffff" alt="Account Icon" className='text-sm' />
    </button>
  );
};

export default AccountAccess;
