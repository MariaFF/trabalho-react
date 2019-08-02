import axios from "axios";

export const api = axios.create({
  baseURL: "https://trabalho-node.herokuapp.com/",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*"
  }
});

export const getTodos = params => {
  return api.get("https://trabalho-node.herokuapp.com/tarefas", {
    headers: { authorization: params }
  });
};

export default api;
