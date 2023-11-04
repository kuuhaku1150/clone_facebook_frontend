import React, { useState, useEffect } from "react";
import authFacebook from "../../../api/services/AuthFacebook";
import ButtonFacebook from "../../../components/ButtonFacebook/indexButtonFacebook";
import TextInputPost from "../../../components/TextInputPost/indexTextInputPost";
import { StyleBody } from "./styleBodyLoginPage";
import { useRouter } from "next/router";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3300");

export default function BodyLoginPage() {
  const router = useRouter();
  const [dataInput, setData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (event, type) => {
    setData({ ...dataInput, [type]: event?.target?.value });
  };
  const handleLoginFacebook = async () => {
    try {
      const resLoginFacebook = await authFacebook.loginFacebook({
        username: dataInput.username,
        password: dataInput.password,
      });

      if (resLoginFacebook.status === 200) {
        // const room =
        //   resLoginFacebook.data.data._id +
        //   resLoginFacebook.data.data.firstName +
        //   " " +
        //   resLoginFacebook.data.data.lastName;
        // const username =
        //   resLoginFacebook.data.data.firstName +
        //   " " +
        //   resLoginFacebook.data.data.lastName;
        // socket.emit("join_room", room, username);

        localStorage.setItem("token", resLoginFacebook?.data?.token);
        localStorage.setItem(
          "fullname",
          resLoginFacebook.data.data.firstName +
            " " +
            resLoginFacebook.data.data.lastName
        );
        localStorage.setItem("userId", resLoginFacebook.data.data._id);
        router.push("homepage");
        console.log("success");
      } else {
        console.log("fails");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <StyleBody>
      <div className="content-container">
        <div className="container-login">
          <div className="label-facebook">
            <div className="container-label">
              <div className="icon-label">facebug</div>
              <div className="desc-label">
                Facebug ช่วยคุณเชื่อมต่อและแชร์กับผู้คนมากมายรอบตัวคุณ
              </div>
            </div>
          </div>
          <div className="card-login">
            <div className="form-login">
              <div
                className="flex ml-2 mr-2 mb-5 items-center rounded p-2"
                style={{ border: "1px solid" }}
              >
                <TextInputPost
                  height="50px"
                  placeholder="อีเมลหรือหมายเลขโทรศัพท์มือถือ"
                  value={dataInput.username}
                  handleChange={(e) => handleInput(e, "username")}
                />
              </div>
              <div
                className="flex ml-2 mr-2 mb-5 items-center rounded p-2"
                style={{ border: "1px solid" }}
              >
                <TextInputPost
                  height="50px"
                  type="password"
                  placeholder="รหัสผ่าน"
                  value={dataInput.password}
                  handleChange={(e) => handleInput(e, "password")}
                />
              </div>
              <div className="flex ml-2 mr-2 mb-5">
                <ButtonFacebook
                  title="เข้าสู่ระบบ"
                  handleClick={handleLoginFacebook}
                />
              </div>
              <div className="forget-password mb-5">ลืมรหัสผ่านใช่หรือไม่</div>
              <hr className="ml-3 mr-3 mb-5" />
              <div className="register-btn flex ml-2 mr-2 mb-5">
                <ButtonFacebook
                  title="สร้างบัญชีผู้ใช้"
                  width="35%"
                  fontSize="20px"
                  background="#42b72a"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleBody>
  );
}
