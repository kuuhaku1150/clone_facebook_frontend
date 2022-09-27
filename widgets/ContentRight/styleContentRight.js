import styled from "styled-components";

export const StyleContentRight = styled.div`
  position: fixed;
  width: 23%;
  .container-chat: {
    width: 100%;
    background: #fff;
  }
  th,
  td {
    padding: 8px;
    text-align: left;
  }
  th {
    font-size: 20px;
    color: #b0b3b8;
  }
  td {
    cursor: pointer;
    font-size: 18px;
  }
  table {
    width: 100%;
  }
  .table-header {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  td:hover {
    background-color: #cccccc;
    border-radius: 8px;
  }
`;
