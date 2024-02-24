import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner/Banner';
import HistorySection from './Components/history';
import SwaRopwardhinee from './Components/SwaRopwardhinee';
import PerformanceSection from './Components/Performance';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';


function App() {
  return (
    
    <Navbar >
    <div className="App">
      <Banner />
      <HistorySection />
      <SwaRopwardhinee />
      <PerformanceSection />
      <ContactUs />
      <Footer />
    </div>
    </Navbar>
  );
}

export default App;
