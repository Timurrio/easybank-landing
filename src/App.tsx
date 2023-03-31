import './App.scss';
import { ArticlesSection } from './components/ArticlesSection/ArticlesSection';
import { FeaturesSection } from './components/FeaturesSection/FeaturesSection';
import { FooterSection } from './components/FooterSection/FooterSection';
import { IntroSection } from './components/IntroSection/IntroSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <FeaturesSection />
      <ArticlesSection />
      <FooterSection />
    </div>
  );
}

export default App;
