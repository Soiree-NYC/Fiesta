import { useState } from "react";

import Primary from "../ui/buttons/Primary";
import PlainButton from "../ui/buttons/PlainButton";

const VenueIngestion = () => {
  const [step, setStep] = useState(2);
  const [tagData, setTagData] = useState({
    "Speakeasy": false,
    "Rooftop": false,
    "Underground": false,
    "Karaoke": false,
    "Sports Bar": false,
    "Dive": false,
    "Cocktail Lounge": false,
    "Whiskey Bar": false,
    "Craft Beer": false,
    "Wine Bar": false,
    "Live Music": false,
    "Dance Floor": false,
    "Outdoor Seating": false,
    "Garden": false,
    "Art Deco": false,
    "Retro": false,
    "Themed": false,
    "Industrial": false,
    "LGBTQ+ Friendly": false,
    "Pet-Friendly": false,
    "Arcade": false,
    "Tiki": false,
    "Sushi & Sake": false,
    "Seafood Bar": false,
    "Private Rooms": false,
    "Fireplace": false,
    "Artisanal Cocktails": false,
    "Mocktails": false,
    "Historic Venue": false,
    "Jazz & Blues": false,
    "Patio": false,
    "BYOB": false,
    "Craft Distillery": false,
  });

  const tags = [
    "Nightclub",
    "Café",
    "Speakeasy",
    "Rooftop",
    "Underground",
    "Karaoke",
    "Sports Bar",
    "Dive",
    "Cocktail Lounge",
    "Whiskey Bar",
    "Craft Beer",
    "Wine Bar",
    "Live Music",
    "Dance Floor",
    "Outdoor Seating",
    "Garden",
    "Art Deco",
    "Retro",
    "Themed",
    "Industrial",
    "LGBTQ+ Friendly",
    "Pet-Friendly",
    "Arcade",
    "Tiki",
    "Sushi & Sake",
    "Seafood Bar",
    "Private Rooms",
    "Fireplace",
    "Artisanal Cocktails",
    "Mocktails",
    "Historic Venue",
    "Jazz & Blues",
    "Patio",
    "BYOB",
    "Craft Distillery",
  ];

  const handleTagClick = (tag) => {
    // @ts-ignore
    setTagData(pTagData => ({...pTagData,[tag]: !pTagData[tag]}))
  };

  return (
    <div className='flex flex-col gap-10'>
      {step === 1 && 
      <div className="w-full">
        <h1>Overview</h1>

        <div className='flex flex-col'>
          <label htmlFor="">Venue Name</label>
          <input type="text" className="w-1/5"/>
        </div>

        <hr />

        <div className='flex flex-col gap-3 border rounded-lg p-4'> 
          <div className="flex flex-col">
            <h1>Venue Type</h1>
            <p>Select one or more options that best describe your venue.</p>
          </div>

          <hr />

          <div className='flex flex-wrap gap-2 '>
            {tags.map((tag,i) => (
              <Primary
                label={tag}
                key={i}
                callback={() => handleTagClick(tag)} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 text-start w-full h-96 border rounded-lg">
          <div>
            <h1>Venue description</h1>
            <p>Write a brief description of your venue, this will be seen in your venue profile and user feeds.</p>
          </div>

          <textarea className="text-start w-full h-96 border rounded-b-lg p-4" placeholder="Write a description of your venue..."/>
        </div>

        <hr /></div>
      }
      {step === 2 && 
        <div className="w-full flex flex-col gap-4">
          <h1>Address and location</h1>
          <hr />

          <div className="flex flex-col gap-4">
            <div>
              <h1>Venue Address</h1>
              <p>Help customers find your venue.</p>
            </div>
            
            <div>
              <h1>Country</h1>
              <p>United States</p>
            </div>

            <div>
              <h1>Street Address</h1>
              <input type="text" placeholder="555 Vesey Street"  />
            </div>

            <div>
              <h1>Street Address line 2</h1>
              <input type="text" placeholder="Apt, suite, unit, building, floor, etc." />
            </div>

            <div>
              <div>
                <h1>City</h1>
                <input type="text" placeholder="New York" />
              </div>
              <div>
                <h1>Postcode/Zip Code</h1>
                <input type="text" placeholder="10010" />
              </div>
            </div>

            <div>
              <h1>State</h1>
              <select name="" id="">
                <option value="New York">NY</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <div>
              <h1>Show your location on Google Maps</h1>
              <p>Drag the pin to the correct location on the map.</p>
              <div className="h-[50rem] w-[50rem] border">map</div>
            </div>
          </div>
        </div>
      }
      
      <div className="flex justify-between p-4">
        <Primary label={"Back"} callback={function (): void {
          throw new Error("Function not implemented.");
        } } />
        <Primary label="Continue" />
      </div>
    </div>
  );
};

export default VenueIngestion;
