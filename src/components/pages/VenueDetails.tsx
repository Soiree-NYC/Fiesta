import { FC } from "react";
import { Venue } from "../../shared/types/venue";

import PhotoCase from "../ui/cards/PhotoCase";
import QuickInfo from "../ui/cards/QuickInfo";
import HostInfo from "../ui/cards/HostInfo";
import CheckoutConfig from "../ui/cards/CheckoutConfig";
import Highlights from "../ui/cards/Highlights";
import Offerings from "../ui/cards/Offerings";

const VenueDetails: FC<Venue> = ({ photos, highlights, host }) => {
  const mainImg = photos[0];
  const secondaryImgs = photos.slice(1);

  return (
    <main className="font-roboto">
      <div className="flex flex-col gap-10">
        <PhotoCase title="The Folly" mainImg={mainImg} xImgs={secondaryImgs} />

        <div className="grid grid-cols-2 backdrop-blur-md rouned-r-2xl">
          <div className="p-4 flex flex-col gap-5 text-white">
            <QuickInfo desx={highlights} />
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

export default VenueDetails;
