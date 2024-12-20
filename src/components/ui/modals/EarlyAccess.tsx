import Primary from "../buttons/Primary";

const EarlyAccess = () => {
  return (
    <div className='md:text-4xl text-white font-thin font-roboto w-dvm leading-none flex flex-col gap-32 bg-black bg-opacity-50 px-10 py-10 h-[80rem] overflow-y-auto'>
      <h1 className='text-center md:text-left text-lg leading-5 md:leading-none md:text-[7rem] font-bold'>
        Soirée helps NYC bars and restaurants fill their private event spaces.
      </h1>

      <p>
        Soirée is the only website built to connect NYC bars and restaurants with customers look to book priate event. We manage the marketing and scheduling process - all you have to do is wait for bookings to come through the door.
      </p>

      <div className='flex flex-col gap-5'>
        <h1 className='font-bold'>HOW IT WORKS</h1>

        <ul className='flex flex-col gap-5 list-decimal list-inside leading-5 md:leading-10'>
          <li>You list your private event space on our site.</li>
          <li>We market your space to customers looking to book a private event.</li>
          <li>You communicate with customers on our platform via email or text to finalize the booking.</li>
          <li>We collect payments for deposits/minimums on your behalf.</li>
          <li>You host the event!</li>
        </ul>
      </div>

      <div className='flex flex-col gap-5'>
        <h1 className='font-bold'>EARLY ACCESS</h1>

        <p>
          We are offering bars and restaurants Early Acccess to our platform now, ahdead of our public launch in the new year. By signing up ahead of Dec 30, you can lock in the below benefits:

          <ul className='flex flex-col gap-5 list-decimal list-inside pt-10 leading-5 md:leading-none'>
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

      <div className="md:text-4xl text-center">
        <strong>
          Join the Spaniard, the Wren, Judy Z's, and dozens of other NYC bars and restaurants signed up for Soirée today; Early Access is only available until December 30.
        </strong>
      </div>

      <Primary link="/home" img="/olive_group_gray.svg" frosted bold/>
    </div>
  );
};

export default EarlyAccess;
