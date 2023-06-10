import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showDetails } from '../actions/index'
import '../style/Overlay.css'

// overlay template from: https://medium.com/@code-flow/how-to-write-a-simple-and-reusable-overlay-component-using-react-7830dc4519a6
export default function Details({ props }) {
  const cards = useSelector(state => state.saveData.data);
  const selectedIndex = useSelector(state => state.saveData.index);
  const isShow = useSelector(state => state.saveData.show);
  const dispatch = useDispatch();
  const close = () => dispatch(showDetails({ val: false }));

  return (
    <Fragment>
      {isShow && (
        <div className="overlay">
          <div className="overlay__background" onClick={close} />
          <div className="overlay__container">
            <div className="overlay__controls">
              <button className="overlay__close" type="button" onClick={close} />
            </div>
            <h2>Name: {cards[selectedIndex].name}</h2>
            <p>Description: {cards[selectedIndex].description}</p>
            <p>Price: {cards[selectedIndex].price}</p>
            <img src={cards[selectedIndex].image} width="400" height="400" />
          </div>
        </div>
      )}
    </Fragment>
  );
}