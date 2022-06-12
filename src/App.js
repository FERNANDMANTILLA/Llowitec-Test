
import './App.css';
import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import HomeSection from './components/HomeSection';
import SecondSection from './components/SecondSection';
import { responsiveScript } from './helpers/responsive';
import {Slider} from './components/Slider';
import { Categories } from './components/Categories';
import {Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  useEffect(() => {
    responsiveScript();
  }
  , []);

  window.addEventListener("resize", responsiveScript);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <section id="home">
       <HomeSection/>
      </section>
      <section id="banner">
        <SecondSection/>
        <Slider></Slider>
      </section>
      <section id="categories">
      <Categories/>
      </section>
      <section id="contact">
      <Contact></Contact>
      </section>

      <footer>
      <Footer></Footer>
      </footer>
    </>
    
  );
}

export default App;
