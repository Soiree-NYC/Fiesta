import SlideMenu from "../ui/inputs/SlideMenu";
import Feed from "../ui/cards/Feed";
import SimpleCard from "../ui/cards/SimpleCard";

const Home = () => {
  const items  = ['blep','blep','blep','blep','blep','blep','blep','blep',];

  const feedItems = [<SimpleCard />,
  // <SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,
]

  return (
    <main className="px-8">
      <SlideMenu items={items} />
      <Feed children={feedItems} />
      <section></section>
    </main>
  );
};

export default Home;
