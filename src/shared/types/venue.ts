import { FeatureKeys } from '../enums/Feature.ts';
import NYCNeighborhoods from './NYC_Neighborhoods.ts';
import { Time } from './Time.ts';
import { WriteUps } from './WriteUps.ts';

type Venue = {
  address: string;
  basePrice: number;
  description: string;
  email: string;
  features: FeatureKeys[];
  host: string;
  hallmarks: string[],
  id: number;
  name: string;
  neighborhood: NYCNeighborhoods;
  photos: string[],
  rating: number;
  reviews: number;
  standing: number;
  sitting: number;
  available: boolean;
  open_at: Time;
  close_at: Time;
  writeUps: WriteUps;
};

export type { Venue };
