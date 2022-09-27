import React from "react";
import { StyleNavbar } from "./styleNavbar";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
  FilmIcon,
  ShoppingCartIcon,
  DesktopComputerIcon,
  PresentationChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "../../components/HeaderIcon/indexIcon";
import FooterIcon from "../../components/FooterIcon/indexIcon";

export default function NavbarHomePage() {
  const handleClick = (e, id) => {
    var element = e?.target;
    var currentNav = document.getElementsByClassName("active-nav");

    var classId = e.target.closest("." + id);
    if (classId.classList.contains(id)) {
      currentNav[0].className = currentNav[0].className.replace(" active-nav", "");
      classId.className += " active-nav";
    }
  };

  return (
    <StyleNavbar>
      {" "}
      <div className="flex flex-row shadow-lg">
        <div className="basis-1/3">
          <div className="font-navbar">
            <div className="icon-navbar">
              <Image
                src="/images/iconFacebook.png"
                alt="server Logo"
                // layout="fixed"
                width="50px"
                height="50px"
              />
            </div>
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
              <SearchIcon className="h-6 text-gray-600" />
              <input
                className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="middle-navbar">
            <div
              className="iconHeader1 active-nav"
              onClick={(e) => {
                handleClick(e, "iconHeader1");
              }}
            >
              <HeaderIcon Icon={HomeIcon} />
            </div>
            <div
              className="iconHeader2"
              onClick={(e) => {
                handleClick(e, "iconHeader2");
              }}
            >
              <HeaderIcon Icon={DesktopComputerIcon} />
            </div>
            <div
              className="iconHeader3"
              onClick={(e) => {
                handleClick(e, "iconHeader3");
              }}
            >
              <HeaderIcon Icon={ShoppingCartIcon} />
            </div>
            <div
              className="iconHeader4"
              onClick={(e) => {
                handleClick(e, "iconHeader4");
              }}
            >
              <HeaderIcon Icon={UserGroupIcon} />
            </div>
            <div
              className="iconHeader5"
              onClick={(e) => {
                handleClick(e, "iconHeader5");
              }}
            >
              <HeaderIcon Icon={PresentationChartBarIcon} />
            </div>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="footer-navbar">
            <div className="iconFooter1 rounded-full bg-gray-200 p-2 mr-2">
              <FooterIcon Icon={ViewGridIcon} />
            </div>
            <div className="iconFooter1 rounded-full bg-gray-200 p-2 mr-2">
              <FooterIcon Icon={ChatIcon} />
            </div>
            <div className="iconFooter2 rounded-full bg-gray-200 p-2 mr-2">
              <FooterIcon Icon={BellIcon} />
            </div>
            
            <div className="iconFooter3 rounded-full bg-gray-200 p-2 mr-2">
              <FooterIcon Icon={UserCircleIcon} />
            </div>
          </div>
        </div>
      </div>
    </StyleNavbar>
  );
}
