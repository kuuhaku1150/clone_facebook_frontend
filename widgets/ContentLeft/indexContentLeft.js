import React from "react";
import { StyleContentLeft } from "./styleContentLeft";
import {
  UserCircleIcon,
  UsersIcon,
  DesktopComputerIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  CalendarIcon,
} from "@heroicons/react/solid";
export default function ContentLeft() {
  return (
    <StyleContentLeft>
      <div className="content-left-container">
        <div className="content">
          <UserCircleIcon className="h-10 position-right" />{" "}
          {localStorage.getItem("fullname")}
        </div>
        <div className="content">
          <UsersIcon className="h-10 position-right" /> Friends
        </div>
        <div className="content">
          <DesktopComputerIcon className="h-10 position-right" /> Watch
        </div>
        <div className="content">
          <UserGroupIcon className="h-10 position-right" /> Groups
        </div>
        <div className="content">
          <ShoppingBagIcon className="h-10 position-right" /> Marketplace
        </div>
        <div className="content">
          <CalendarIcon className="h-10 position-right" /> Memories
        </div>
      </div>
      <hr></hr>
      <div className="content-left-container">
        <div className="title-shortcuts">Your shortcuts</div>
      </div>
    </StyleContentLeft>
  );
}
