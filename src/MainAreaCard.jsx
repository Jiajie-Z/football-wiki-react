import React, { useState } from 'react';
import oldTrafford from './images/old traford.jpeg';
import madrid from './images/madrid.jpeg';
import allianz from './images/allianzArena.jpeg';
import campNou from './images/camp nou.jpeg';
import emirates from './images/emiratesStadium.jpeg';
import './MainAreaCard.css'



function Carousel({ images, descriptions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container">
      <button className="button__prev" onClick={prevImage}>
        {'<'}
      </button>
      <img className="image" src={images[currentIndex]} alt={descriptions[currentIndex]} />
      <p className="description">{descriptions[currentIndex]}</p>
      <button className="button__next" onClick={nextImage}>
        {'>'}
      </button>
    </div>
  );
}

function MainAreaCard() {
  const images = [
    oldTrafford, madrid, campNou, emirates, allianz
  ];

  const descriptions = [
    "Old Trafford, home stadium of Manchester United.",
    "Metropolitano Stadium, home stadium of Atlético de Madrid.",
    "Camp Nou Stadium, home stadium of FC Barcelona.",
    "Emirates Stadium, home stadium of Arsenal FC.",
    "Allianz Stadium, home stadium of FC Bayern Munich.",
  ];

  return (
    <div>
      <h2>Stadiums of Some Famous Teams</h2>
      <Carousel images={images} descriptions={descriptions} />
    </div>
  );
}

export default MainAreaCard;
