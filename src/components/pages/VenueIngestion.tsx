import { useState } from "react";

import { ChangeEvent } from "react";
import { Tag, tags } from "../../shared/types/Tags";

import Primary from "../ui/buttons/Primary";
import RoundedButton from "../ui/buttons/RoundedButton";

const VenueIngestion = () => {
  const [step, setStep] = useState(0);
  
  const [tagData, setTagData] = useState<Record<Tag, boolean>>(() =>
    Object.fromEntries(tags.map(tag => [tag, false])) as Record<Tag, boolean>
  );

  const [overview, setOverview] = useState({
    venueName: "",
    vibeCheck: tagData,
    venueDescription: '',
  });
  
  const [address, setAddress] = useState({
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    zip: '',
    state: 'NY',
    country: 'USA',
  });

  const [catering, setCatering] = useState({
    inHouse: false,
    thirdParty: false,
    byoFood: false,
    refreshments: false,
    liqLicense: false,
    byob: false,
  });

  const [venueDetails, setVenueDetails] = useState({
    freeOnSite: false,
    freeOffSite: false,
    paidOnSite: false,
    paidOffSite: false,
    allowedEvents: false,
    agePolicy: false,
  });

  const [space, setSpace] = useState({
    name: '',
    type: '',
    photos: [],
    minCapacity: '',
    maxCapacity:'',
    floorspace: '',
    floorspaceType: 'sqft',
    description: '',
  });

  const [spaces, setSpaces] = useState([]);

  const [venuePhotos, setVenuePhotos] = useState([]);

  const [facilities, setFacilities]  = useState([]);

  const [facility, setFacility]  = useState('');

  const [music, setMusic] = useState({
    clientMusic: false,
    clientBand: false,
    clientDJ: false,
    noiseRestriction: false,
  });

  const [accessibility, setAccessibility] = useState({
    wheelchairAccessible: false,
    accessibleRestrooms: false,
    stepFreeEntrance: false,
    accessibleParking: false,
    lift: false,
    cargoLift: false,
  });

  const [pricing, setPricing] = useState({
    flatRate: false,
    hourlyRate: false,
    dynamicRate: false,
    pricingDetails: '',
  });

  const [additionalFees, setAdditionalFees] = useState({
    cleaningFee: false,
    gratuity: false,
    corking: false,
    coldStorage: false,
    coatCheck: false,
  });
  
  const [openingHours, setOpeningHours] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
    minimumHours: '',
  });
  
  const [cancelPolicy, setCancelPolicy] = useState({
    leadTime: '',
    cancelPolicy: '',
  });

  const [selectedPolicy, setSelectedPolicy] = useState('');


  const handleOverview = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, } = e.target;
    setOverview(prev => {
      return {
        ...prev,
        [name]: value,
      }
    });
  };

  const handleAddress = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAddress(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleCatering = (key: string) => {
    setCatering(prev => {
      return {
        ...prev,
        //@ts-ignore
        [key]: !catering[key],
      };
    });
  };

  const handleVenueDetails = (key: string) => {
    setVenueDetails(prev => {
      return {
        ...prev,
        //@ts-ignore
        [key]: !venueDetails[key],
      };
    });
  };

  const handleSpace = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, } = e.target
    setSpace(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSpaces = () => {
    // @ts-ignore
    setSpaces([...spaces, space]);
    setSpace({
      name: '',
      type: '',
      photos: [],
      minCapacity: '',
      maxCapacity: '',
      floorspace: '',
      floorspaceType: 'sqft',
      description: '',
    });
  };

  const handleVenuePhotos = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //@ts-ignore
    const files = e.target.files ? Array.from(e.target.files) : [];
    //@ts-ignore
    setVenuePhotos([...files]);
  };

  const handleMusic = (key: string) => {
    setMusic(prev => {
      return {
        ...prev,
        //@ts-ignore
        [key]: !music[key],
      };
    });
  };
  
  const handleFacility = (e: ChangeEvent<HTMLInputElement>) => {
    setFacility(e.target.value);
  };

  const handleFacilities = () => {
    //@ts-ignore
    setFacilities([...facilities, facility ]);
    setFacility('');
  };

  const handleAccessiblity = (key: string) => {
    setAccessibility(prev => {
      return {
        ...prev,
        //@ts-ignore
        [key]: !accessibility[key],
      };
    });
  };

  const handlePricing = (key: string) => {
    setPricing(prev => {
      return {
        ...prev,
        [key]: !pricing[key],
      };
    });
  };

  const handlePricingDetails = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setPricing(prev => {
      return {
        ...prev,
        pricingDetails: value,
      };
    });
  }

  const handleOpeningHours = (key: string, bool: boolean) => {
    setOpeningHours(prev => {
      return {
        ...prev,
        [key]: bool,
      };
    });
  };
  const handleMinimumHours = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setOpeningHours(prev => {
      return {
        ...prev,
        minimumHours: value,
      };
    });
  };

  const handleCancelPolicy = (policy: string) => {
    setCancelPolicy(prev => {
      return {
        ...prev,
        cancelPolicy: policy
      }
    });
    setSelectedPolicy(policy)
  };

  const handleTagClick = (tag: Tag) => {
    setTagData(prevTagData => {
      const updatedTagData = {
        ...prevTagData,
        [tag]: !prevTagData[tag],
      };
  
      setOverview(prevOverview => ({
        ...prevOverview,
        vibeCheck: updatedTagData,
      }));
  
      return updatedTagData;
    });
  };
  

  const handleNext = () => {
    setStep(step+1)
  }; 

  const handlePrev = () => {
    setStep(step - 1)
  };

  return (
    <div className='flex flex-col justify-between text-white font-roboto p-4 py-10 backdrop-blur-md min-w-[1200px] min-h-[90vh]'>
      { step === 0 &&
        <div className="flex flex-col font-extrabold gap-10 min-h-screen">
          <h1 className='text-[6rem] leading-[6rem]'>Let's get to know you <br/> and your business!</h1>

          <hr />

          <div className='flex flex-col gap-2'>
            <label htmlFor="venueName" className="font-extrabold text-xl">Venue Name</label>
            <input type="text" className="w-1/4 rounded-lg bg-transparent border p-2" name="venueName" value={overview.venueName} onChange={handleOverview} />
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

            <textarea className="text-start w-full h-96 border rounded-b-lg p-4 text-black" placeholder="Write a description of your venue..." name="venueDescription" onChange={handleOverview} />
          </div>

          <hr />
        </div>
      }

      { step === 1 &&
        <div className="flex flex-col gap-4 min-h-screen">
          <h1 className='text-4xl font-extrabold'>Address and location</h1>
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
              <input type="text" placeholder="555 Vesey Street" className="bg-transparent border rounded-lg p-2 w-1/2" name="streetAddress1" onChange={handleAddress} />
            </div>

            <div>
              <h1 className="font-extrabold text-xl">Street Address line 2</h1>
              <input type="text" placeholder="Apt, suite, unit, building, floor, etc." className="bg-transparent border rounded-lg p-2 w-1/2" name="streetAddress2" onChange={handleAddress} />
            </div>

            <div className="flex  gap-4">
              <div>
                <h1 className="font-extrabold text-xl">City</h1>
                <input type="text" placeholder="New York" className="bg-transparent border rounded-lg p-2" name="city" onChange={handleAddress} />
              </div>
              <div>
                <h1 className="font-extrabold text-xl">Postcode/Zip Code</h1>
                <input type="text" placeholder="10010" className="bg-transparent border rounded-lg p-2" name="zip" onChange={handleAddress}  />
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

      { step === 2 &&
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold">Catering and drinks</h1>

          <hr />

          <h1 className="font-extrabold text-xl">Catering options</h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-extrabold"> Venue provides in-house catering service</p>
              <p className="text-slate-300"> Venue has their own chef and staff.</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleCatering('inHouse')} />
              <RoundedButton title='&#10003;' callback={() => handleCatering('inHouse')} />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-extrabold"  >Venue works only with an approved list of extrernal caterers</p>
              <p className="text-slate-300"> External catering can be provided by approved caterers only.</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleCatering('thirdParty')} />
              <RoundedButton title='&#10003;' callback={() => handleCatering('thirdParty')} />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-extrabold"  >BYO catering/food allowed</p>
              <p className="text-slate-300"> Clients can hire a caterer of their choice or bring their own food</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleCatering('byoFood')} />
              <RoundedButton title='&#10003;' callback={() => handleCatering('byoFood')} />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-extrabold"  >Refreshments offered for guests</p>
              <p className="text-slate-300"> Provided for free with every booking</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleCatering('refreshments')} />
              <RoundedButton title='&#10003;' callback={() => handleCatering('refreshments')} />
            </div>
          </div>

          <hr />

          <h1 className="font-extrabold text-xl">Alcohol provided by the venue</h1>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-extrabold"  >Liquor licence</p>
              <p className="text-slate-300"> Your venue can sell or supply alcohol.</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleCatering('liqLicense')}/>
              <RoundedButton title='&#10003;' callback={() => handleCatering('liqLicense')} />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-extrabold">BYOB alcohol allowed</p>
              <p>Guest are welcome to bring their own alcoholic beverages</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleCatering('byob')} />
              <RoundedButton title='&#10003;' callback={() => handleCatering('byob')} />
            </div>
          </div>
        </div>
      }

      { step === 3 &&
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-4xl">Venue Details</h1>

          <hr />

          <div>
            <h2 className="font-extrabold text-xl">Parking</h2>
            <div className="flex justify-between">
              <p>Free parking on premises</p>
              <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleVenueDetails('freeOnSite')} />
              <RoundedButton title='&#10003;' callback={() => handleVenueDetails('freeOnSite')} />
              </div>
            </div>
            <div className="flex justify-between">
              <p>Free street parking</p>
              <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleVenueDetails('freeOffSite')} />
              <RoundedButton title='&#10003;' callback={() => handleVenueDetails('freeOffSite')} />
              </div>
            </div>
            <div className="flex justify-between">
              <p>Paid parking on premises</p>
              <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleVenueDetails('paidOnSite')} />
              <RoundedButton title='&#10003;' callback={() => handleVenueDetails('paidOnSite')} />
              </div>
            </div>
            <div className="flex justify-between">
              <p>Paid parking off premises</p>
              <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleVenueDetails('paidOffSite')} />
              <RoundedButton title='&#10003;' callback={() => handleVenueDetails('paidOffSite')} />
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
              <RoundedButton title='&#10005;' callback={() => handleVenueDetails('allowedEvents')} />
              <RoundedButton title='&#10003;' callback={() => handleVenueDetails('allowedEvents')} />
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
              <RoundedButton title='&#10005;' callback={() => handleVenueDetails('agePolicy')} />
              <RoundedButton title='&#10003;' callback={() => handleVenueDetails('agePolicy')} />
              </div>
            </div>
          </div>
        </div>
      }

      { step === 4 &&
        <div className="flex flex-col gap-6">
          <h1 className="font-extrabold text-4xl">Spaces at {overview.venueName}</h1>

          <hr />
          
          <div className="flex flex-col gap-4 ">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="font-extrabold text-xl">Space name</h1>
                <input type="text" name='name' id="" placeholder="New Space" className="bg-transparent border rounded-lg p-2" onChange={handleSpace} />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <h1 className="font-extrabold text-xl">What type of space is it?</h1>
                <p>Enter the type of space that most cloesly respresents the physical space being listed.</p>
                <input type="text" name="type" id="" placeholder="e.g. Mezzanine, Private Room, Patio" className="bg-transparent border rounded-lg p-2" onChange={handleSpace} />
              </div>
            </div>
          </div>

          <hr />

          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="font-extrabold text-xl">Guest capacity preferences</h1>
              <div className="flex flex-col gap-6">
                <div>
                  <p>Set a minimum number of attendees per event</p>
                  <input type="text" name="minCapacity" id="" placeholder="e.g. Mezzanine, Private Room, Patio" className="bg-transparent border rounded-lg p-2" onChange={handleSpace} />
                </div>
                <div>
                  <p>Set a maximum number of attendees per event</p>
                  <input type="text" name="maxCapacity" id="" placeholder="e.g. Mezzanine, Private Room, Patio" className="bg-transparent border rounded-lg p-2" onChange={handleSpace} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="font-extrabold text-xl">Space Size</h1>
              <div className="flex justify-between flex-col">
                <p>Floorspace</p>
                <div className="flex gap-2">
                  <input type="text" name="floorspace" id="" placeholder="e.g. Mezzanine, Private Room, Patio" className="bg-transparent border rounded-lg p-2" onChange={handleSpace} />
                  
                  <select className="bg-transparent" value={space.floorspaceType} onChange={handleSpace}>
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
            <textarea className="text-start w-full h-96 border rounded-b-lg p-4 text-black" placeholder="Write a description of the space..." onChange={handleSpace} />
          </div>

          <div className="border rounded-lg p-4 ">
            <h1 className="font-extrabold text-xl">Add an image of this space</h1>
            <input type="file" multiple name="" id="" />
          </div>

          <div>
            <Primary label="+Add another space" callback={handleSpaces}/>
          </div>
        </div>
      }

      { step === 5 &&
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-4xl">Photos</h1>

          <hr />

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-extrabold text-xl">Add venue photos</h1>
              <p>Be sure to include images of the facade, main areas, etc.</p>
            </div>
            <div className="border rounded-lg p-4 w-1/2">
              <input type="file" multiple name="venuePhotos" id="" onChange={handleVenuePhotos}/>
            </div>
          </div>
        </div>
      }

      { step === 6 &&
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-4xl">Facilities and Accessibility</h1>
          
          <hr />

          <h2 className="font-extrabold text-xl">Custom Facilities</h2>
          <p>Complement the standard facilities with your own custom facilities for guests.</p>
          <div className="flex gap-4">
            <input type="text" className="bg-transparent border rounded-lg" value={facility} onChange={handleFacility} />
            <RoundedButton title='&#43;' callback={handleFacilities} />
            {facilities.map(item => {
              return (
                <div key={item} className="flex items-center">
                  <Primary label={item} />
                </div>
              )
            })}
          </div>

          <hr />

          <h1 className="font-extrabold text-xl ">Music and Sound</h1>
          <p>Add the music and sound options you provide, including any noise limitations</p>

          <div className="w-1/2">
            <div className="flex justify-between items-center">
              <p>Clients can play their own music</p>
              <div className="flex gap-2">
                <RoundedButton title='&#10005;' callback={() => handleMusic('clientMusic')} />
                <RoundedButton title='&#10003;' callback={() => handleMusic('clientMusic')} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>Clients bring their own band</p>
              <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleMusic('clientBand')} />
              <RoundedButton title='&#10003;' callback={() => handleMusic('clientBand')} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>Clients can bring their own DJ</p>
              <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleMusic('clientDJ')} />
              <RoundedButton title='&#10003;' callback={() => handleMusic('clientDJ')} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>Space has noise restriction</p>
              <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleMusic('noiseRestriction')} />
              <RoundedButton title='&#10003;' callback={() => handleMusic('noiseRestriction')} />
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
              <RoundedButton title='&#10005;' callback={() => handleAccessiblity('wheelchairAccessible')} />
              <RoundedButton title='&#10003;' callback={() => handleAccessiblity('wheelchairAccessible')} />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-extrabold text-lg">Disabled access toilets</h3>
              <p className="wrap w-3/4">It is step-free from the space (otherwise there should be ramps or a lift to facilitate mobility), toilet room adheres to regulations for accessbile access.</p>
            </div>
            <div className="flex gap-2">
            <RoundedButton title='&#10005;' callback={() => handleAccessiblity('accessibleRestrooms')} />
            <RoundedButton title='&#10003;' callback={() => handleAccessiblity('accessibleRestrooms')} />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
            <h3 className="font-extrabold text-lg">Step-free guest entrance</h3>
              <p className="wrap w-3/4">The guest entrance is free of steps and barriers and the space is on street level.</p>
            </div>
            <div className="flex gap-2">
            <RoundedButton title='&#10005;' callback={() => handleAccessiblity('stepFreeEntrance')} />
            <RoundedButton title='&#10003;' callback={() => handleAccessiblity('stepFreeEntrance')} />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
            <h3 className="font-extrabold text-lg">Accessible parking lot</h3>
              <p className="wrap w-3/4">There's a private parking spot at least 11 feet (3.35 metres) wide. Or, there is public parking spot designated for a person with disabilities that has clear signage or markings.</p>
            </div>
            <div className="flex gap-2">
            <RoundedButton title='&#10005;' callback={() => handleAccessiblity('accessibleParking')} />
            <RoundedButton title='&#10003;' callback={() => handleAccessiblity('accessibleParking')} />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
            <h3 className="font-extrabold text-lg">Lift to all floors</h3>
              <p className="wrap w-3/4">If the venue is multi-leveled, there is a lift that serves all floors.</p>
            </div>
            <div className="flex gap-2">
            <RoundedButton title='&#10005;' callback={() => handleAccessiblity('lift')} />
            <RoundedButton title='&#10003;' callback={() => handleAccessiblity('lift')} />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
            <h3 className="font-extrabold text-lg">Cargo lift</h3>
              <p className="wrap w-3/4">If the venue is multi-leveled, there is a cargo lift to facilitate transportation of goods between floors.</p>
            </div>
            <div className="flex gap-2">
              <RoundedButton title='&#10005;' callback={() => handleAccessiblity('cargoLift')} />
              <RoundedButton title='&#10003;' callback={() => handleAccessiblity('cargoLift')} />
            </div>
          </div>

          <hr />
        </div> 
      }

      {step === 7 &&
        <div className="flex flex-col gap-10">
          <h1 className="font-extrabold text-4xl">Prices and opening hours</h1>

          <hr />

          <h1 className="font-extrabold text-xl">What is your pricing?</h1>
          <div className="flex justify-around gap-2">
            <div className="flex flex-col border rounded-lg items-center p-2 w-1/2">
              <h1>Flat rate</h1>
              <p>Charge based on hire fee per event.</p>
              <RoundedButton title="Select" callback={() => handlePricing('flatRate')}/>
            </div>
            <div className="flex flex-col border rounded-lg items-center p-2 w-1/2">
              <h1>Hourly rate</h1>
              <p>Charge based on hire fee per hour.</p>
              <RoundedButton title="Select" callback={() => handlePricing('hourlyRate')}/>
            </div>
            <div className="flex flex-col border rounded-lg items-center p-2 w-1/2">
              <h1>Dynamic Pricing</h1>
              <p>Charge based on the market</p>
              <RoundedButton title="Select" callback={() => handlePricing('dynamicPricing')}/>
            </div>
          </div>

          <hr />

          <div className="flex flex-col justify-around gap-4">
            <h1 className="font-extrabold text-xl">Days and opening hours</h1>
            <div className="flex flex-col gap-2 w-1/4">
              <div className="flex gap-4 justify-between items-center">
                <h3>Monday</h3>
                <div className="flex gap-2">
                <RoundedButton title="Open" callback={() => handleOpeningHours('monday', true)}/>
                <RoundedButton title="Closed" callback={() => handleOpeningHours('monday', false)}/>
                </div>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <h3>Tuesday</h3>
                <div className="flex gap-2">
                <RoundedButton title="Open" callback={() => handleOpeningHours('tuesday', true)}/>
                <RoundedButton title="Closed" callback={() => handleOpeningHours('tuesday', false)}/>
                </div>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <h3>Wednesday</h3>
                <div className="flex gap-2">
                <RoundedButton title="Open" callback={() => handleOpeningHours('wednesday', true)}/>
                <RoundedButton title="Closed" callback={() => handleOpeningHours('wednesday', false)}/>
                </div>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <h3>Thursday</h3>
                <div className="flex gap-2">
                <RoundedButton title="Open" callback={() => handleOpeningHours('thursday', true)}/>
                <RoundedButton title="Closed" callback={() => handleOpeningHours('thursday', false)}/>
                </div>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <h3>Friday</h3>
                <div className="flex gap-2">
                <RoundedButton title="Open" callback={() => handleOpeningHours('friday', true)}/>
                <RoundedButton title="Closed" callback={() => handleOpeningHours('friday', false)}/>
                </div>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <h3>Saturday</h3>
                <div className="flex gap-2">
                <RoundedButton title="Open" callback={() => handleOpeningHours('saturday', true)}/>
                <RoundedButton title="Closed" callback={() => handleOpeningHours('saturday', false)}/>
                </div>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <h3>Sunday</h3>
                <div className="flex gap-2">
                <RoundedButton title="Open" callback={() => handleOpeningHours('sunday', true)}/>
                <RoundedButton title="Closed" callback={() => handleOpeningHours('sunday', false)}/>
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
                <RoundedButton title='&#10005;' callback={handlePricing} />
                <RoundedButton title='&#10003;' callback={handlePricing} />
              </div>
            </div>
           
            <div className="flex justify-between items-center w-1/4">
              <h3>Corking fee</h3>
              <div className="flex gap-2">
                <RoundedButton title='&#10005;' callback={handlePricing} />
                <RoundedButton title='&#10003;' callback={handlePricing} />
              </div>
            </div>
           
            <div className="flex justify-between items-center w-1/4">
              <h3>Cold storage fee</h3>
              <div className="flex gap-2">
                <RoundedButton title='&#10005;' callback={handlePricing} />
                <RoundedButton title='&#10003;' callback={handlePricing} />
              </div>
            </div>
           
            <div className="flex justify-between items-center w-1/4">
              <h3>Coat check fee</h3>
              <div className="flex gap-2">
                <RoundedButton title='&#10005;' callback={handlePricing} />
                <RoundedButton title='&#10003;' callback={handlePricing} />
              </div>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-xl">Minimum number of hours for a booking</h1>
            <select name="" id="" className="bg-transparent border rounded-lg p-2 w-1/3" value={openingHours.minimumHours} onChange={handleMinimumHours}>
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 border rounded-lg ">
            <div className="p-4">
              <h1 className="font-extrabold text-xl">Pricing details</h1>
              <div className="flex gap-1">
                <p>Pricing comment</p>
                <span className='text-slate-400 '>(Optional)</span>
              </div>
            </div>
            <textarea name="pricingDetails" id="" placeholder='Comment here...' className="w-full h-52 p-4 text-black" value={pricing.pricingDetails} onChange={handlePricingDetails} />
          </div>
        </div>
      }

      { step === 8 && (
      <div className="flex flex-col gap-4">
        <h1 className="font-extrabold text-4xl">Cancellation policy</h1>
        <hr />
        <p>
          Guests may cancel their booking within 24 hours of the booking confirmation 
          (but no later than 48 hours before the event) and receive a full refund. 
          Bookings cancelled after 24 hours (or less than 48 hours before the event) 
          will follow the cancellation policy selected below. Cancellations by host 
          are always fully refunded.
        </p>

        {[
          {
            id: 'cancel_policy_1',
            title: 'Very flexible',
            description: [
              'Cancellations up to 24 hours from event start time will receive a full refund.',
              'Cancellations for events starting within 24 hours are non-refundable.',
            ],
          },
          {
            id: 'cancel_policy_2',
            title: 'Flexible',
            description: [
              'Cancellations up to 7 days in advance will receive a full refund.',
              'Cancellations up to 7 days to 24 hours in advance will receive a 50% refund.',
              'Cancellations for events starting within 24 hours are non-refundable.',
            ],
          },
          {
            id: 'cancel_policy_3',
            title: 'Standard 30 day',
            description: [
              'Cancellations 30 days in advance will receive a full refund.',
              'Cancellations up to 7 to 30 days in advance will receive a 50% refund.',
              'Cancellations for events starting within 7 days are non-refundable.',
            ],
          },
          {
            id: 'cancel_policy_4',
            title: 'Standard 60 day',
            description: [
              'Cancellations 60 days in advance will receive a full refund.',
              'Cancellations up to 60 to 30 days in advance will receive a 50% refund.',
              'Cancellations for events starting within 30 days are non-refundable.',
            ],
          },
        ].map((policy) => (
          <div key={policy.id} className="flex items-center gap-10">
            <input
              type="radio"
              name="cancel_policy"
              value={policy.id}
              onChange={() => handleCancelPolicy(policy.id)}
              checked={selectedPolicy === policy.id}
            />
            <div className="flex flex-col w-1/2">
              <h3 className="font-extrabold text-xl">{policy.title}</h3>
              {policy.description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>)
      }

      <div className="flex justify-between p-4 mb-10">
        <Primary label="Back" callback={handlePrev} size='3xl' />
        <Primary label="Continue" callback={handleNext} size='3xl' />
      </div>
    </div>
  );
};

export default VenueIngestion;
