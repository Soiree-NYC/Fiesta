import {
  FC, ReactNode, Fragment,
} from 'react';

type Props = {
  items: ReactNode[][];
};

const DropMenu: FC<Props> = ({ items }) => {
  return (
    <div className="absolute w-48 mt-12 bg-black bg-opacity-50 border border-gray-200 rounded-md shadow-lg z-20">
      <ul className="py-2 text-xs  backdrop-blur-sm">
        {items.map((subArray, index) => (
          <Fragment key={index}>
              {subArray.map((item, subIndex) => (
                <li key={subIndex} className="cursor-pointer">
                  {item}
                </li>
              ))}
            {index < items.length - 1 && <hr className='mx-2'/>}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default DropMenu;
