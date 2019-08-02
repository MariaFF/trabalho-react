import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  border-radius: 4px;
  background: #7159c1;
  color: #fff;
  height: 40px;
`;

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  }

  div {
    display: flex;
    height: 40px;
    justify-content: flex-end;
    button {
      border: 0;
      border-radius: 4px;
      background: #7159c1;
      color: #fff;
    }
  }
`;

export const TodoTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 6px;
  }
`;
