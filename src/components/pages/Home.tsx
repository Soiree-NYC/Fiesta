import SlideMenu from "../ui/inputs/SlideMenu";
import Feed from "../ui/cards/Feed";
import SimpleCard from "../ui/cards/SimpleCard";

const Home = () => {
  const items  = ['blep','blep','blep','blep','blep','blep','blep','blep',];

  const feedItems = [
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
    <SimpleCard
      title='Hotel Beacon'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      neighborhood='UWS'
      price={80}
      price_was={120}
      image='https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg'
    />,
  ];

  return (
    <main className="px-8">
      <SlideMenu items={items} />
      <Feed children={feedItems} />
    </main>
  );
};

export default Home;
