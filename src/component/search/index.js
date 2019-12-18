import React from 'react';
import './style.css'

const Search = ({ value, method, placeholder, onclick}) =>{
    return (
        <div className='search-container'>
          <p className='search-text'>CEP</p>
          <input className='search-input' type="text" placeholder={placeholder} value={value} onChange={method}/>
          <button className='search-btn' onClick={onclick}>Buscar</button>
        </div>
    );
  }
export default Search;
