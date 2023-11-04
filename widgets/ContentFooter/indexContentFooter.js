import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import TextInputPost from "../../components/TextInputPost/indexTextInputPost";
import { StyleContentFooter } from "./styleContentFooter";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3300");
import { connect } from "react-redux";
import { UserIcon, XIcon } from "@heroicons/react/solid";
import { handleRemoveCardChat } from "../../redux/actions/indexUserAction";

const ContentFooter = (props) => {
  const [newMessage, setNewMessage] = useState([]);
  const fullName = localStorage.getItem("fullname");
  const [dataInput, setData] = useState("");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("data", data.index);
      setNewMessage((prevMessage) => [...prevMessage, data]);
      var chat = document.getElementsByClassName("chat");
      setTimeout(() => {
        for (let i = 0; i < chat.length; i++) {
          chat[i].scrollTop = chat[i].scrollHeight;
        }
      }, 100);
    });
    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  const closeChatRoom = (index) => {
    var current = document.getElementsByClassName("active-chat");
    current[index].className = current[index].className.replace(
      " active-chat",
      ""
    );
  };

  const dataLength = props.dataLength;

  const handleChat = (index) => {
    const payload = {
      chatId: props.chatId,
      username: fullName,
      message: dataInput[index],
      index: index,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };
    socket.emit("new_message", payload);
    clearInput("", "chat", index);
  };
  const handleInput = (event, type, index) => {
    setData({ ...dataInput, [index]: event?.target?.value });
  };
  const clearInput = (event, type, index) => {
    setData({ ...dataInput, [index]: event });
  };
  return (
    <StyleContentFooter>
      {dataLength >= 0 ? (
        props.dataChat.map((resChat, indexData) => (
          <div className="container-card" key={indexData}>
            <div className="container-chat-facebook">
              <UserIcon className="h-10" />
              <div className="container-user-chat">
                <div>
                  <div className="user-facebook">{resChat.fullName}</div>
                  <p className="time-facebook">16h</p>
                </div>
                <div
                  className="three-dot"
                  onClick={() => {
                    props.handleRemoveCardChat(indexData, resChat.id),
                      closeChatRoom(indexData);
                  }}
                >
                  <XIcon className="h-7" />
                </div>
              </div>
            </div>
            <div className="chat">
              {newMessage.length > 0 ? (
                newMessage.map((res, indexMess) =>
                  res.index === indexData ? (
                    res.username === fullName ? (
                      <div key={indexMess}>
                        <div className="bubbleWrapper">
                          <div className="inlineContainer own">
                            <Image
                              className="inlineIcon"
                              src="/images/iconFacebook.png"
                              alt="server Logo"
                              // layout="fixed"
                              width="30px"
                              height="30px"
                            />
                            <div className="ownBubble own">
                              {res.receiveMessage}
                            </div>
                            <span className="own">{res.time}</span>
                          </div>
                        </div>
                      </div>
                    ) : res.username === resChat.fullName ? (
                      <div className="bubbleWrapper" key={indexMess}>
                        <div className="inlineContainer">
                          <Image
                            className="inlineIcon"
                            src="/images/iconFacebook.png"
                            alt="server Logo"
                            // layout="fixed"
                            width="30px"
                            height="30px"
                          />
                          <div className="otherBubble other">
                            {res.receiveMessage}
                          </div>
                          <span className="other">{res.time}</span>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={indexMess}
                        style={{ visibility: "hidden" }}
                      ></div>
                    )
                  ) : (
                    <div key={indexMess} style={{ visibility: "hidden" }}></div>
                  )
                )
              ) : (
                <div style={{ visibility: "hidden" }}></div>
              )}
            </div>
            <div className="container-input-button" key={indexData}>
              <div
                className="flex ml-2 mr-2 items-center rounded-full bg-gray-100 p-2"
                style={{ width: "85%" }}
              >
                <TextInputPost
                  placeholder="..."
                  value={dataInput[indexData]}
                  handleChange={(e) => handleInput(e, "chat", indexData)}
                />
              </div>
              <button
                style={{
                  background: "orange",
                  color: "#fff",
                  borderRadius: "20px",
                }}
                onClick={() => handleChat(indexData)}
              >
                send
              </button>
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </StyleContentFooter>
  );
};

const mapStateToProps = (state) => ({
  dataChat: state.indexUser.indexChat,
  dataLength: state.indexUser.indexChat.length,
  chatId: state.indexUser.dataId,
});
const mapDispatchToProps = {
  handleRemoveCardChat: handleRemoveCardChat,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentFooter);
