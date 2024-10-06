import SlideMenu from "../ui/inputs/SlideMenu";

const Home = () => {
  const items  = [<button>blep</button>,<button>blep</button>,<button>blep</button>,<button>blep</button>,<button>blep</button>,<button>blep</button>,<button>blep</button>,<button>blep</button>,];

  return (
    <main className='px-8'>
      <SlideMenu items={items} />
      <section></section>
      <section></section>
    </main>
  );
};

export default Home;
