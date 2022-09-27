import React from "react";
import BodyHomePage from "./BodyHomePage/indexBodyHomePage";
import FooterHomepage from "./FooterHomepage/indexFooterHomepage";
import HeaderHomePage from "./HeaderHomePage/indexHeaderHomePage";
import { StyleHomepage } from "./styleHomePage";

export default function HomePage() {
  return (
    <StyleHomepage>
      <HeaderHomePage />
      <BodyHomePage />
      <FooterHomepage />
    </StyleHomepage>
  );
}
