import React from 'react';

export default function Textbox(props) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h3> {props.title}</h3>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder || ''}
      />
    </div>
  );
}
