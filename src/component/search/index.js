import React from 'react';


const Search = ({ value, method, placeholder, onclick}) =>{
    return (
        <div>
          <p>CEP </p>
          <input type="text" placeholder={placeholder} value={value} onChange={method}/>
          <button onClick={onclick}>Buscar</button>
        </div>
    );
  }
export default Search;
