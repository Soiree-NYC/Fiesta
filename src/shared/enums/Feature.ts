type FeatureKeys =
  | 'bespokeMenu'
  | 'projector'
  | 'mezzanine'
  | 'moodLighting'
  | 'soundSystem'
  | 'ac'
  | 'catering'
  | 'analogPhotobooth'
  | 'dj'
  | 'liveMusic'
  | 'parking'
  | 'wiFi'
  | 'balcony'
  | 'stage'
  | 'danceFloor'
  | 'rooftop'
  | 'outdoorSpace'
  | 'fireplace'
  ;

type FeatureValue = {
  description: string;
};

const features: Record<FeatureKeys, FeatureValue> = {
  bespokeMenu: {
    description: 'Bespoke Menu',
  },
  projector: {
    description: "Projector",
  },
  mezzanine: {
    description: "Mezzanine",
  },
  moodLighting: {
    description: "Mood-lights",
  },
  soundSystem: {
    description: "Surround sound",
  },
  ac: {
    description: "Central air",
  },
  catering: {
    description: "In-house catering",
  },
  analogPhotobooth: {
    description: "Analog photobooth",
  },
  dj: {
    description: "DJ",
  },
  liveMusic: {
    description: "Live Music",
  },
  parking: {
    description: "On-site Parking",
  },
  wiFi: {
    description: "Free Wi-Fi",
  },
  balcony: {
    description: "Balcony",
  },
  stage: {
    description: "Stage",
  },
  danceFloor: {
    description: "Dance Floor",
  },
  rooftop: {
    description: "Roof top",
  },
  outdoorSpace: {
    description: "Outdoor Space",
  },
  fireplace: {
    description: "Fireplace",
  },
};

export { features };
export type { FeatureKeys, FeatureValue };
