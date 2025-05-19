import { Dispatch, SetStateAction } from 'react';

type Licences = {
  liquor: boolean | null,
  entertainment: boolean | null,
  sound: boolean | null,
};

type Props = {
  licences: Licences;
  licencesSetter: Dispatch<SetStateAction<Licences>>;
};

const Ingestion_7 = ({ licences, licencesSetter, }: Props) => {
  const handlelicencesChange = (name: keyof Licences, value: boolean) => {
    licencesSetter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex flex-col gap-6 text-2xl">
        <h1 className="text-6xl font-bold text-center">Let's talk licences</h1>

        {[
          { name: "in_house", label: "Can the kitchen support large groups?" },
          { name: "external_allowed", label: "Is external licences allowed?" },
          { name: "kitchen_available", label: "Will the kitchen prepare bespoke menus?" },
        ].map(({ name, label }) => (
          <div key={name}>
            <p className="mb-2 font-medium">{label}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handlelicencesChange(name as keyof Licences, true)}
                className={`px-4 py-2 rounded transition ${
                  licences[name as keyof Licences] === true
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => handlelicencesChange(name as keyof Licences, false)}
                className={`px-4 py-2 rounded transition ${
                  licences[name as keyof Licences] === false
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

export default Ingestion_7;
