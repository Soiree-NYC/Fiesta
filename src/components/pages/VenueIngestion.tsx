import { useState } from "react";

import Primary from "../ui/buttons/Primary";
import RoundedButton from "../ui/buttons/RoundedButton";

const VenueIngestion = () => {
  const [step, setStep] = useState(1);
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
    "Accessible",
    "Accessibility bathrooms",
    "Gastropub",
    "Pub",
    "Garden",
    "Terrace",
    "Tequila",
    "Rum",
    "Wine",
    "Vodka",
    "Whiskey",
    "Gin",
    "Tapas",
    "Mediterranean",
    "Caribbean",
    "Latin",
    "Afro",
    "Asian",
    "Polynesian",
    "Greek",
    "Italian",
    "French",
    "Spanish",
    "Mexican",
    "German",
    "Irish",
    "Scottish",
    "Korean",
    "Japanese",
    "Chinese",
    "Scandinavian",
    "Middle Eastern",
    "Fusion",
    "Vegan",
    "Vegetarian",
    "Organic",
    "Farm-to-Table",
    "Fine Dining",
    "Casual Dining",
    "Family Friendly",
    "Romantic",
    "High-End",
    "Trendy",
    "Late Night",
    "Happy Hour",
    "Food Truck",
    "Self-Serve",
    "Outdoor Bar",
    "Roof Deck",
    "Brunch",
    "Breakfast",
    "Late-Night Eats",
    "Low-Key",
    "High Energy",
    "Music Lounge",
    "Dance Hall",
    "Cozy",
    "Minimalist",
    "Luxury",
    "Barbecue",
    "Bistro",
    "Pop-Up",
    "Seasonal",
    "Cocktail Classes",
    "Wine Tasting",
    "Distillery Tours",
    "Microbrewery",
    "Craft Cocktails",
    "Non-Alcoholic Options",
    "Board Games",
    "Trivia Nights",
    "Karaoke Nights",
    "Outdoor Fire Pits",
    "Food & Drink Pairing",
    "Locally Sourced",
    "Historical Building",
    "Seaside View",
    "Live DJ",
    "Silent Disco",
    "Whiskey Tasting",
    "Live Comedy",
    "Poetry Readings",
    "Film Screenings",
    "Rooftop Garden",
    "Tap Takeovers",
    "Champagne Bar",
    "Martini Lounge",
    "Poolside",
    "Brewpub",
    "Petite Plates",
    "Sunset Views",
    "Vegan-Friendly",
    "Farmhouse Style",
    "Cocktail Flights",
    "Retro Arcade",
    "Community Events",
    "Open Mic",
    "Sports Viewing",
    "Speakeasy Vibes",
    "Supper Club",
    "Underwater Theme",
    "Garden Patio",
    "Taproom",
    "Wine Cellar",
    "Martini Bar",
    "Craft Spirits",
    "Neon Lighting",
    "Mystical Vibes",
    "Beachside",
    "Ski Lodge",
    "Winery",
    "Rock Climbing Wall",
    "Experimental Cocktails",
    "Mixology Workshops",
    "Smooth Jazz",
    "Big Band Swing",
    "Roaring Twenties",
    "Neo-Vintage",
    "Botanical Garden",
    "Pirate Theme",
    "Speakeasy Hidden Entrance",
    "Dim Sum",
    "Southern Comfort Food",
    "Cajun & Creole",
    "Brazilian BBQ",
    "Dance Classes",
    "Retro Diner",
    "Game Night",
    "Fine Wine Selection",
    "Single Malt Whiskeys",
    "Mixologist Specials",
    "Eco-Friendly",
    "Plant-Based Menu",
    "Street Food",
    "Authentic Experience",
    "Virtual Reality Games",
    "Trivia Competitions",
    "Ramen & Sake",
    "Street Art Vibes",
    "Creative Cocktails",
    "Absinthe Bar",
    "Apothecary Theme",
    "Speakeasy Jazz",
    "Neon Jungle",
    "Art Gallery",
    "Wilderness Retreat",
    "Forest Hideaway",
    "Outdoor Cinema",
    "Outdoor Adventures",
    "Vegan BBQ",
    "Wine & Cheese Pairing",
    "Bourbon Tastings",
    "Oyster Bar",
    "Wine Cellar Tours",
    "Hot Chocolate Bar",
    "Piano Lounge",
    "Luxury Suite",
    "Craft Ice Cream",
    "Holiday Theme",
    "Cocktail Lab",
    "Private Chef",
    "Gastro Lounge",
    "VIP Lounge",
    "Virtual Mixology",
    "Carnival Theme",
    "Retro Cabaret",
    "Burlesque Shows",
    "Secret Passageways",
    "Lava Rock Grill",
    "Forest Setting",
    "Handcrafted Decor",
    "Beach Cabana",
    "Alpine Chalet",
    "Country Style",
    "Desert Oasis",
    "Oceanfront",
    "Waterfall View",
    "Mountain View",
    "Urban Rooftop",
    "Modernist",
    "Hidden Gem",
    "Moonlit Patio",
    "Rooftop Pool",
    "International Cuisine",
    "Snow Lounge",
    "Cigar Lounge",
    "Experimental Cuisine",
    "Immersive Decor",
    "Luxury Beachfront",
    "Vintage Cars",
    "Art Installations",
    "Glasshouse",
    "Winter Wonderland",
    "Igloo Bar",
    "Fire and Ice Theme",
    "Ice Sculptures",
    "Puppy Meetups",
    "Live Flamenco",
    "Wine & Whiskey Flights",
    "Gin Distillery",
    "Chef's Table",
    "Space Age Theme",
    "80's Retro Vibe",
    "Silent Movies",
    "Cliffside",
    "Mezcal Bar",
    "Ocean-Inspired Decor",
    "Indie Vibes",
    "Street Vibes"
];

  console.log(tagData);

  const handleTagClick = (tag: string) => {
    // @ts-ignore
    setTagData(pTagData => ({...pTagData,[tag]: !pTagData[tag]}))
  };

  const handleNext = () => {
    setStep(step+1)
  };

  const handlePrev = () => {
    setStep(step - 1)
  };

  return (
    <div className='flex flex-col justify-between text-white font-roboto p-4 py-10 backdrop-blur-md min-w-[1200px]  min-h-[90vh]'>
      { step === 1 &&
        <div className="flex flex-col gap-10 min-h-screen">
          <h1 className='text-[6rem] leading-[6rem]'>Let's get to know you <br/> and your business!</h1>

          <hr />

          <div className='flex flex-col gap-2'>
            <label htmlFor="venueName" className="font-extrabold text-xl">Venue Name</label>
            <input type="text" name='venueName' className="w-1/4 rounded-lg bg-transparent border p-2"/>
          </div>

          <hr />

          <div className='flex flex-col gap-4 border rounded-lg p-4'> 
            <div className="flex flex-col">
              <h1 className="font-extrabold text-xl">Venue Type / Vibe Check</h1>
              <p>Select one or more options that best describe your venue.</p>
            </div>

            <hr />

            <div className='flex flex-wrap gap-3'>
              {tags.map((tag,i) => (
                <Primary
                  label={tag}
                  key={i}
                  callback={() => handleTagClick(tag)}
                  size="lg" />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 text-start w-full border rounded-lg">
            <div className="p-4">
              <h1 className="font-extrabold text-xl">Venue description</h1>
              <p>Write a brief description of your venue, this will be seen in your venue profile and user feeds.</p>
            </div>

            <textarea className="text-start w-full h-96 border rounded-b-lg p-4" placeholder="Write a description of your venue..."/>
          </div>

          <hr />
        </div>
      }

      { step === 2 && 
        <div className="flex flex-col gap-4 min-h-screen">
          <h1 className='text-4xl'>Address and location</h1>
          <hr />

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-extrabold text-xl">Venue Address</h1>
              <p>Help customers find your venue.</p>
            </div>
            
            <div>
              <h1 className="font-extrabold text-xl">Country</h1>
              <p>United States</p>
            </div>

            <div>
              <h1 className="font-extrabold text-xl">Street Address</h1>
              <input type="text" placeholder="555 Vesey Street" className="bg-transparent border rounded-lg p-2 w-1/2" />
            </div>

            <div>
              <h1 className="font-extrabold text-xl">Street Address line 2</h1>
              <input type="text" placeholder="Apt, suite, unit, building, floor, etc." className="bg-transparent border rounded-lg p-2 w-1/2" />
            </div>

            <div className="flex  gap-4">
              <div>
                <h1 className="font-extrabold text-xl">City</h1>
                <input type="text" placeholder="New York" className="bg-transparent border rounded-lg p-2" />
              </div>
              <div>
                <h1 className="font-extrabold text-xl">Postcode/Zip Code</h1>
                <input type="text" placeholder="10010" className="bg-transparent border rounded-lg p-2" />
              </div>
            </div>

            <div>
              <h1 className="font-extrabold text-xl">State</h1>
              <p className="border rounded-lg w-1/12 p-2">NY</p>
            </div>

            <hr />

            <div>
              <h1 className="font-extrabold text-xl">Show your location on Google Maps</h1>
              <p>Drag the pin to the correct location on the map.</p>
              <div className="h-[50rem] w-[50rem] border rounded-lg my-4">map</div>
            </div>
          </div>
        </div>
      }

      { step === 3 && 
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Catering and drinks</h1>

          <hr />

          <h1 className="font-extrabold text-xl">Catering options</h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-extrabold"> Venue provides in-house catering service</p>
              <p className="text-slate-300"> Venue has their own chef and staff.</p>
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
              <p className="font-extrabold"  >Venue works only with an approved list of extrernal caterers</p>
              <p className="text-slate-300"> External catering can be provided by approved caterers only.</p>
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
              <p className="font-extrabold"  >BYO catering/food allowed</p>
              <p className="text-slate-300"> Clients can hire a caterer of their choice or bring their own food</p>
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
              <p className="font-extrabold"  >Refreshments offered for guests</p>
              <p className="text-slate-300"> Provided for free with every booking</p>
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

          <h1 className="font-extrabold text-xl">Alcohol provided by the venue</h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-extrabold"  >Alcohol/ liquor licence</p>
              <p className="text-slate-300"> your venue can sell or supply alcohol.</p>
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
          <h1 className="font-extrabold text-4xl">Venue Details</h1>

          <hr />

          <div>
            <h2 className="font-extrabold text-xl">Parking</h2>
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
            <h1 className="font-extrabold text-xl">Accomodation</h1>
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
            <h1 className="font-extrabold text-xl">Allowed events</h1>
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
            <h1 className="font-extrabold text-xl">Age Policy</h1>
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
        <div className="flex flex-col gap-6">
          <h1 className="font-extrabold text-4xl">Spaces at {`Judy Z's`}</h1>

          <hr />
          
          <div className="flex flex-col gap-4 ">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="font-extrabold text-xl">Space name</h1>
                <input type="text" name="" id="" placeholder="New Space" className="bg-transparent border rounded-lg p-2" />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="font-extrabold text-xl">What type of space is it?</h1>
                <p>Enter the type of space that most cloesly respresents the physical space being listed.</p>
                <input type="text" name="" id="" placeholder="e.g. Mezzanine, Private Room, Patio" className="bg-transparent border rounded-lg p-2"/>
              </div>
            </div>

            <div className="border rounded-lg p-4 ">
              <input type="file" name="" id="" />
              <Primary label='Finish space profile' />
            </div>
            <div>
              <Primary label="+ Add another space" />
            </div>
          </div>

          <hr />

          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="font-extrabold text-xl">Guest capacity preferences</h1>
              <div className="flex flex-col gap-6">
                <div>
                  <p>Set a minimum number of attendees per event</p>
                  <input type="text" name="" id="" placeholder="e.g. Mezzanine, Private Room, Patio" className="bg-transparent border rounded-lg p-2"/>
                </div>
                <div>
                  <p>Set a maximum number of attendees per event</p>
                  <input type="text" name="" id="" placeholder="e.g. Mezzanine, Private Room, Patio" className="bg-transparent border rounded-lg p-2"/>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="font-extrabold text-xl">Space</h1>
              <div className="flex justify-between flex-col">
                <p>Floorspace</p>
                <div className="flex gap-2">
                  <input type="text" name="" id="" placeholder="e.g. Mezzanine, Private Room, Patio" className="bg-transparent border rounded-lg p-2"/>
                  <select className="bg-transparent">
                    <option value="">sqft</option>
                    <option value="">sqm</option>
                    <option value="">sqy</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-4 text-start w-full h-96 border rounded-lg">
            <div className="p-4">
              <h1 className="font-extrabold text-xl">Venue description</h1>
              <p>Write a brief description of your venue, this will be seen in your venue profile and user feeds.</p>
            </div>
            <textarea className="h-96 border rounded-b-lg p-4" placeholder="Write a description of the space..."/>
          </div>
        </div>
      }

      { step === 6 &&
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-4xl">Photos</h1>

          <hr />

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-extrabold text-xl">Add venue photos</h1>
              <p>Be sure to include images of the facade, main areas, etc.</p>
            </div>
            <div className="border rounded-lg p-4 w-1/2">
              <input type="file" name="" id="" />
              <Primary label='Finish space profile' />
            </div>
          </div>
        </div>
      }

      { step === 7 && 
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-4xl">Licences</h1>

          <hr />

          <div>

          </div>
          <h2 className="font-extrabold text-xl">Indicate the licenses your space holds.</h2>
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

          <h2 className="font-extrabold text-xl">More licenses</h2>
          <p>Fill in other licenses your space holds..</p>
          <div className="flex gap-4">
            <input type="text" className="bg-transparent border rounded-lg "/>
            <RoundedButton title='&#43;' callback={function (): void {
                  throw new Error("Function not implemented.");
                } } />
          </div>

          <hr />

          <h2 className="font-extrabold text-xl">Custom Facilities</h2>
          <p>Complement the standard facilities with your own custom facilities for guests.</p>
          <div className="flex gap-4">
            <input type="text" className="bg-transparent border rounded-lg"/>
            <RoundedButton title='&#43;' callback={function (): void {
                  throw new Error("Function not implemented.");
                } } />
          </div>

          <hr />

          <h1 className="font-extrabold text-xl ">Music and Sound</h1>
          <p>Add the music and sound options you provide, including any noise limitations</p>

          <div className="w-1/2">
            <div className="flex justify-between items-center">
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
            <div className="flex justify-between items-center">
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
            <div className="flex justify-between items-center">
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
            <div className="flex justify-between items-center">
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
          </div>


          <hr />

          <div>
            <h1 className="font-extrabold text-xl">Accessiblity</h1>
            <p>What accessbility features does the space and venue have?</p>
          </div>

          <h2 className="font-extrabold text-xl">Space Accessbility features</h2>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-extrabold text-lg">Wheelchair accessible</h3>
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

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-extrabold text-lg">Disabled access toilets</h3>
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

          <div className="flex justify-between items-center">
            <div>
            <h3 className="font-extrabold text-lg">Step-free guest entrance</h3>
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

          <div className="flex justify-between items-center">
            <div>
            <h3 className="font-extrabold text-lg">Accessible parking lot</h3>
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

          <div className="flex justify-between items-center">
            <div>
            <h3 className="font-extrabold text-lg">Lift to all floors</h3>
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

          <div className="flex justify-between items-center">
            <div>
            <h3 className="font-extrabold text-lg">Cargo lift</h3>
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

      {step === 8 &&
        <div className="flex flex-col gap-10">
          <h1 className="font-extrabold text-4xl">Prices and opening hours</h1>

          <hr />

          <h1 className="font-extrabold text-xl">What is your pricing?</h1>
          <div className="flex justify-around gap-2">
            <div className="flex flex-col border rounded-lg items-center p-2 w-1/2">
              <h1>Flat rate</h1>
              <p>Charge based on hire fee per hour or per day.</p>
              <RoundedButton title='Select' callback={() => console.log('yee')} />
            </div>
            <div className="flex flex-col border rounded-lg items-center p-2 w-1/2">
              <h1>Dynamic Pricing</h1>
              <p>Charge based on minimum spend, season, price per person, etc.</p>
              <RoundedButton title='Select' callback={() => console.log('yee')}/>
            </div>
          </div>

          <hr />

          <div className="flex flex-col justify-around gap-4">
            <h1 className="font-extrabold text-xl">Days and opening hours</h1>
            <div className="flex flex-col gap-2 w-1/4">
              <div className="flex gap-4 justify-between">
                <h3>Monday</h3>
                <div className="flex gap-2">
                  <Primary label="Open"/>
                  <Primary label="Closed"/>
                </div>
              </div>
              <div className="flex gap-4 justify-between">
                <h3>Tuesday</h3>
                <div className="flex gap-2">
                  <Primary label="Open"/>
                  <Primary label="Closed"/>
                </div>
              </div>
              <div className="flex gap-4 justify-between">
                <h3>Wednesday</h3>
                <div className="flex gap-2">
                  <Primary label="Open"/>
                  <Primary label="Closed"/>
                </div>
              </div>
              <div className="flex gap-4 justify-between">
                <h3>Thursday</h3>
                <div className="flex gap-2">
                  <Primary label="Open"/>
                  <Primary label="Closed"/>
                </div>
              </div>
              <div className="flex gap-4 justify-between">
                <h3>Friday</h3>
                <div className="flex gap-2">
                  <Primary label="Open"/>
                  <Primary label="Closed"/>
                </div>
              </div>
              <div className="flex gap-4 justify-between">
                <h3>Saturday</h3>
                <div className="flex gap-2">
                  <Primary label="Open"/>
                  <Primary label="Closed"/>
                </div>
              </div>
              <div className="flex gap-4 justify-between">
                <h3>Sunday</h3>
                <div className="flex gap-2">
                  <Primary label="Open"/>
                  <Primary label="Closed"/>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl">Addtional charges</h1>
           
            <div className="flex justify-between items-center w-1/4">
              <h3>Cleaning fee</h3>
              <div className="flex gap-2">
                <RoundedButton title='&#10005;' callback={function (): void {
                  throw new Error("Function not implemented.");
                } } />
                <RoundedButton title='&#10003;' callback={function (): void {
                  throw new Error("Function not implemented.");
                } } />
              </div>
            </div>
           
            <div className="flex justify-between items-center w-1/4">
              <h3>Gratuity</h3>
              <div className="flex gap-2">
                <RoundedButton title='&#10005;' callback={function (): void {
                  throw new Error("Function not implemented.");
                } } />
                <RoundedButton title='&#10003;' callback={function (): void {
                  throw new Error("Function not implemented.");
                } } />
              </div>
            </div>
           
            <div className="flex justify-between items-center w-1/4">
              <h3>Corking fee</h3>
              <div className="flex gap-2">
                <RoundedButton title='&#10005;' callback={function (): void {
                  throw new Error("Function not implemented.");
                } } />
                <RoundedButton title='&#10003;' callback={function (): void {
                  throw new Error("Function not implemented.");
                } } />
              </div>
            </div>
           
            <div className="flex justify-between items-center w-1/4">
              <h3>Cold storage fee</h3>
              <div className="flex gap-2">
                <RoundedButton title='&#10005;' callback={function (): void {
                  throw new Error("Function not implemented.");
                } } />
                <RoundedButton title='&#10003;' callback={function (): void {
                  throw new Error("Function not implemented.");
                } } />
              </div>
            </div>
           
            <div className="flex justify-between items-center w-1/4">
              <h3>Coat check fee</h3>
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

          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl">Minimum number of hours for a booking</h1>
            <select name="" id="" className="bg-transparent border rounded-lg p-2  w-1/3">
              <option value="">1 hour</option>
              <option value="">2 hours</option>
              <option value="">3 hours</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 border rounded-lg ">
            <div className="p-2">
              <h1 className="font-extrabold text-xl">Pricing details</h1>
              <div className="flex gap-1">
                <p>Pricing comment</p>
                <span className='text-slate-400 '>(Optional)</span>
              </div>
            </div>
            <textarea name="" id="" placeholder='Comment here...' className="w-full h-52 p-2" />
          </div>
        </div>
      }

      { step === 9 &&
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-4xl">Cancellation policy</h1>

          <hr />
          <p>Guests may cencel their booking within 24 hours of the booking confirmation (but no later than 48 hours efore the event) and receive a full refund. Bookings cancelled after 24 hours (or less than 48 hours before the event) will follow the cancellation policy selected below. Cancellations by houst are always fully refunded.
          </p>

          <div className="flex items-center gap-10">
            <input type="checkbox" name="" id=""/>
            <div className="flex flex-col w-1/2">
              <h3 className="font-extrabold text-xl">Very flexible</h3>
              <p>Cancellations up to 24 hours from event start time will revieve a full refund.</p>
              <p>Cancellations for events starting within 24 hours are non-refundable.</p>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <input type="checkbox" name="" id="" />
            <div className="flex flex-col w-1/2">
              <h3 className="font-extrabold text-xl">Flexible</h3>
              <p>Cancellations up to 7 days in advance will revieve a full refund.</p>
              <p>Cancellations up to 7 days to 24 hours in advance will revieve a 50% refund.</p>
              <p>Cancellations for events atarting with 24 hours are non-refundable.</p>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <input type="checkbox" name="" id="" />
            <div className="flex flex-col w-1/2">
              <h3 className="font-extrabold text-xl">Standard 30 day</h3>
              <p>Cancellations 30 days in advance will revieve a full refund.</p>
              <p>Cancellations up to 7 to 30 days in advance will revieve a 50% refund.</p>
              <p>Cancellations for events atarting with 7 days are non-refundable.</p>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <input type="checkbox" name="" id="" />
            <div className="flex flex-col w-1/2">
              <h3 className="font-extrabold text-xl">Standard 60 day</h3>
              <p>Cancellations 60 days in advance will revieve a full refund.</p>
              <p>Cancellations up to 60 to 30 days in advance will revieve a 50% refund.</p>
              <p>Cancellations for events atarting with 30 days are non-refundable.</p>
            </div>
          </div>
        </div>
      }

      <div className="flex justify-between p-4 mb-10">
        <Primary label="Back" callback={handlePrev} size='3xl' />
        <Primary label="Continue" callback={handleNext} size='3xl' />
      </div>
    </div>
  );
};

export default VenueIngestion;
