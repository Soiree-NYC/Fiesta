import React from 'react';

type Accessibility = {
  ada_compliant: boolean | null,
  elevator: boolean | null,
  ramp: boolean | null,
  braille_signage: boolean | null,
  accessible_restroom: boolean | null,
};

type Props = {
  accessibility: Accessibility;
  accessibilitySetter: React.Dispatch<React.SetStateAction<Accessibility>>;
};

const Ingestion_2 = ({ accessibility, accessibilitySetter, }: Props) => {
  const handleAccessibilityChange = (name: keyof Accessibility, value: boolean) => {
    accessibilitySetter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex flex-col gap-6 text-2xl">
        <h1 className="text-6xl font-bold text-center">Tell us about the accessibility of your venue</h1>

        {[
          { name: "ada_compliant", label: "Does this venue meet ADA Compliance standards?" },
          { name: "elevator", label: "Is there an elevator available on the premises?" },
          { name: "ramp", label: "Is there a wheelchair accessible ramp?" },
          { name: "braille_signage", label: "Is Braille signage available throughout the venue?" },
          { name: "accessible_restroom", label: "Is there a wheelchair accessible restroom available?" },
        ].map(({ name, label }) => (
          <div key={name}>
            <p className="mb-2 font-medium">{label}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleAccessibilityChange(name as keyof Accessibility, true)}
                className={`px-4 py-2 rounded transition ${
                  accessibility[name as keyof Accessibility] === true
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => handleAccessibilityChange(name as keyof Accessibility, false)}
                className={`px-4 py-2 rounded transition ${
                  accessibility[name as keyof Accessibility] === false
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
  )
};

export default Ingestion_2;
