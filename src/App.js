import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Earnings from "./Pages/Earnings";
import ContactUs from "./Pages/ContactUs";
import Subscribe from "./Pages/Subscribe"
import TechnicianOnBoarding from "./Components/SignUpAndLoginPage/Technician/TechnicianOnBoarding";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection"
import TechnicianCards from "./Components/Body/TechnicianCards"

function App() {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <TechnicianCards/>
        <Router>
            <Routes>
                 {/*Add other routes here*/}
                <Route path="/technician-earnings" element={<Earnings/>} />
                <Route path="/contact-us" element={<ContactUs/>} />
                <Route path="/subscribe" element={<Subscribe/>} />
                <Route pathe="/profile" element={<TechnicianOnBoarding/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
