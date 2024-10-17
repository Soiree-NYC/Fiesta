import { FC } from 'react';

interface Prop {
  desx: string[]
};

const QuickInfo: FC<Prop> = ({desx}) => {
  return (
    <div>
        <h1 className="text-3xl text-white">Gastropub and Seafare</h1>
        <div className="flex flex-row gap-1">
          {desx.map((des, i) => (
            <div className="flex justify-center text-white gap-1">
              <p className="text-white self-stretch text-lg mb-4">{des}</p>
              {i < desx.length - 1 && (<span className="text-3xl">•</span>)}
            </div>
          ))}
        </div>
      </div>
  )
}

export default QuickInfo