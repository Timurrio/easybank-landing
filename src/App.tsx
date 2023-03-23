import './App.scss';
import { ArticlesSection } from './components/ArticlesSection/ArticlesSection';
import { FeaturesSection } from './components/FeaturesSection/FeaturesSection';
import { IntroSection } from './components/IntroSection/IntroSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <FeaturesSection />
      <ArticlesSection />
    </div>
  );
}

export default App;
