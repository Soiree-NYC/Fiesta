enum FeatureDetails {
  Projector = "Projector",
  Mezzanine = "Upper-level seating",
  MoodLighting = "Customizable lighting",
  SoundSystem = "Surround sound",
  AC = "Central air",
  Catering = "In-house catering",
  AnalogPhotobooth = "Analog photobooth",
  DJ = "DJ",
  LiveMusic = "Live Music",
  Parking = "On-site Parking",
  WiFi = "Free Wi-Fi",
  Balcony = "Balcony",
  Stage = "Stage",
  DanceFloor = "Dance Floor",
  Rooftop = "Roof top",
  Lawn = "Lawn",
  OutdoorSpace = "Outdoor Space",
  Fireplace = "Fireplace",
  Garden = "Garden",
};

type FeatureKeys =
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
  | 'lawn'
  | 'outdoorSpace'
  | 'fireplace'
  | 'garden';

type Features = {
  [key in FeatureKeys]: FeatureDetails;
};

export { FeatureDetails, };
export type { FeatureKeys, Features, };
