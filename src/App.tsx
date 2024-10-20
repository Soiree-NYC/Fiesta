import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

import NavBar from './components/ui/layout/NavBar';

import Home from './components/pages/Home';
import Venue from './components/pages/Venue';

function App() {
  const [listItems, setListItems] = useState<number>(0);

  return (
    <div className='bg-skyline bg-cover bg-center h-screen flex justify-center overflow-auto'>
      <div className='max-w-screen-xl flex flex-col backdrop-blur-sm'>
        <NavBar listItems={listItems} />
        <Routes>
          <Route path='/' element={<Home venues={{getter: listItems, setter: setListItems}}/>} />
          <Route path='/venue' element={<Venue />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

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
}

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

const features: Features = {
  projector:    FeatureDetails.Projector,
  mezzanine:    FeatureDetails.Mezzanine,
  moodLighting: FeatureDetails.MoodLighting,
  soundSystem:  FeatureDetails.SoundSystem,
  ac:           FeatureDetails.AC,
  catering:     FeatureDetails.Catering,
  analogPhotobooth: FeatureDetails.AnalogPhotobooth,
  dj:           FeatureDetails.DJ,
  liveMusic:    FeatureDetails.LiveMusic,
  parking:      FeatureDetails.Parking,
  wiFi:        FeatureDetails.WiFi,
  balcony:      FeatureDetails.Balcony,
  stage:        FeatureDetails.Stage,
  danceFloor:   FeatureDetails.DanceFloor,
  rooftop:      FeatureDetails.Rooftop,
  lawn:         FeatureDetails.Lawn,
  outdoorSpace: FeatureDetails.OutdoorSpace,
  fireplace:    FeatureDetails.Fireplace,
  garden:       FeatureDetails.Garden,
};

type venue = {
  id: number;
  name: string;
  address: string;
  rating: number;
  features: Features;
  host: string;
  hightlights: string[],
  photos: string[],
};