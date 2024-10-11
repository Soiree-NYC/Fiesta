const SimpleCard = () => {
  return (
    <div className='h-[20rem] relative flex flex-col gap-1 justify-between backdrop-blur-md rounded-lg mb-4 text-white bg-black bg-opacity-40'>
      <div className='p-3'>
        <p className='text-xl'>Hotel Beacon</p>
        <p className='text-xs'>UWS</p>
      </div>

      <img src='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg' className='h-4/5 object-cover rounded-b-md'/>

      <div className='absolute flex flex-col justify-between gap-3 p-3 bottom-0 z-20 bg-gradient-to-t from-black/100 to-transparent rounded-b-md'>
        <p className='text-xs/[10px] bottom-[50px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='flex justify-between'>
          <div className='flex flex-col'>
            <p className='text-xs'>$80 <span className='text-xs line-through'>$120</span></p>
            <p className='text-xs'>per person</p>
          </div>
          <button className='border rounded-md px-2 py-1 text-xs'>Add to List</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
