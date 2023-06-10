import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './Button'
import Textbox from './Textbox'
import { addCard } from '../actions/index'

export default function Form() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.saveData.data);
   
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleClear = () => {
    setName('');
    setDescription('');
    setImage('');
    setPrice('');
  }

  const handleAdd = () => {
    dispatch(addCard({ name, description, price, image }));
    console.log(cards)
    handleClear();
  };

    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
      }}>
        <Textbox title='name:' value={name} onChange={e => setName(e.target.value)}/>
        <Textbox title='description:' value={description} onChange={e => setDescription(e.target.value)}/>
        <Textbox title='price:' value={price} onChange={e => setPrice(e.target.value)}/>
        <Textbox title='image:' value={image} onChange={e => setImage(e.target.value)}/>
        <Button text='clear inputs' onClick={handleClear}/>
        <br/>
        <Button text='add' onClick={handleAdd}/>
      </div>
    );
}
