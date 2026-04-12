import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Projetos from './components/Projetos';
import Books from './components/Books';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Experiences />
        <Testimonials />
        <Projetos />
        <Books />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
