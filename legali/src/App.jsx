import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutPage'
import ContactUs from './pages/ContactPage';
import ServicesPage from './pages/ServicePage';
import ServiceIdPage from './pages/ServiceIdPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutUs' element= {<AboutUs/>} />
      <Route path='/contactUs' element={<ContactUs />} />
      <Route path='/services' element={<ServicesPage />} />
      <Route path='/services/:serviceId' element={<ServiceIdPage />} />
      {/* <Route path='/portfolio' element={<Portfolio />} /> */}
    </Routes>
  );
}

export default App;
