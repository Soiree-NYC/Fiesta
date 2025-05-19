import React from 'react'

type Parking = {
  street_parking: boolean | null;
  garage: boolean | null;
  valet: boolean | null;
  nearby_lot: boolean | null;
};
type Props = {
  parking: Parking;
  parkingSetter: React.Dispatch<React.SetStateAction<Parking>>;
};

const Ingestion_3 = ({ parking, parkingSetter, }: Props) => {
  const handleParkingChange = (name: keyof Parking, value: boolean) => {
    parkingSetter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex flex-col gap-6 text-2xl">
        <h1 className="text-6xl font-bold text-center">Tell us about the accessibility of your venue</h1>

        {[
          { name: "street_parking", label: "Is there street parking available?" },
          { name: "garage", label: "Is there garage parking close by?" },
          { name: "valet", label: "Do you offer valet parking?" },
          { name: "nearby_lot", label: "Is there a nearby parking lot?" },
        ].map(({ name, label }) => (
          <div key={name}>
            <p className="mb-2 font-medium">{label}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleParkingChange(name as keyof Parking, true)}
                className={`px-4 py-2 rounded transition ${
                  parking[name as keyof Parking] === true
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => handleParkingChange(name as keyof Parking, false)}
                className={`px-4 py-2 rounded transition ${
                  parking[name as keyof Parking] === false
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

export default Ingestion_3;