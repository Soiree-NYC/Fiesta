import React, { SetStateAction } from 'react'

type Day = {
  day: string;
  open_time: string;
  close_time: string;
};

type Props = {
  hours: Day[];
  hoursSetter: React.Dispatch<SetStateAction<Day[]>>;
};

const Ingestion_4 = ({ hours, hoursSetter, }: Props) => {
   const handleTimeChange = (index: number, field: 'open_time' | 'close_time', value: string) => {
    hoursSetter(prev => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  };

  return (
    <>
      <div className="flex flex-col gap-6 text-xl justify-center">
        <h2 className="text-4xl font-bold text-center mb-10">Set Your Weekly Business Hours</h2>

        {hours.map((entry, index) => (
          <div key={entry.day} className="flex flex-col justify-center md:flex-row items-start md:items-center gap-4">
            <div className="w-32 font-semibold">{entry.day}</div>

            <div className="flex gap-2 items-center">
              <label className="text-gray-300">Open:</label>
              <input
                type="time"
                value={entry.open_time}
                onChange={e => handleTimeChange(index, 'open_time', e.target.value)}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>

            <div className="flex gap-2 items-center">
              <label className="text-gray-300">Close:</label>
              <input
                type="time"
                value={entry.close_time}
                onChange={e => handleTimeChange(index, 'close_time', e.target.value)}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ingestion_4;
