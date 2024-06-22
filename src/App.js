// src/App.js
import React, { useState } from 'react';
import Header from './Component/Header';
import Modal from './Component/Modal'
import SecondSlide from './Component/ModalTwo';


function App() {
  const [showFirstSlide, setShowFirstSlide] = useState(true);
  const [showSecondSlide, setShowSecondSlide] = useState(false);

  const handleCloseFirstSlide = () => {
    setShowFirstSlide(false);
    setShowSecondSlide(true);
  };

  const handleCloseSecondSlide = () => {
    setShowSecondSlide(false);
  };

  return (
    <div className="App">
      <Header />
      {showFirstSlide && (
        <Modal 
        onClose={handleCloseFirstSlide}
        />
      )}
      {showSecondSlide && (
        <SecondSlide 
          onClose={handleCloseSecondSlide}
        />
      )}
    </div>
  );
}

export default App;
