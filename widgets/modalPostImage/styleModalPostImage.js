import styled from "styled-components";
export const DialogStyle = styled.div`
  .title-dialog {
    font-size: 25px;
    font-weight: 500;
    line-height: 36px;
    padding-bottom: 25px;
    margin-top: 3vh;
    display: flex;
    width: 100%;
    justify-content: center;
    white-space: nowrap;
  }
  .container-input {
    z-index: 1;
    display: flex;
    padding-top: 20px;
    margin: 10px;
  }
  .container-content-facebook {
    display: flex;
    align-items: center;
    // padding-top: 20px;
    margin: 10px;
    margin-left: 15px;
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
  h2 {
    // font-family: "Roboto", sans-serif;
    font-size: 26px;
    line-height: 1;
    color: #000000;
    margin-bottom: 0;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    color: #000000;
  }
  // Upload Demo
  //
  .uploader {
    display: block;
    clear: both;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;

    label {
      float: left;
      clear: both;
      width: 100%;
      padding: 2rem 1.5rem;
      text-align: center;
      background: #fff;
      border-radius: 7px;
      border: 3px solid #eee;
      transition: all 0.2s ease;
      user-select: none;

      &:hover {
        border-color: #000000;
      }
      &.hover {
        border: 3px solid #000000;
        box-shadow: inset 0 0 0 6px #eee;

        #start {
          i.fa {
            transform: scale(0.8);
            opacity: 0.3;
          }
        }
      }
    }

    #start {
      float: left;
      clear: both;
      width: 100%;
      &.hidden {
        display: none;
      }
      i.fa {
        font-size: 50px;
        margin-bottom: 1rem;
        transition: all 0.2s ease-in-out;
      }
    }
    #response {
      float: left;
      clear: both;
      width: 100%;
      &.hidden {
        display: none;
      }
      #messages {
        margin-bottom: 0.5rem;
      }
    }

    #file-image {
      display: inline;
      margin: 0 auto 0.5rem auto;
      width: auto;
      height: auto;
      max-width: 180px;
      &.hidden {
        display: none;
      }
    }

    #notimage {
      display: block;
      float: left;
      clear: both;
      width: 100%;
      &.hidden {
        display: none;
      }
    }

    progress,
    .progress {
      // appearance: none;
      display: inline;
      clear: both;
      margin: 0 auto;
      width: 100%;
      max-width: 180px;
      height: 8px;
      border: 0;
      border-radius: 4px;
      background-color: #eee;
      overflow: hidden;
    }

    .progress[value]::-webkit-progress-bar {
      border-radius: 4px;
      background-color: #eee;
    }

    .progress[value]::-webkit-progress-value {
      background: linear-gradient(to right, #ffffff 0%, #000000 50%);
      border-radius: 4px;
    }
    .progress[value]::-moz-progress-bar {
      background: linear-gradient(to right, #ffffff 0%, #000000 50%);
      border-radius: 4px;
    }

    input[type="file"] {
      display: none;
    }

    .btn {
      display: inline-block;
      margin: 0.5rem 0.5rem 1rem 0.5rem;
      clear: both;
      font-family: inherit;
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
      text-transform: initial;
      border: none;
      border-radius: 0.2rem;
      outline: none;
      padding: 0 1rem;
      height: 36px;
      line-height: 36px;
      color: #fff;
      transition: all 0.2s ease-in-out;
      box-sizing: border-box;
      background: #000000;
      border-color: #000000;
      cursor: pointer;
    }
  }
`;
