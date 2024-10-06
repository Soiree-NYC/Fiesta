import SlideMenu from "../ui/inputs/SlideMenu";
import Feed from "../ui/cards/Feed";
import SimpleCard from "../ui/cards/SimpleCard";

const Home = () => {
  const items  = [<button>blep</button>,<button>blep</button>,<button>blep</button>,<button>blep</button>,<button>blep</button>,<button>blep</button>,<button>blep</button>,<button>blep</button>,];

  const feedItems = [<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,<SimpleCard />,]

  return (
    <main className='px-8'>
      <SlideMenu items={items} />
      <Feed children={feedItems}/>
      <section></section>
    </main>
  );
};

export default Home;
