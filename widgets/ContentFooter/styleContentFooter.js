import styled from "styled-components";

export const StyleContentFooter = styled.div`
  height: 450px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  display: flex;
  justify-content: flex-end;
  .container-card {
    // position: relative;
    // z-index: 3;
    margin-right: 60px;
    width: 400px;
    height: 100%;
    background: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 1px 1px 1px 1px;
    transform: translate3d(0, 500px, 0);
    transition: transform 0.4s ease;
  }
  .container-chat {
    width: 100%;
    background: #fff;
  }
  button {
    height: 40px;
  }
  .container-input-button {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
  .container-user-chat {
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .user-facebook {
    font-weight: 500;
  }
  .time-facebook {
    color: gray;
    font-size: 14px;
  }
  .three-dot {
    cursor: pointer;
    margin-right: 15px;
  }
  .container-chat-facebook {
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding: 10px;
    // margin: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 1px 0px;
  }
  .chat {
    overflow: auto;
    margin: 15px;
    height: 60%;
  }
  .chat::-webkit-scrollbar {
    width: 12px;
  }
  .chat::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  .chat::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  .active-chat {
    transform: translate3d(0, 10px, 0);
  }

  // chat room
}
.bubbleWrapper {
	padding: 10px 10px;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	align-self: flex-end;
  color: #fff;
}
.inlineContainer {
  display: inline-flex;
}
.inlineContainer.own {
  flex-direction: row-reverse;
}
.inlineIcon {
  width:20px;
  object-fit: contain;
}
.ownBubble {
	min-width: 60px;
	max-width: 700px;
	padding: 14px 18px;
  margin: 6px 8px;
	background-color: #5b5377;
	border-radius: 16px 16px 0 16px;
	border: 1px solid #443f56;
 
}
.otherBubble {
	min-width: 60px;
	max-width: 700px;
	padding: 14px 18px;
  margin: 6px 8px;
	background-color: #6C8EA4;
	border-radius: 16px 16px 16px 0;
	border: 1px solid #54788e;
  
}
.own {
	align-self: flex-end;
}
.other {
	align-self: flex-start;
}
span.own,
span.other{
  font-size: 14px;
  color: grey;
}
`;
