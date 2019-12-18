import React from 'react';


const Result = ({logradouro, bairro, cep, localidade, method}) => { 
    return (
     <div>
       <button onClick={method}><i className="fa fa-times"></i></button>
       <h3>{logradouro}</h3>
       <p>{bairro} </p>
       <p>{localidade}</p>
       <p>{cep}</p>
     </div>
    );
  }
export default Result;