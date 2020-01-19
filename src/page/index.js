import React, { Component } from 'react';
import Search from '../component/search';
import api from '../service/api'
import './style.css';
import Result from '../component/result';
import LuizaLabs from '../component/luizalabsStyle';

class Cep extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cep: '',
      address: null,
      error: ''
    }
    
    this.searchCep = this.searchCep.bind(this);
    this.fetchCep = this.fetchCep.bind(this);
    this.reset = this.reset.bind(this);
  }

  searchCep(e) {
    let { value } = e.target;
      this.setState({
        cep: value,
        error: ''
      });
  }

  fetchCep() {
    if (!this.state.cep) {
      this.setState({
        error: 'Preencha o campo de CEP '
      });
    } else {
      api.get(`/${this.state.cep}/json/`)
      .then(response => {
        if (response.data.erro) {
          this.setState({ 
            error: 'CEP não encontrado' });
        } else {
          this.setState({
            address: response.data });
        }
      })
      .catch(() => {
        this.setState({ error: 'Preencha com um CEP válido' });
      })
    }
  }

  reset() {
    this.setState({
      address: null,
      cep: ''
    });
  }

  render() {
    return (
      <div className='pageCep-container'>
        <div className='pageCep-container-searchCep'>
          <p className='pageCep-text'>CONSULTAR</p>
          <p className='pageCep-text-err'>{this.state.error}</p>
          <Search placeholder='00000-000' value={this.state.cep} method={this.searchCep} onclick={this.fetchCep}/> 
          {this.state.address ? <Result {...this.state.address} method={this.reset}/> : null }
        </div>
        <LuizaLabs />
      </div>
    );
  }
}

export default Cep;
