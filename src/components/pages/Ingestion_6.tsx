import { Dispatch, SetStateAction } from 'react';

type Catering = {
  in_house: boolean | null,
  external_allowed: boolean | null,
  kitchen_available: boolean | null,
};

type Props = {
  catering: Catering;
  cateringSetter: Dispatch<SetStateAction<Catering>>;
};

const Ingestion_6 = ({ catering, cateringSetter, }: Props) => {
  const handleCateringChange = (name: keyof Catering, value: boolean) => {
    cateringSetter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex flex-col gap-6 text-2xl">
        <h1 className="text-6xl font-bold text-center">Let's talk catering</h1>

        {[
          { name: "in_house", label: "Can the kitchen support large groups?" },
          { name: "external_allowed", label: "Is external catering allowed?" },
          { name: "kitchen_available", label: "Will the kitchen prepare bespoke menus?" },
        ].map(({ name, label }) => (
          <div key={name}>
            <p className="mb-2 font-medium">{label}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleCateringChange(name as keyof Catering, true)}
                className={`px-4 py-2 rounded transition ${
                  catering[name as keyof Catering] === true
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => handleCateringChange(name as keyof Catering, false)}
                className={`px-4 py-2 rounded transition ${
                  catering[name as keyof Catering] === false
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ingestion_6;
