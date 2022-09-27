import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StyleContentLCenter } from "./styleContentCenter";
import io from "socket.io-client";

import {
  UserCircleIcon,
  VideoCameraIcon,
  PhotographIcon,
  EmojiHappyIcon,
  ChatIcon,
  ThumbUpIcon,
  ShareIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import facebookService from "../../api/services/facebookService";
import TextInputPost from "../../components/TextInputPost/indexTextInputPost";
const socket = io.connect("http://localhost:3300");

export default function ContentCenter() {
  const [dataContentFacebook, setDataContentFacebook] = useState([]);

  // const [postContent, setPostContent] = useState("");
  // const [commentContent, setCommentContent] = useState("");
  const [dataInput, setData] = useState({
    postContent: "",
    commentContent: "",
  });

  const fullName = localStorage.getItem("fullname");
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    fetchDataFacebook();
  }, []);

  useEffect(() => {
    socket.on("receive_comment", (data) => {
      let payload = {
        userComment: {
          comm: data.comm,
          userComm: data.userComm,
        },
      };
      let eiei = [];
      dataContentFacebook.forEach((res) => {
        if (res._id === data.contentId) {
          eiei = res.comments;
          console.log("first", eiei);
          eiei.push(payload);
          console.log("second ", eiei);
          res.comments = eiei;
          setDataContentFacebook([...dataContentFacebook]);
        }
      });
    });
    return () => {
      socket.off("receive_comment");
    };
  }, [dataContentFacebook]);

  const fetchDataFacebook = async () => {
    try {
      const resFacebook = await facebookService.getDataFacebook();
      if (resFacebook.status === 200) {
        setDataContentFacebook(resFacebook.data.data);
      } else {
        alert("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (event, type) => {
    setData({ ...dataInput, [type]: event?.target?.value });
  };
  const clearInput = (event, type) => {
    setData({ ...dataInput, [type]: event });
  };

  const handleClickDropdown = (e, id, index) => {
    var currentDropdown = document.getElementsByClassName("dropdown-content");
    if (id === "three-dot") {
      currentDropdown[index].classList.toggle("show");
    }
  };

  const handleClick = (e, id, index) => {
    var element = e?.target;
    // var currentNav = document.getElementsByClassName("active");
    var classId = element.closest("." + id);
    // console.log(currentNav);
    classId.classList.toggle("active");
    // if (currentNav[index] !== undefined) {
    //   console.log(currentNav[index]);
    //   currentNav[index].className = currentNav[index].className.replace(
    //     " active",
    //     ""
    //   );
    // } else {
    //   if (classId.classList.contains(id)) {
    //     classId.className += " active";
    //   }
    // }
  };

  const handleClickOutside = (e) => {
    if (!e.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  const postFacebook = async () => {
    try {
      const resPostFacebook = await facebookService.postContentFacebook({
        ownerPost: fullName,
        content: dataInput.postContent,
      });
      if (resPostFacebook.status === 200) {
        console.log("success");
        await fetchDataFacebook();
        clearInput("", "postContent");
      } else {
        console.log("fails");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const postCommentFacebook = async (id) => {
    try {
      const comments = {
        userComment: {
          userComm: fullName,
          comm: dataInput.commentContent,
        },
      };
      // const resCommentFacebook = "5555";
      const resCommentFacebook = await facebookService.postCommentFacebook(id, {
        comments,
      });
      if (resCommentFacebook.status === 200) {
        console.log("success");
        await fetchDataFacebook();
        socket.emit("new_comment", comments, id);
        clearInput("", "commentContent");
      } else {
        console.log("fails");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deletePostFacebook = async (id) => {
    var dropdowns = document.getElementsByClassName("show");
    try {
      const resDeleteFacebook = await facebookService.deleteContentFacebook(id);
      if (resDeleteFacebook.status === 200) {
        console.log("success");
        fetchDataFacebook();
        dropdowns[0].className = dropdowns[0].className.replace(" show", "");
      } else {
        console.log("fails");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyleContentLCenter>
      <div className="container-post mt-10">
        <div className="container-input">
          <UserCircleIcon className="h-10" />
          <div
            className="flex ml-2 mr-2 items-center rounded-full bg-gray-100 p-2"
            style={{ width: "100%" }}
          >
            <TextInputPost
              placeholder="What's on your mind?"
              value={dataInput.postContent}
              handleChange={(e) => handleInput(e, "postContent")}
            />
          </div>
          <button
            style={{
              background: "orange",
              color: "#fff",
              borderRadius: "20px",
            }}
            onClick={postFacebook}
          >
            post
          </button>
        </div>
        <hr className="ml-3 mr-3" />
        <div className="px-6 pt-4 pb-2">
          <div className="flex flex-row">
            <div className="basis-2/6">
              <div className="activity-all">
                <VideoCameraIcon className="w-8" style={{ color: "#ff6781" }} />{" "}
                Live video
              </div>
            </div>
            <div className="basis-2/6">
              <div className="activity-all">
                <PhotographIcon className="w-8" style={{ color: "#00c87f" }} />{" "}
                Photo/video
              </div>
            </div>
            <div className="basis-2/6">
              <div className="activity-all">
                <EmojiHappyIcon className="w-8" style={{ color: "#ffc729" }} />{" "}
                Feeling/activity
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content facebook */}

      {dataContentFacebook.map((data, index) => (
        <div className="container-facebook mt-10" key={index}>
          <div className="container-content-facebook">
            <UserCircleIcon className="h-10" />
            <div className="container-user-post">
              <div>
                <div className="user-facebook">{data.ownerPost}</div>
                <p className="time-facebook">16h</p>
              </div>
              <div className="three-dot">
                <div className="dropdown">
                  <div
                    className="dropbtn"
                    onClick={(e) => handleClickDropdown(e, "three-dot", index)}
                  >
                    <DotsHorizontalIcon className="h-5" />
                    <div className="dropdown-content">
                      <a
                        onClick={() => {
                          deletePostFacebook(data._id);
                        }}
                        // onClick={() => {
                        //   deletePostFacebook(data._id);
                        // }}
                      >
                        Remove content
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-facebook">{data.content}</div>
          <hr className="ml-3 mr-3" />
          <div className="px-6 pt-4 pb-2">
            <div className="flex flex-row">
              <div className="basis-2/6">
                <div
                  className="like"
                  onClick={(e) => {
                    handleClick(e, "like", index);
                  }}
                >
                  <ThumbUpIcon className="w-8" /> Like
                </div>
              </div>
              <div className="basis-2/6">
                <div className="comment">
                  <ChatIcon className="w-8" /> Comment
                </div>
              </div>
              <div className="basis-2/6">
                <div className="share">
                  <ShareIcon className="w-8" /> Share
                </div>
              </div>
            </div>
          </div>
          <hr className="ml-3 mr-3" />
          {data.comments.length !== 0 ? (
            data.comments.map((dataComments, indexComments) => (
              <div className="container-content-comment" key={indexComments}>
                <UserCircleIcon className="h-10" />
                <div className="card-content-comment">
                  <div className="user-comment">
                    {dataComments.userComment.userComm}
                  </div>
                  <div className="content-comment">
                    {dataComments.userComment.comm}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}

          <div className="container-input pb-5">
            <UserCircleIcon className="h-10" />
            <div
              className="flex ml-2 mr-2 items-center rounded-full bg-gray-100 p-2"
              style={{ width: "100%" }}
            >
              <TextInputPost
                placeholder="Write a comment..."
                value={dataInput.commentContent}
                handleChange={(e) => handleInput(e, "commentContent")}
              />
            </div>
            <button
              style={{
                background: "orange",
                color: "#fff",
                borderRadius: "20px",
              }}
              onClick={() => postCommentFacebook(data._id)}
            >
              post
            </button>
          </div>
        </div>
      ))}
    </StyleContentLCenter>
  );
}
