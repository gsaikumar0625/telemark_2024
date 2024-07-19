import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../components/about'; 
import Team from '../components/team';
import Home from '../components/home'; 
import TopBar from './topbar';
import NavBar from './navbar';
import Footer from './footer';
import AssetTracking from '../components/projects/asset_tracking';
import SolarOptimization from '../components/projects/solar_optimization';
import Contact from '../components/contact';

const Layout = () => {
  return (
    <div>
      <div className="sticky top-0 z-10">
     <TopBar/>
     <NavBar/>
     </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/asset_tracking" element={<AssetTracking />} />
        <Route path="/solar_optimization" element={<SolarOptimization />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/" element={<Home />} /> {/* Home route */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default Layout;