import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";
import ContentLeft from "../../../widgets/ContentLeft/indexContentLeft";
import ContentRight from "../../../widgets/ContentRight/indexContentRight";
import ContentCenter from "../../../widgets/ContentCenter/indexContentCenter";
import { StyleBody } from "./styleBodyHomePage";
import ModalPostImage from "../../../widgets/modalPostImage/indexModalPostImage";
export default function BodyHomePage() {
  return (
    <StyleBody style={{ paddingTop: "80px" }}>
      <div className="flex flex-row">
        <div className="basis-1/4">
          <ContentLeft />
        </div>
        <div className="basis-1/2">
          <div className="content-container">
            <ContentCenter />
          </div>
        </div>
        <div className="basis-1/4">
          <ContentRight />
        </div>
      </div>
    </StyleBody>
  );
}
