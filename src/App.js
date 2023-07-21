import React from 'react';
import './App.scss';
import About from './Components/About/About';
import Button from './Components/Button/Button';
import People from './Components/People/People';
import History from './Components/History/History';
import Footer from './Components/Footer/Footer';
import Community from './Components/Community/Community';

function App() {
  return (
    <>
      <About />
      <Button />
      <People />
      <History />
      <Community/>
      <Footer />
    </>
  );
}

export default App;
