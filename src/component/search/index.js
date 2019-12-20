import React from 'react';
import './style.css';
import MaskedInput from 'react-text-mask';

const Search = ({ value, method, placeholder, onclick }) => {
  return (
      <div className='search-container'>
        <p className='search-text'>CEP</p>
        <MaskedInput className='search-input' type="text" placeholder={placeholder} value={value} onChange={method} mask={[/\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/]}/>
        <button className='search-btn' onClick={onclick}>Buscar</button>
      </div>
  );
}

export default Search;
