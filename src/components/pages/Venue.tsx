import PhotoCase from "../ui/cards/PhotoCase";
import QuickInfo from "../ui/cards/QuickInfo";
import CheckoutConfig from "../ui/cards/CheckoutConfig";

const Venue = () => {
  const xImgs = [
    'https://lh3.googleusercontent.com/p/AF1QipNnuTBiDHJxbthSFW_mHc6HhdKD6CvKbN-vqmoj=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipNasiiio_HtpVIaHV-WMHNi6Fb-TRh-CmQizTww=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipNkpiTO_2alAejhy34k1Ak10YaYh4pAox32qt98=s680-w680-h510',
    'https://lh3.googleusercontent.com/p/AF1QipNlG1trQ67Jy5b9Rq6--QJBCZZDSWw8p3OpQoIK=s680-w680-h510',
  ];
  const desx = [
    '170 max',
    'Bespoke Catering',
    'Mezzanine',
  ];

  return (
    <div className="px-8 m-10 font-roboto flex flex-col gap-5">
      <PhotoCase title="The Folly" mainImg="https://lh3.googleusercontent.com/p/AF1QipMtfxRzAnzUzNNjWeYBner5wRQQb56PyPY-JtwH=s680-w680-h510" xImgs={xImgs} />

      <div className="grid grid-cols-2 backdrop-blur-md rouned-r-2xl">
        <div className="p-4 flex flex-col gap-5">
          <QuickInfo desx={desx} />
          <div className='flex gap-2 items-center text-white'>
            <img
              src="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-full h-10 w-10 object-cover"
              alt="wtf" />
            <div>
              <strong>Hosted by Jon P</strong>
              <p>Verified Host</p>
            </div>
          </div>
          <hr />
          
        </div>
        <CheckoutConfig />
      </div>
    </div>
  );
};

export default Venue;
