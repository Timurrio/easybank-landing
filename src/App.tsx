import { useState } from 'react';
import './App.scss';
import { ArticlesSection } from './components/ArticlesSection/ArticlesSection';
import { FeaturesSection } from './components/FeaturesSection/FeaturesSection';
import { FooterSection } from './components/FooterSection/FooterSection';
import { IntroSection } from './components/IntroSection/IntroSection';
import Navbar from './components/Navbar/Navbar';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';

function App() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="App">
      <Navbar isActive={isActive} setIsActive={setIsActive} />
      {isActive ? <MobileNavigation setIsActive={setIsActive} /> : null}
      <IntroSection />
      <FeaturesSection />
      <ArticlesSection />
      <FooterSection />
    </div>
  );
}

export default App;
