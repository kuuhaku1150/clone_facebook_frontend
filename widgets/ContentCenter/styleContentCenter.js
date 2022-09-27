import styled from "styled-components";

export const StyleContentLCenter = styled.div`
  width: 70%;
  // z-index: 1;
  .container-post {
    background: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 100%;
  }
  .container-input {
    z-index: 1;
    display: flex;
    padding-top: 20px;
    margin: 10px;
  }
  .activity-all {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .activity-all:hover {
    background: #cccc;
    border-radius: 10px;
  }

  .container-facebook {
    z-index: 1;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 100%;
  }
  .container-content-facebook {
    display: flex;
    align-items: center;
    padding-top: 20px;
    margin: 10px;
  }

  .container-user-post {
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 10px;
  }
  .user-facebook {
    font-weight: 500;
  }
  .time-facebook {
    color: gray;
    font-size: 14px;
  }
  .content-facebook {
    margin: 10px;
  }
  .like {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: gray;
  }
  .comment {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: gray;
  }
  .share {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: gray;
  }
  .three-dot {
    cursor: pointer;
  }

  .like:hover,
  .comment:hover,
  .share:hover {
    background: #cccc;
    border-radius: 5px;
  }
  .active {
    color: #1178f2;
  }

  //----------------------------------- show dropdown -----------------------------------------------

  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropbtn {
    border: none;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: #000000;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown a:hover {
    background-color: #ddd;
  }

  .show {
    display: block;
  }
  //----------------------------------- close dropdown -----------------------------------------------
  .container-content-comment {
    display: flex;
    margin: 10px;
  }
  .card-content-comment {
    display: flex;
    flex-direction: column;
    padding: 5px;
    background-color: #ddd;
    border-radius: 10px;
  }
  .user-comment {
    font-weight: bold;
  }
  .content-comment {
  }
`;
