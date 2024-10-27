import './App.css';
import LandingPage from './stores/pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import MobilePage from './stores/pages/MobilePage';
import KitchenPage from './stores/pages/KitchenPage';
import ComputerPage from './stores/pages/ComputerPage';
import WatchPage from './stores/pages/WatchPage';
import AcPage from './stores/pages/AcPage';
import FurniturePage from './stores/pages/FurniturePage';
import WomanPage from './stores/pages/WomanPage';
import MenPage from './stores/pages/MenPage';
import FridgePage from './stores/pages/FridgePage';
import MobileSingle from './singles/MobileSingle';
import UserCart from './stores/UserCart';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<LandingPage /> } />
        <Route path= '/kitchen' element = {<KitchenPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<ComputerPage />} />
        <Route path='/watch' element= {<WatchPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/men' element= {<MenPage />} /> 
        <Route path='/woman' element= {<WomanPage />} />             
        <Route path='/furniture' element= {<FurniturePage />} />             
        <Route path='/ac' element= {<AcPage />} /> 

        <Route path='/mobiles/:id' element = {<MobileSingle />} />
      <Route path='/cart' element = {<UserCart />} />
      {/*<Route path='/ac/:id' element = {<AcSingle />} />
      <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} /> */}


      </Routes>
    </div>
  );
}

export default App;
