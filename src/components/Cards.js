import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCard, showDetails, removeCard } from '../actions/index'


export default function Cards() {
  const cards = useSelector(state => state.saveData.data);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Cards:</h3>
      {cards.slice().reverse().map((card, index) => (
        <div key={index}>
          <button
            className="overlay__close"
            type="button"
            onClick={() => { dispatch(removeCard({ index: cards.length - 1 - index })); }}
          />
          <a onClick={() => {
            dispatch(selectCard({ index: cards.length - 1 - index }));
            dispatch(showDetails({ val: true }));
          }}
            style={{ display: 'block', border: '3px solid' }}>
            <h2>{card.name}</h2>
            <img src={card.image} width="150" height="150" />
          </a>
        </div>
      ))}
    </div>
  );
}