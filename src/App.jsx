import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from './particlesConfig'; // We will create this config file

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
      <Header />
      <main id="main-content">
        <Home />
        <About />
        <Events />
        <Team />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;