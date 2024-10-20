import { Features } from '../../shared/enums/featureDetails.ts';

type venue = {
  id: number;
  name: string;
  address: string;
  rating: number;
  features: Features;
  host: string;
  hightlights: string[],
  photos: string[],
};

export type { venue };
