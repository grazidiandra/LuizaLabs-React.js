import React from 'react';
import './style.css'


const Result = ({logradouro, bairro, cep, localidade, method}) => { 
    return (
     <div className='result-container'>
       <span className='result-span-btn'>
       <button className='result-btn' onClick={method}><i className="fa fa-times"></i></button>
       </span>
       <span className='result-span-infos'>
          <h3>{logradouro}</h3>
          <p>{bairro} </p>
          <p>{localidade}</p>
          <p>{cep}</p>
       </span>
     </div>
    );
  }
export default Result;