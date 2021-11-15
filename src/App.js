import React, {useState} from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import Hero from './components/section/Hero';
import { SliderData } from './data/SliderData';
import About from './components/section/About';
import { aboutData } from './data/AboutData';
import Benefit from './components/section/Benefit';
import { benefitData } from './data/BenefitData';
import Grow from './components/section/Grow';
import { growData } from './data/GrowData';
import Tokenomics from './components/section/Tokenomics';
import Roadmap from './components/section/Roadmap';
import { roadmapData } from './data/RoadmapData';
import Puchase from './components/section/Puchase'

import Footer from './components/section/Footer';
import Dropdown from './components/Dropdown';
import { PuchaseData } from './data/PuchaseData';
import { ecosystemData } from './data/EcosystemData';
import Partner from './components/section/Partner';
import { partnerData } from './data/PartnerData';



function App() {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };
  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData} />
      <About abouts={aboutData} />
      <Benefit benefits={benefitData} ecosystems={ecosystemData}/>
      <Tokenomics/>
      <Roadmap Roadmaps={roadmapData}/>
      <Grow Grows={growData} />
      <Partner Partners={partnerData} />
      <Puchase puchases={PuchaseData} />
      <Footer />
    </>
  );
}

export default App;
