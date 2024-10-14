// App.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import RoomsAndSuites from './components/RoomsAndSuites';
import DiningAndRestaurants from './components/DiningAndRestaurants';
import SpecialOffers from './components/SpecialOffers';
import Gallery from './components/Gallery';
import GuestReviews from './components/GuestReviews';
import LocationAndGettingHere from './components/LocationAndGettingHere';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <RoomsAndSuites />
      <DiningAndRestaurants />
      <SpecialOffers />
      <Gallery />
      <GuestReviews />
      <LocationAndGettingHere />
      <ContactUs />
      <Blog />
      <FAQ />
      <Footer /> 
    </div>
  );
};

export default App;











