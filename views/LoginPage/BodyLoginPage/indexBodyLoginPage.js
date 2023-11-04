import React, { useState, useEffect } from "react";
import authFacebook from "../../../api/services/AuthFacebook";
import ButtonFacebook from "../../../components/ButtonFacebook/indexButtonFacebook";
import TextInputPost from "../../../components/TextInputPost/indexTextInputPost";
import { StyleBody } from "./styleBodyLoginPage";
import { useRouter } from "next/router";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3300");
import DatePicker from "react-datepicker";

export default function BodyLoginPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [dataInput, setData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "test@gmail.com",
    birthDate: Date.now(),
    gender: "Male",
  });

  const handleInput = (event, type) => {
    setData({ ...dataInput, [type]: event?.target?.value });
  };
  const handleRegisterFacebook = async () => {
    const resLoginFacebook = await authFacebook.registerFacebook({
      firstName: dataInput.firstName,
      lastName: dataInput.lastName,
      username: dataInput.username,
      password: dataInput.password,
      email: dataInput.email,
      gender: dataInput.gender,
      birthDate: dataInput.birthDate,
    });

    if (resLoginFacebook.status === 200) {
      window.location.reload(true);
    }
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

        localStorage.setItem("token", resLoginFacebook.data.token);
        localStorage.setItem(
          "fullname",
          resLoginFacebook.data.data.firstName +
            " " +
            resLoginFacebook.data.data.lastName
        );

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
              <div className="icon-label">facebook</div>
              <div className="desc-label">
                Facebook ช่วยคุณเชื่อมต่อและแชร์กับผู้คนมากมายรอบตัวคุณ
              </div>
            </div>
          </div>
          <div className="card-login">
            <div className="form-login">
              <div
                className="flex ml-2 mr-2 mb-5 items-center rounded p-2"
                style={{ border: "1px solid #dddfe2" }}
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
                style={{ border: "1px solid #dddfe2" }}
              >
                <TextInputPost
                  height="50px"
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
                  showModal={() => setShowModal(true)}
                />
              </div>
            </div>
          </div>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none container-register">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <div>
                      <h3 className="text-3xl font-semibold">สมัคร</h3>
                      <h3 className="header-register-h1">ง่ายและเร็ว</h3>
                    </div>
                    <button className="" onClick={() => setShowModal(false)}>
                      <span className="">×</span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      <div className="flex items-start justify-between ">
                        <div
                          className="flex ml-2 mr-2 mb-5 items-center rounded p-2"
                          style={{ border: "1px solid #dddfe2" }}
                        >
                          <TextInputPost
                            height="20px"
                            placeholder="ชื่อ"
                            value={dataInput.firstName}
                            handleChange={(e) => handleInput(e, "firstName")}
                          />
                        </div>
                        <div
                          className="flex ml-2 mr-2 mb-5 items-center rounded p-2"
                          style={{ border: "1px solid #dddfe2" }}
                        >
                          <TextInputPost
                            height="20px"
                            placeholder="นามสกุล"
                            value={dataInput.lastName}
                            handleChange={(e) => handleInput(e, "lastName")}
                          />
                        </div>
                      </div>
                      <div
                        className="flex ml-2 mr-2 mb-5 items-center rounded p-2"
                        style={{ border: "1px solid #dddfe2" }}
                      >
                        <TextInputPost
                          height="20px"
                          placeholder="อีเมลหรือหมายเลขโทรศัพท์มือถือ"
                          value={dataInput.username}
                          handleChange={(e) => handleInput(e, "username")}
                        />
                      </div>
                      <div
                        className="flex ml-2 mr-2 mb-5 items-center rounded p-2"
                        style={{ border: "1px solid #dddfe2" }}
                      >
                        <TextInputPost
                          height="20px"
                          placeholder="รหัสผ่านใหม่"
                          value={dataInput.password}
                          handleChange={(e) => handleInput(e, "password")}
                        />
                      </div>
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-center p-6 rounded-b">
                    <div className="register-btn flex ml-2 mr-2 mb-5">
                      <ButtonFacebook
                        title="สมัคร"
                        width="50%"
                        height="36px"
                        fontSize="20px"
                        background="#42b72a"
                        handleRegister={handleRegisterFacebook}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </StyleBody>
  );
}
