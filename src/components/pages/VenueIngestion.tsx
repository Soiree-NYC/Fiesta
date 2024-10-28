import { useState } from "react";

import Primary from "../ui/buttons/Primary";
import RoundedButton from "../ui/buttons/RoundedButton";

const VenueIngestion = () => {
  const [step, setStep] = useState(4);
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
      {step === 3 && 
        <div className="w-[50rem] flex flex-col gap-4">
          <h1>Catering and drinks</h1>
          <hr />

          <h1>Catering options</h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p>Venue provides in-house catering service</p>
              <p>Venue has their own chef and staff.</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p>Venue works only with an approved list of extrernal caterers</p>
              <p>External catering can be provided by approved caterers only.</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p>BYO catering/food allowed</p>
              <p>Clients can hire a caterer of their choice or bring their own food</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p>Refreshments offered for guests</p>
              <p>Provided for free with every booking</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>

          <hr />

          <h1>Alcohol provided by the venue</h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p>Alcohol/ liquor licence</p>
              <p>your venue can sell or supply alcohol.</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>

          <h1>Bring your own alcohol</h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p>BYOB alcohol allowed</p>
              <p>Guest are welcome to bring their own alcoholic beverages</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>
        </div>
      }
      { step === 4 && 
      <div className="flex flex-col gap-4">
        <h1>Venue Details</h1>

        <hr />

        <div>
          <h2>Parking</h2>
          <div className="flex justify-between">
            <p>Free parking on premises</p>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>
          <div className="flex justify-between">
            <p>Free street parking</p>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>
          <div className="flex justify-between">
            <p>Paid parking on premises</p>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>
          <div className="flex justify-between">
            <p>Paid parking off premises</p>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h1>Accomodation</h1>
          <div className="flex justify-between">
            <p>Accommodation is available on-site</p>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h1>Allowed events</h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p>Popular for promoted and ticketed events</p>
              <p>You are frequently hosting promoted and ticketed events for which the organizer can publicly advertise and sell tickets.</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h1>Age Policy</h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p>Age restrictions at the venue</p>
              <p>Specify if your venue has age limits for event attendees.</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
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
