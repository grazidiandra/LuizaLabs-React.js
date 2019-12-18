import React, { Component } from 'react';
import Search from '../component/search';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import './style.css'
import Result from '../component/result';

class Cep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cep: '',
      address: null,
      error: ''
    }
    this.searchCep = this.searchCep.bind(this)
    this.getCep = this.getCep.bind(this)
    this.closeCep = this.closeCep.bind(this)
  }

  searchCep(e) {
    let { value } = e.target;
      this.setState({
        cep: value,
        error: ''
      })
  }

  getCep() {
    if(!this.state.cep) {
      this.setState({
        error: 'Preencha o campo de CEP '
      })
    } else {
      axios({
        url: `https://viacep.com.br/ws/${this.state.cep}/json/?callback=address`,
        adapter: jsonpAdapter,
        callbackParamName: 'address'
      })
      .then(response => {
        if(response.data.erro) {
          this.setState({ 
            error: 'CEP não encontrado' })
        } else {
          this.setState({
            address: response.data })
        }
      })
      .catch(err => {
        this.setState({ error: 'Preencha com um CEP válido' });
      })
    }
  }

  closeCep() {
    this.setState({
      address: null,
      cep: ''
    })
  }

  render() {
    return (
      <div className='pageCep-container'>
        <p>Consultar</p>
      <div className='pageCep-container-search'>
       <p>{this.state.error}</p>
       <Search placeholder='00000-000' value={this.state.cep} method={this.searchCep} onclick={this.getCep}/> 
      </div>
      {this.state.address ? <Result {...this.state.address} method={this.closeCep}/> : null }
        
      </div>
    );
  }
}

export default Cep;