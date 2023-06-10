import React from 'react';
import { useSelector } from 'react-redux';

export default function Cards() {
  const cards = useSelector(state => state.saveData.data);

  if (!cards) {
    console.log(cards)
    return <div>1<h3>{cards}</h3></div>
  }

  return (
    <div>
      <h3>Cards:</h3>
      {cards.slice().reverse().map((card, index) => (
        <div key={index}>
          <a href={card.image} target="_blank" style={{ display: 'block', border: '3px solid' }}>
            <h2>{card.name}</h2>
            <img src={card.image} width="200" height="200" />
          </a>
        </div>
      ))}
    </div>
  );
}