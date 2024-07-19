import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/about'; 
import Team from './components/team';
import Home from './components/home'; // Import Home component
import AssetTracking from './components/projects/asset_tracking';
import SolarOptimization from './components/projects/solar_optimization';

const routes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/asset_tracking" element={<AssetTracking />} />
      <Route path="/solar_optimization" element={<SolarOptimization />} />
      <Route element={<Home />} /> {/* Home route */}
    </Routes>
  );
}

export default routes;