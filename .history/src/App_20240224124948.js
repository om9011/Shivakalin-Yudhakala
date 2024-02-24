import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner/Banner';
import HistorySection from './Components/history';
import SwaRopwardhinee from './Components/SwaRopwardhinee';
import PerformanceSection from './Components/Performance';


function App() {
  return (
    
      <Navbar >
      <div className="App px-10">
        <Banner />
        <HistorySection />
        <SwaRopwardhinee />
        <PerformanceSection />
      </div>
    </>
  );
}

export default App;
