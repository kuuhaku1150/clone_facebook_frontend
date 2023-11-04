import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import { DialogStyle } from "./styleModalPostImage";
import { UserCircleIcon } from "@heroicons/react/outline";
import TextInputPost from "../../components/TextInputPost/indexTextInputPost";
import facebookService from "../../api/services/facebookService";
export default function ModalPostImage(props) {
  const { stateDialog, setStateDialog, fetchDataFacebook } = props;
  const [open, setOpen] = React.useState(false);
  const fullName = localStorage.getItem("fullname");

  useEffect(() => {}, []);

  // const handleOpen = () => setOpen(true);
  const [dataFile, setDataFile] = useState([]);
  const [img, setImg] = useState("");
  const [dataInput, setData] = useState({
    postContent: "",
    commentContent: "",
  });
  const handleClose = () => {
    // setOpen(false);
    setStateDialog(false);
  };
  const handleInput = (event, type) => {
    setData({ ...dataInput, [type]: event?.target?.value });
  };
  const clearInput = (event, type) => {
    setData({ ...dataInput, [type]: event });
  };
  const onFileChange = (e) => {
    const files = e.target.files;
    const filename = files[0].name;
    if (filename.lastIndexOf(".") <= 0) {
      return alert("Please add a valid file!");
    }
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      setImg(fileReader.result);
    });
    fileReader.readAsDataURL(files[0]);
    setDataFile(files[0]);
  };
  const postFacebook = async () => {
    try {
      const resPostFacebook = await facebookService.postContentFacebook({
        ownerPost: fullName,
        content: dataInput.postContent,
        img: img,
      });
      if (resPostFacebook.status === 200) {
        console.log("success");
        fetchDataFacebook();
        setImg("");
        clearInput("", "postContent");
        setStateDialog(!stateDialog);
      } else {
        console.log("fails");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Dialog
        open={stateDialog}
        onClose={handleClose}
        PaperProps={{
          sx: {
            // paddingLeft: "6vw",
            // paddingRight: "5.7vw",
            borderRadius: "10px",
            width: "50vw",
            height: "55vh",
            "::-webkit-scrollbar": {
              height: "0",
            },
          },
        }}
      >
        <DialogStyle>
          <div className="title-dialog">Create post</div>
          <hr></hr>
          <div className="container-content-facebook">
            <UserCircleIcon className="h-10" />
            <div className="container-user-post">
              <div>
                <div className="user-facebook">{fullName}</div>
                <p className="time-facebook">Public</p>
              </div>
            </div>
          </div>
          <div className="container-content-facebook">
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
          </div>
          <div className="container-content-facebook">
            <form id="file-upload-form" className="uploader">
              <input
                id="file-upload"
                type="file"
                name="fileUpload"
                accept="image/*"
                onChange={(e) => onFileChange(e)}
              />

              <label htmlFor="file-upload" id="file-drag">
                {img === "" ? (
                  <div>
                    <Image
                      id="file-image"
                      src="/images/addImage.png"
                      alt="Preview"
                      className="hidden"
                      width={100}
                      height={100}
                    />
                    <div id="start">
                      <i className="fa fa-download" aria-hidden="true"></i>
                      <div>Select a file or drag here</div>
                      <div id="notimage" className="hidden">
                        Please select an image
                      </div>
                      <span id="file-upload-btn" className="btn btn-primary">
                        Select a file
                      </span>
                    </div>
                    <div id="response" className="hidden">
                      <div id="messages"></div>
                      <progress
                        className="progress"
                        id="file-progress"
                        value="0"
                      >
                        <span>0</span>%
                      </progress>
                    </div>
                  </div>
                ) : (
                  <div>
                    {" "}
                    <Image
                      id="file-image"
                      src={img}
                      alt="Preview"
                      className="hidden"
                      width="100%"
                      height="100%"
                      layout="responsive"
                    />
                  </div>
                )}
              </label>
            </form>
          </div>
          <div className="container-content-facebook">
            <button
              style={{
                background: "orange",
                color: "#fff",
                borderRadius: "10px",
                width: "100%",
                height: "40px",
              }}
              onClick={postFacebook}
            >
              post
            </button>
          </div>
        </DialogStyle>
      </Dialog>
    </div>
  );
}
