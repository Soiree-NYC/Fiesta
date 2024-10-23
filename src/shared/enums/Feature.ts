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
  src: string;
};

const features: Record<FeatureKeys, FeatureValue> = {
  bespokeMenu: {
    description: 'Bespoke Menu',
    src: 'https://img.icons8.com/?size=20&id=36068&format=png&color=ffffff',
  },
  projector: {
    description: "Projector",
    src: "https://img.icons8.com/?size=20&id=11263&format=png&color=ffffff",
  },
  mezzanine: {
    description: "Mezzanine",
    src: "https://img.icons8.com/?size=20&id=BrH6sMQVUNgR&format=png&color=ffffff",
  },
  moodLighting: {
    description: "Mood-lights",
    src: "https://img.icons8.com/?size=20&id=Hwom08A3Vybf&format=png&color=ffffff",
  },
  soundSystem: {
    description: "Surround sound",
    src: "https://img.icons8.com/?size=20&id=6GiwLz4siGKS&format=png&color=ffffff",
  },
  ac: {
    description: "Central air",
    src: "https://img.icons8.com/?size=20&id=23585&format=png&color=ffffff",
  },
  catering: {
    description: "In-house catering",
    src: "https://img.icons8.com/?size=20&id=lRyWnI4Kv32t&format=png&color=ffffff",
  },
  analogPhotobooth: {
    description: "Analog photobooth",
    src: "https://img.icons8.com/?size=20&id=26131&format=png&color=ffffff",
  },
  dj: {
    description: "DJ",
    src: "https://img.icons8.com/?size=20&id=9390&format=png&color=ffffff",
  },
  liveMusic: {
    description: "Live Music",
    src: "https://img.icons8.com/?size=20&id=SE9pJyDIMm2Z&format=png&color=ffffff",
  },
  parking: {
    description: "On-site Parking",
    src: "https://img.icons8.com/?size=20&id=10738&format=png&color=ffffff",
  },
  wiFi: {
    description: "Free Wi-Fi",
    src: "https://img.icons8.com/?size=20&id=9935&format=png&color=ffffff",
  },
  balcony: {
    description: "Balcony",
    src: "https://img.icons8.com/?size=20&id=8017&format=png&color=ffffff",
  },
  stage: {
    description: "Stage",
    src: "https://img.icons8.com/?size=20&id=8669&format=png&color=ffffff",
  },
  danceFloor: {
    description: "Dance Floor",
    src: "https://img.icons8.com/?size=20&id=a8hPL12leqi4&format=png&color=ffffff",
  },
  rooftop: {
    description: "Roof top",
    src: "https://img.icons8.com/?size=20&id=WSaD3r9Tb6f6&format=png&color=ffffff",
  },
  outdoorSpace: {
    description: "Outdoor Space",
    src: "https://img.icons8.com/?size=20&id=ZZ1g5wmXwxHi&format=png&color=ffffff",
  },
  fireplace: {
    description: "Fireplace",
    src: "https://img.icons8.com/?size=20&id=er279jFX2Yuq&format=png&color=ffffff",
  },
};

export { features };
export type { FeatureKeys, FeatureValue };
