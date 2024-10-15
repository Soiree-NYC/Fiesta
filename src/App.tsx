import './styles.css';

import NavBar from './components/ui/layout/NavBar';
import Home from './components/pages/Home';

function App() {
  return (
    <div className='bg-skyline flex-col px-8 bg-cover bg-center h-screen overflow-auto'>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
