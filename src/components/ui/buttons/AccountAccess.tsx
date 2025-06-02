import { FC } from 'react';

type Props = {
  setter: React.Dispatch<React.SetStateAction<boolean>>;
  getter: boolean;
};

const AccountAccess: FC<Props> = ({ setter, getter }) => {
  const handleClick = () => {
    setter(!getter);
  };

  return (
    <button
      className='hover:shadow-md border p-1 px-4 rounded-full flex gap-3 items-center'
      onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1f5" height="15" viewBox="0 0 50 50"><path  d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg>
      <img width="25" height="25" src="https://img.icons8.com/ios/50/000000/shopping-cart--v1.png" alt="shopping-cart--v1"/>
    </button>
  );
};

export default AccountAccess;
