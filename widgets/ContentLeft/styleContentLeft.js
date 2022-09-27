import styled from "styled-components";

export const StyleContentLeft = styled.div`
  position: fixed;
  width: 25%;
  .content-left-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 5px;
    font-size: 18px;
    font-weight: 500;
  }
  .content {
    padding-left: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 70px;
  }
  .position-right {
    margin-right: 10px;
  }
  .title-shortcuts {
    color: gray;
    margin-left: 15px;
  }
  hr {
    width: 78%;
    margin: 10px;
    margin-left: 15px;
    border-color: #cccccc;
  }
  .content:hover {
    background-color: #cccccc;
    border-radius: 8px;
  }
`;
