import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import TestiMonials from './components/Testimonials';

function App() {
  return (
    <div>
      <section><Navbar/><Hero/></section>
      <section><About/></section>
      <section><Skills/></section>
      <section><Work/></section>
      <section><TestiMonials/></section>
      <section><Contact/></section>
    </div>
  );
}

export default App;
