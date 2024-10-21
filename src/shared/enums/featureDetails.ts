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

type FeatureDetail = {
  description: string;
  imgSrc: string;
};

const FeatureDetails: Record<FeatureKeys, FeatureDetail> = {
  bespokeMenu: {
    description: 'Bespoke Menu',
    imgSrc: 'https://img.icons8.com/?size=100&id=36068&format=png&color=ffffff',
  },
  projector: {
    description: "Projector",
    imgSrc: "https://img.icons8.com/?size=100&id=11263&format=png&color=ffffff",
  },
  mezzanine: {
    description: "Upper-level seating",
    imgSrc: "https://img.icons8.com/?size=100&id=BrH6sMQVUNgR&format=png&color=ffffff",
  },
  moodLighting: {
    description: "Customizable lighting",
    imgSrc: "https://img.icons8.com/?size=100&id=Hwom08A3Vybf&format=png&color=ffffff",
  },
  soundSystem: {
    description: "Surround sound",
    imgSrc: "https://img.icons8.com/?size=100&id=6GiwLz4siGKS&format=png&color=ffffff",
  },
  ac: {
    description: "Central air",
    imgSrc: "https://img.icons8.com/?size=100&id=23585&format=png&color=ffffff",
  },
  catering: {
    description: "In-house catering",
    imgSrc: "https://img.icons8.com/?size=100&id=lRyWnI4Kv32t&format=png&color=ffffff",
  },
  analogPhotobooth: {
    description: "Analog photobooth",
    imgSrc: "https://img.icons8.com/?size=100&id=26131&format=png&color=ffffff",
  },
  dj: {
    description: "DJ",
    imgSrc: "https://img.icons8.com/?size=100&id=9390&format=png&color=ffffff",
  },
  liveMusic: {
    description: "Live Music",
    imgSrc: "https://img.icons8.com/?size=100&id=SE9pJyDIMm2Z&format=png&color=ffffff",
  },
  parking: {
    description: "On-site Parking",
    imgSrc: "https://img.icons8.com/?size=100&id=10738&format=png&color=ffffff",
  },
  wiFi: {
    description: "Free Wi-Fi",
    imgSrc: "https://img.icons8.com/?size=100&id=9935&format=png&color=ffffff",
  },
  balcony: {
    description: "Balcony",
    imgSrc: "https://img.icons8.com/?size=100&id=8017&format=png&color=ffffff",
  },
  stage: {
    description: "Stage",
    imgSrc: "https://img.icons8.com/?size=100&id=8669&format=png&color=ffffff",
  },
  danceFloor: {
    description: "Dance Floor",
    imgSrc: "https://img.icons8.com/?size=100&id=a8hPL12leqi4&format=png&color=ffffff",
  },
  rooftop: {
    description: "Roof top",
    imgSrc: "https://img.icons8.com/?size=100&id=WSaD3r9Tb6f6&format=png&color=ffffff",
  },
  outdoorSpace: {
    description: "Outdoor Space",
    imgSrc: "https://img.icons8.com/?size=100&id=ZZ1g5wmXwxHi&format=png&color=ffffff",
  },
  fireplace: {
    description: "Fireplace",
    imgSrc: "https://img.icons8.com/?size=100&id=er279jFX2Yuq&format=png&color=ffffff",
  },
};

export { FeatureDetails };
export type { FeatureKeys, FeatureDetail };
