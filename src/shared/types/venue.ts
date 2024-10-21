import { FeatureKeys } from '../enums/Feature.ts';
import NYCNeighborhoods from './NYC_Neighborhoods.ts';
import { Time } from './Time.ts';
import { WriteUps } from './WriteUps.ts';

type Venue = {
  id: number;
  name: string;
  address: string;
  description: string;
  open_at: Time;
  close_at: Time;
  email: string;
  host: string;
  rating: number;
  available: boolean;
  basePrice: number;
  standing: number;
  sitting: number;
  hallmarks: string[],
  photos: string[],
  features: FeatureKeys[];
  neighborhood: NYCNeighborhoods;
  writeUps: WriteUps;
};

export type { Venue };
