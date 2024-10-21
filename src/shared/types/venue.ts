import { FeatureKeys } from '../enums/featureDetails.ts';
import NYCNeighborhoods from './NYC_Neighborhoods.ts';
import { WriteUps } from './WriteUps.ts';


type Venue = {
  address: string;
  basePrice: number;
  description: string;
  features: FeatureKeys[];
  host: string;
  hallmarks: string[],
  id: number;
  name: string;
  neighborhood: NYCNeighborhoods;
  photos: string[],
  rating: number;
  reviews: number;
  writeUps: WriteUps;
};

export type { Venue };
