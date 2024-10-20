import PhotoCase from "../ui/cards/PhotoCase";
import QuickInfo from "../ui/cards/QuickInfo";
import HostInfo from "../ui/cards/HostInfo";
import CheckoutConfig from "../ui/cards/CheckoutConfig";
import Highlights from "../ui/cards/Highlights";
import Offerings from "../ui/cards/Offerings";

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
  const host = 'Jon Pietro';

  return (
    <main className="font-roboto">
      <div className="flex flex-col gap-10">
        <PhotoCase title="The Folly" mainImg="https://lh3.googleusercontent.com/p/AF1QipMtfxRzAnzUzNNjWeYBner5wRQQb56PyPY-JtwH=s680-w680-h510" xImgs={xImgs} />

        <div className="grid grid-cols-2 backdrop-blur-md rouned-r-2xl">
          <div className="p-4 flex flex-col gap-5 text-white">
            <QuickInfo desx={desx} />
            <HostInfo host={host} />
            <hr />
            <Highlights />
            <hr className="text-white" />
            <Offerings />
          </div>
          <CheckoutConfig />
        </div>
      </div>
    </main>
  );
};

export default Venue;
