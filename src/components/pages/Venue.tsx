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
    '2 restrooms',
  ];

  return (
    <div className="px-8 m-10 font-roboto flex flex-col gap-5">
      <PhotoCase title="The Folly" mainImg="https://lh3.googleusercontent.com/p/AF1QipMtfxRzAnzUzNNjWeYBner5wRQQb56PyPY-JtwH=s680-w680-h510" xImgs={xImgs} />

      <div className="grid grid-cols-2 ">
        <div>
          <QuickInfo desx={desx}/>
          <QuickInfo desx={desx}/>
          <QuickInfo desx={desx}/>
        </div>
        <CheckoutConfig />
      </div>
    </div>
  );
};

export default Venue;
