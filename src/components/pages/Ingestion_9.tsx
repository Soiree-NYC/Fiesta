import { Dispatch, SetStateAction } from 'react';

type CancellationPolicy = {
  policy: string;
  days_notice_required: number;
};

type Props = {
  cancellationPolicy: CancellationPolicy;
  cancellationsPolicySetter: Dispatch<SetStateAction<CancellationPolicy>>;
};

const Ingestion_9 = ({ cancellationPolicy, cancellationsPolicySetter }: Props) => {
  const policies: CancellationPolicy[] = [
    { policy: '100% deposit return with 7 days notice', days_notice_required: 7 },
    { policy: '0% deposit return with 24 hours notice', days_notice_required: 1 },
  ];

  const handlePolicyChange = (pol: CancellationPolicy ) => {
    cancellationsPolicySetter(pol);
  };

  return (
    <div>
      <h1 className="text-6xl font-bold text-center mb-10">Cancellation Policy</h1>
      <div className="flex flex-col gap-6 text-2xl">
        {policies.map((pol, index) => {
          const isSelected = pol.policy === cancellationPolicy.policy;

          return (
            <button
              type='button'
              key={index}
              onClick={()=> handlePolicyChange(pol)}
              className={`m-4 border p-6 rounded-lg transition text-center ${
                isSelected
                  ? 'border-green-600 bg-green-100 text-green-800 font-semibold'
                  : 'border-gray-300 bg-white text-black'
              }`}
            >
              {pol.policy}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Ingestion_9;
