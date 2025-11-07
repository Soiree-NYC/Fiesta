import { FeatureKeys } from '../enums/Feature.ts';
import { MenuOptionsKeys } from './MenuOptions.ts';
import NYCNeighborhoods from './NYC_Neighborhoods.ts';
import { Publication } from './WriteUps.ts';
import { Time } from './Time.ts';

type Venue = {
  id: number;
  name: string;
  description: string;
  email: string;
  phone: string | null,
  street: string | null,
  city: string | null,
  state: string | null,
  zip: string | null,
  neighborhood: NYCNeighborhoods | null,
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
  writeUps: Publication[];
  open_at: Time;
  close_at: Time;
};

export type { Venue };
