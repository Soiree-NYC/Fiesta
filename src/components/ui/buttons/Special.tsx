import { FC } from 'react';

type Props = {
  title: string;
  callback: () => void;
  styles?: string;
}
const Special: FC<Props> = ({ title, callback, styles }) => {
  return (
    <button
      onClick={callback}
      className={styles  ? `${styles}` : `border bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-4 rounded-2xl`}>
      {title}
    </button>
  );
};

export default Special;
