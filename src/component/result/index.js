import React from 'react';
import './style.css';


const Result = ({ logradouro, bairro, cep, localidade, method }) => { 
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
          <iframe className='result-map' title='map' scrolling="no" width="400" height="250" src={`https://www.google.com.br/maps?q=${cep},%20Brasil&output=embed`} />
       </span>
     </div>
    );
  }

export default Result;
