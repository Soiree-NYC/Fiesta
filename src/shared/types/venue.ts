import { FeatureKeys } from '../enums/Feature.ts';
import { MenuOptionsKeys } from './MenuOptions.ts';
import NYCNeighborhoods from './NYC_Neighborhoods.ts';
import { Time } from './Time.ts';
import { Publication } from './WriteUps.ts';

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
  menuOptions: MenuOptionsKeys[];
  neighborhood: NYCNeighborhoods;
  writeUps: Publication[];
};

export type { Venue };
