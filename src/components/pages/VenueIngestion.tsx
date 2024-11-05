import { useState } from "react";

import Primary from "../ui/buttons/Primary";
import RoundedButton from "../ui/buttons/RoundedButton";

const VenueIngestion = () => {
  const [step, setStep] = useState(9);
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
    <div className='flex flex-col gap-10 text-white'>
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

      { step === 5 && 
        <div className="flex flex-col gap-2">
          <h1>Spaces at {`Judy Z's`}</h1>
          <div className="border rounded-lg p-4">
            <input type="file" name="" id="" />
            <Primary label='Finish space profile' />
          </div>
          <Primary label="Add another space" />
          <hr />
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1>Space name</h1>
              <input type="text" name="" id="" placeholder="New Space" />
            </div>
          </div>

          <hr />

          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1>What type of space is it?</h1>
              <p>Enter the type of space that most cloesly respresents the physical space being listed.</p>
              <input type="text" name="" id="" placeholder="e.g. Mezzanine, Private Room, Patio" />
            </div>
          </div>

          <hr />

          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1>Guest capacity preferences</h1>
              <p>Set a minimum number of attendees per event</p>
              <input type="text" name="" id="" placeholder="e.g. Mezzanine, Private Room, Patio" />
              <p>Set a maximum number of attendees per event</p>
              <input type="text" name="" id="" placeholder="e.g. Mezzanine, Private Room, Patio" />
            </div>
          </div>

          <hr />

          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1>Space</h1>
              <div className="flex justify-between w-96">
                <p>Floorspace</p>
                <div className="flex gap-2">
                  <input type="text" name="" id="" placeholder="e.g. Mezzanine, Private Room, Patio" />
                  <select>
                    <option value="">sqft</option>
                    <option value="">sqm</option>
                    <option value="">sqy</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-4 text-start w-full h-96 border rounded-lg p-4">
            <div>
              <h1>Venue description</h1>
              <p>Write a brief description of your venue, this will be seen in your venue profile and user feeds.</p>
            </div>
            <textarea className="text-start w-full h-96 border rounded-b-lg p-4" placeholder="Write a description of the space..."/>
          </div>
        </div>
      }
      { step === 6 && 
        <div className="flex flex-col gap-2">
          <h1>Photos</h1>

          <hr />

          <div>
            <h1>Add venue photos</h1>
            <p>Be sure to include images of the facade, main areas, etc.</p>
            <div className="border rounded-lg p-4">
              <input type="file" name="" id="" />
              <Primary label='Finish space profile' />
            </div>
          </div>
        </div>
      }
      { step === 7 && 
        <div>
          <h1>Capacity and layouts</h1>
          <hr />
          <div className="flex justify-between">
            <p>Dining</p>
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
            <p>Standing</p>
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
            <p>Cabaret</p>
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
            <p>Stage and dining</p>
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
      { step === 8 && 
        <div className="flex flex-col gap-4">
          <h1>Licences</h1>
          <p>Incdice the licesnse your space holds.</p>
          <div className="flex justify-between">
            <p>A civil marriage / partnership can be performed by a recognized official or religious body at your venue</p>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
              <RoundedButton title='&#10003;' callback={function (): void {
                throw new Error("Function not implemented.");
              } } />
            </div>
          </div>

          <h1>Custom Facilities</h1>
          <p>Complement the standard facilities with your own custom facilities for guests.</p>
          <div className="flex gap-4">
            <input type="text" />
            <RoundedButton title='&#43;' callback={function (): void {
                  throw new Error("Function not implemented.");
                } } />
          </div>

          <hr />

          <h1>Music and Sound</h1>
          <p>Add the music and sound options you provide, including any noise limitations</p>
          <div className="flex justify-between">
            <p>Clients can play their own music</p>
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
            <p>Clients can play their own music</p>
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
            <p>Clients can bring their own DJ</p>
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
            <p>Space has noise restriction</p>
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

          <h1>Accessiblity</h1>
          <p>What accessbility features does the space and venue have?</p>

          <h2>Space Accessbility features</h2>
          <div className="flex justify-between">
            <div>
              <h3>Wheelchair accessible</h3>
              <p className="wrap w-3/4">The entrance and path is wide enough for a wheelchair user, the space is accessible without steps from the main entrance (there can be ramps or a lift if steps are present).</p>
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
            <div>
              <h3>Disabled access toilets</h3>
              <p className="wrap w-3/4">It is step-free from the space (otherwise there should be ramps or a lift to facilitate mobility), toilet room adheres to regulations for accessbile access.</p>
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
            <div>
              <h3>Step-free guest entrance</h3>
              <p className="wrap w-3/4">The guest entrance is free of steps and barriers and the space is on street level.</p>
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

          <h2>Venue accessiblity feature (changes will be applied to all spaces in the venue)</h2>
          <div className="flex justify-between">
            <div>
              <h3>Accessible parking lot</h3>
              <p className="wrap w-3/4">There's a private parking spot at least 11 feet (3.35 metres) wide. Or, there is public parking spot designated for a person with disabilities that has clear signage or markings.</p>
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
            <div>
              <h3>Lift to all floors</h3>
              <p className="wrap w-3/4">If the venue is multi-leveled, there is a lift that serves all floors.</p>
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
            <div>
              <h3>Cargo lift</h3>
              <p className="wrap w-3/4">If the venue is multi-leveled, there is a cargo lift to facilitate transportation of goods between floors.</p>
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
        </div>
      }
      {step === 9 && 
      <div className="flex flex-col gap-4">

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
