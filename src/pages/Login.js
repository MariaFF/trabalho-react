import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { Button } from "./todo/styles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: ""
    };
  }

  onInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  onLogin = () => {
    let data = this.state;
    api.post("usuarios/login", data).then((response, request) => {
      let { data } = response;
      this.props.history.push({
        pathname: "/list",
        state: { token: data.token }
      });
    });
  };

  render() {
    return (
      <div>
        <br />
        <input name="email" placeholder="Email" onChange={this.onInputChange} />
        <br />
        <br />
        <input name="senha" placeholder="Senha" onChange={this.onInputChange} />
        <br />
        <br />
        <Button color="primary" onClick={this.onLogin}>
          Login
        </Button>
        <br />
        Ainda não é cadastrado, <Link to={"/register"}> cadastre-se aqui</Link>
      </div>
    );
  }
}

export default Login;
