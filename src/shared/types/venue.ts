import { Features } from '../../shared/enums/featureDetails.ts';
import NYCNeighborhoods from './NYC_Neighborhoods.ts';

type Venue = {
  address: string;
  basePrice: number;
  description: string;
  features: Features;
  host: string;
  hallmarks: string[],
  id: number;
  name: string;
  neighborhood: NYCNeighborhoods;
  photos: string[],
  rating: number;
};

export type { Venue };
