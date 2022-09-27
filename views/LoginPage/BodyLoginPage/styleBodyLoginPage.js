import styled from "styled-components";

export const StyleBody = styled.div`
  width: 100%;
  height: 100%;
  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  .container-login {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .label-facebook {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: flex-end;
    // justify-content: flex-end;
  }
  .container-label {
    width: 50%;
  }
  // #1178f2
  .icon-label {
    color: #1178f2;
    font-weight: bold;
    font-size: 64px;
  }
  .desc-label {
    font-size: 24px;
  }
  .card-login {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
  }
  .form-login {
    background: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 50%;
    height: 400px;
    padding-top: 20px;
    margin: 10px;
  }
  .forget-password {
    width: 100%;
    display: flex;
    justify-content: center;
    cursor: pointer;
    color: #117f99;
  }
  .register-btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
