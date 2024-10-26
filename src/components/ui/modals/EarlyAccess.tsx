

const EarlyAccess = () => {
  return (
    <div className='text-xl text-white font-roboto w-full leading-none flex flex-col gap-20 p-28 bg-black bg-opacity-50'>
      <h1 className='text-[6rem] font-bold'>
        Soirée helps NYC bars and restaurants fill their private event spaces.
      </h1>

      <p>
        Soirée is the only website built to connect NYC bars and restaurants with customers look to book priate event. We manage themarketing and scheduling process - all you have to do is wait for bookings to come through the door.
      </p>

      <div className='flex flex-col gap-5'>
        <h1 className='font-bold'>EARLY ACCESS</h1>

        <p>
          We are offering bars and restaurants Early Acccess to our platform now, ahdead of our public launch in the new year. By signing up ahead of Dec 30, you can lock in the below benefits:

          <ul className='list-disc list-inside pt-10'>
            <li className='px-10'>No cost to list until the public launch, and then 6 month free</li>
            <li className='px-10'>Soirée select status, which gives your venue a prominent position on our site and makes it show up first in customers' seatch results</li>
          </ul>
        </p>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='font-bold'>SOIRÉE COSTS</h1>
          <p>
            If enrolled in the Early Access program, you don't pay until launch, and then you'll have the option to continue listing with 6 months free! To list your bar or restaurant on Soirée, we charge $100/month, or $50/month with an annual subscription. When a customer books a private event, we'll charge 5% of the minimum spend or total open bar cost (e.g., if you have a $2,000 deposit, we will charge you a $100 booking fee).
          </p>
      </div>
      <img
        className='h-10'
        src="/olive_group_gray.svg" alt="" />
    </div>
  );
};

export default EarlyAccess;
