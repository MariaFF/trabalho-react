import React, { Component } from "react";
import api from "../services/api";
import { Button } from "./todo/styles";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: ""
    };
  }

  onInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  onCadastrar = () => {
    let data = this.state;
    api.post("usuarios/", data).then((response, request) => {
      this.props.history.push({ pathname: "/" });
    });
  };
  render() {
    return (
      <div>
        <br />
        <input name="nome" placeholder="Nome" onChange={this.onInputChange} />
        <br />
        <br />
        <input name="email" placeholder="Email" onChange={this.onInputChange} />
        <br />
        <br />
        <input name="senha" placeholder="Senha" onChange={this.onInputChange} />
        <br />
        <br />
        <Button onClick={this.onCadastrar}>Cadastrar</Button>
      </div>
    );
  }
}

export default Register;
