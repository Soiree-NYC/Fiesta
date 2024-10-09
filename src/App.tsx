import './styles.css';

import NavBar from './components/ui/layout/NavBar';
import Home from './components/pages/Home';

function App() {
  return (
    <div className='flex-col px-8 bg-skyline bg-cover bg-center h-screen'>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
