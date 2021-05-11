import React from "react";
import bgDesktopDark from "../images/bg-desktop-dark.jpg";
import bgMobileDark from "../images/bg-mobile-dark.jpg";
import bgDesktopLight from "../images/bg-desktop-light.jpg";
import bgMobileLight from "../images/bg-mobile-light.jpg";

export default function MainBgImg() {
  return (
    <>
      <img
        className="bg-img desktop-only dark-theme-only"
        src={bgDesktopDark}
        alt=""
      />
      <img
        className="bg-img mobile-only dark-theme-only"
        src={bgMobileDark}
        alt=""
      />
      <img
        className="bg-img desktop-only light-theme-only"
        src={bgDesktopLight}
        alt=""
      />
      <img
        className="bg-img mobile-only light-theme-only"
        src={bgMobileLight}
        alt=""
      />
    </>
  );
}
