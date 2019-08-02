import React, { Component } from "react";

import api from "../../services/api";

import { Button } from "./styles";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      descricao: "",
      concluido: false
    };
  }

  onInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  cadastrar = () => {
    let data = this.state;
    let token = this.props.location.state.token;
    api
      .post("tarefas/", data, {
        headers: { authorization: token }
      })
      .then(response => {
        this.props.history.push({
          pathname: "/list",
          state: { token: token }
        });
      });
  };

  render() {
    return (
      <div>
        <br />
        <input
          name="titulo"
          placeholder="Titulo"
          onChange={this.onInputChange}
        />
        <br />
        <br />
        <input
          name="descricao"
          placeholder="descricao"
          onChange={this.onInputChange}
        />
        <br />
        <br />
        <Button onClick={this.cadastrar}>Cadastrar</Button>
      </div>
    );
  }
}

export default Create;
