import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner/Banner';
import HistorySection from './Components/history';
import SwaRopwardhinee from './Components/SwaRopwardhinee';
import PerformanceSection from './Components/Performance';
import ContactUs from './Components/ContactUs';


function App() {
  return (
    <div className="App ">
      <Navbar />
      <Banner />
      <HistorySection />
      <SwaRopwardhinee />
      <PerformanceSection />
      <ContactUs />
    </div>
  );
}

export default App;
