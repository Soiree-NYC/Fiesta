import { FeatureKeys } from '../enums/Feature.ts';
import { MenuOptionsKeys } from './MenuOptions.ts';
import NYCNeighborhoods from './NYC_Neighborhoods.ts';
import { Publication } from './WriteUps.ts';

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
  amenities: FeatureKeys[];
  menuOptions: MenuOptionsKeys[];
  writeUps: Publication[];
};

export type { Venue };
