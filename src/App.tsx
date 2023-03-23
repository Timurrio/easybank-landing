import './App.scss';
import { IntroSection } from './components/IntroSection/IntroSection';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
    </div>
  );
}

export default App;
