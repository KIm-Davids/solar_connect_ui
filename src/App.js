import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Earnings from "./Pages/Earnings";
import ContactUs from "./Pages/ContactUs";
import TechnicianOnBoarding from "./Components/SignUpAndLoginPage/Technician/TechnicianOnBoarding";
import Home from './Components/HomePage/Home'
import PricingApp from "./Components/Subscribe/SubscriptionBody/body"


function App() {
  return (
    <div>
        <Router>
            <Routes>
                 {/*Add other routes here*/}
                <Route path="/home" element={<Home/>} />
                <Route path="/technician-earnings" element={<Earnings/>} />
                <Route path="/find-job" element={<ContactUs/>} />
                <Route path="/subscribe" element={<PricingApp/>} />
                <Route pathe="/profile" element={<TechnicianOnBoarding/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
