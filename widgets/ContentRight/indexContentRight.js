// import TextInputPost from "../../components/TextInputPost/indexTextInputPost";
import React, { useEffect, useState } from "react";
import { StyleContentRight } from "./styleContentRight";
// import io from "socket.io-client";
import { connect } from "react-redux";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3300");
import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
  UserIcon,
} from "@heroicons/react/solid";
import authFacebook from "../../api/services/authFacebook";
import {
  handleCardChat,
  handleCurrentId,
} from "../../redux/actions/indexUserAction";
import { stringify } from "postcss";
// const socket = io.connect("http://localhost:3300");

const ContentRight = (props) => {
  const fullName = localStorage.getItem("fullname");
  // const [dataInput, setData] = useState({
  //   chat: "",
  // });
  const [userFacebook, setuserFacebook] = useState([]);

  useEffect(() => {
    fetchDataFacebook();
  }, []);

  const fetchDataFacebook = async () => {
    try {
      const resUserFacebook = await authFacebook.fetchUserFacebook();
      if (resUserFacebook.status === 200) {
        setuserFacebook(resUserFacebook.data.data);
      } else {
        alert("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const chatRoom = () => {
    var containerCard = document.getElementsByClassName("container-card");
    setTimeout(() => {
      for (let i = 0; i < containerCard.length; i++) {
        containerCard[i].className += " active-chat";
      }
    }, 100);

    var chat = document.getElementsByClassName("chat");
    setTimeout(() => {
      for (let i = 0; i < chat.length; i++) {
        chat[i].scrollTop = chat[i].scrollHeight;
      }
    }, 100);
  };
  const joinRoom = (id) => {
    socket.emit("join_room", id);
  };
  return (
    <StyleContentRight>
      <table>
        <thead>
          <tr>
            <th>Contacts</th>
            <th>
              <VideoCameraIcon className="h-5" />
            </th>
            <th>
              <SearchIcon className="h-5" />
            </th>
            <th>
              <DotsHorizontalIcon className="h-5" />
            </th>
          </tr>
        </thead>
        <tbody>
          {userFacebook.length > 0 ? (
            userFacebook.map((resUser, index) =>
              resUser.firstName + " " + resUser.lastName !== fullName ? (
                <tr key={index}>
                  <td
                    onClick={() => {
                      props.handleCardChat(
                        index,
                        resUser._id,
                        resUser.firstName + " " + resUser.lastName
                      ),
                        chatRoom(),
                        joinRoom(resUser._id),
                        props.handleCurrentId(resUser._id);
                    }}
                  >
                    {resUser.firstName + " " + resUser.lastName}
                  </td>
                </tr>
              ) : (
                <tr key={index}></tr>
              )
            )
          ) : (
            <tr>
              <td>no user</td>
            </tr>
          )}
        </tbody>
      </table>
    </StyleContentRight>
  );
};

const mapStateToProps = (state) => ({
  index: state.indexUser.index,
  id: state.indexUser.id,
});
// ส่งค่าไปยัง store เป็น object
const mapDispatchToProps = {
  handleCardChat: handleCardChat,
  handleCurrentId: handleCurrentId,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentRight);
