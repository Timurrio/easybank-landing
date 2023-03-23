import './App.scss';
import { FeaturesSection } from './components/FeaturesSection/FeaturesSection';
import { IntroSection } from './components/IntroSection/IntroSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <FeaturesSection />

    </div>
  );
}

export default App;
