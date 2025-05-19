import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

type Space = {
  space_name: string;
  capacity: string;
  indoor: boolean;
  outdoor: boolean;
  square_feet: string;
  photos: File[];
};

type Props = {
  spaces: Space[];
  spacesSetter: Dispatch<SetStateAction<Space[]>>;
};

const Ingestion_8 = ({ spaces, spacesSetter, }: Props) => {
  const [space, setSpace] = useState<Space>({
    space_name: '',
    capacity: '',
    indoor: false,
    outdoor: false,
    square_feet: '',
    photos: [],
  });

  const handleSpaceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpace(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setSpace(prev => ({
      ...prev,
      photos: [...prev.photos, ...imageFiles],
    }));
  };

  const removePhoto = (index: number) => {
    setSpace(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index),
    }));
  };

  const removeSpace = (index: number) => {
    const result = spaces.filter((_, i) => i !== index);
    spacesSetter([...result])
  };

  const addSpace = () => {
    spacesSetter([...spaces, space]);
    setSpace({
      space_name: '',
      capacity: '',
      indoor: false,
      outdoor: false,
      square_feet: '',
      photos: [],
    })
  };

  const toggleLayout = (type: 'indoor' | 'outdoor') => {
    setSpace(prev => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className='flex flex-col gap-10 place-content-between'>
      <h2 className="text-4xl font-bold text-center">Venue Capacity & Layout</h2>
      <div className='flex flex-row gap-10'>
        <div className="flex flex-col gap-6 text-xl w-1/2">
          <div className="flex flex-col gap-4">
            <label className="w-50 font-medium">What do you call this area?</label>
            <input
              type="text"
              name="space_name"
              value={space.space_name}
              onChange={handleSpaceChange}
              placeholder="e.g. Mezzainine, Main Floor"
              className="border border-gray-300 rounded px-4 py-2 w-full text-black" />
          </div>

          <div className="flex flex-col gap-4">
            <label className="w-full font-medium">How many guests would fill this space?</label>
            <input
              type="number"
              name="capacity"
              value={space.capacity}
              onChange={handleSpaceChange}
              placeholder="e.g. 150"
              className="border border-gray-300 rounded px-4 py-2 w-full text-black" />
          </div>

          <div className="flex flex-col gap-4">
            <label className="w-full font-medium">What is the square footage?</label>
            <input
              type="number"
              name="square_feet"
              value={space.square_feet}
              onChange={handleSpaceChange}
              placeholder="e.g. 1200"
              className="border border-gray-300 rounded px-4 py-2 w-full text-black" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => toggleLayout('indoor')}
                className={`px-4 py-2 rounded ${
                  space.indoor ? 'bg-green-600 text-white' : 'bg-gray-200 text-black'
                }`} >
                Indoor
              </button>
              <button
                type="button"
                onClick={() => toggleLayout('outdoor')}
                className={`px-4 py-2 rounded ${
                  space.outdoor ? 'bg-green-600 text-white' : 'bg-gray-200 text-black'
                }`}>
                Outdoor
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium">Add some recent photos</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoChange}
              className="w-full md:w-60" />
            {space.photos.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {space.photos.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`space-${index}`}
                      className="w-full h-32 object-cover rounded" />
                    <button
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={addSpace}
            className={`px-4 py-2 rounded-3xl bg-gray-200 text-black
            }`} >
            Add Space
          </button>
        </div>
        {
          spaces.length > 0 && <div className='border-gray-100 border w-1/2'>
            {
              spaces.map((space, i) => {
                return(
                  <div 
                    key={i}
                    className='flex place-content-between p-5 m-8 border rounded-lg'>
                    <span>
                      {space.space_name}
                    </span>
                    <button
                      type='button'
                      onClick={() => removeSpace(i)}
                      className="top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                      x
                    </button>
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    </div>
  );
};

export default Ingestion_8;
