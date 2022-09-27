import styled from "styled-components";

export const StyleNavbar = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 1000;
  background-color: white;
  // border-bottom: 1px solid;
  // box-shadow: 0px 0px 5px 0px gray;
  .font-navbar {
    // margin: 10px;
    display: flex;
    // justify-content: center;
    align-items: center;
  }
  .icon-navbar {
    margin: 10px;
  }
  .middle-navbar {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .iconHeader1 {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .iconHeader2 {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .iconHeader3 {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .iconHeader4 {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .iconHeader5 {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .footer-navbar {
    margin-right: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .iconFooter1 {
    cursor: pointer;
  }
  .iconFooter2 {
    cursor: pointer;
  }
  .iconFooter3 {
    cursor: pointer;
  }
  .active-nav {
    color: #1178f2;
    border-bottom: 2px solid #1178f2;
  }
`;
