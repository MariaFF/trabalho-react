import React, { Component } from "react";
import * as TodoService from "../../services/api";
import { Container, TodoTable } from "./styles";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  async componentDidMount() {
    let token = this.props.location.state.token;
    const response = await TodoService.getTodos(token);
    this.setState({ tasks: response.data });
  }

  renderTasks = () => {
    const { tasks } = this.state;
    return tasks.map(task => {
      return (
        <tr key={task.id}>
          <td>{task.id}</td>
          <td>{task.titulo}</td>
          <td>{task.descricao}</td>
          <td>{task.concluido ? "Sim" : "Não"}</td>
          <td>
            <button type="button" onClick={() => this.onConcluir(task.id)}>
              Concluir
            </button>
          </td>
          <td>
            <button type="button" onClick={() => this.onExcluir(task.id)}>
              Excluir
            </button>
          </td>
        </tr>
      );
    });
  };

  onConcluir = id => {
    let token = this.props.location.state.token;
    TodoService.api
      .put(`tarefas/${id}/concluido`, null, {
        headers: { authorization: token }
      })
      .then(response => {
        let newArr = this.state.tasks;
        let index = this.state.tasks.findIndex(task => {
          return id === task.id;
        });
        newArr[index].concluido = true;
        this.setState({ tasks: newArr });
      })
      .catch(err => {
        console.log("Pegou fogo aqui", err);
      });
  };

  onExcluir = id => {
    let token = this.props.location.state.token;
    TodoService.api
      .delete(`tarefas/${id}`, {
        headers: { authorization: token }
      })
      .then(response => {
        let newArr = this.state.tasks;
        let index = this.state.tasks.findIndex(task => {
          return id === task.id;
        });
        newArr.splice(index, 1);
        this.setState({ tasks: newArr });
      })
      .catch(err => {
        console.log("Pegou fogo aqui", err);
      });
  };

  novaTarefa = () => {
    this.props.history.push({
      pathname: "/create",
      state: { token: this.props.location.state.token }
    });
  };

  render() {
    return (
      <Container>
        <div>
          <button type="button" onClick={this.novaTarefa}>
            Nova Tarefa
          </button>
        </div>
        <TodoTable>
          <thead>
            <tr>
              <th>id</th>
              <th>Titulo</th>
              <th>Descricao</th>
              <th>Concluida</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>{this.renderTasks()}</tbody>
        </TodoTable>
      </Container>
    );
  }
}

export default List;
