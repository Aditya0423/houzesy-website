import React from "react";
import Carousel from "./carousel";
import RegisterAndLogin from "./registerAndLogin";
import DetailsInfo from "./detailsInfo";
import UpperPhoto from "./UpperPhoto";
import Blog from "./Blog";
import Navbar from "./Navbar";


import "./topPart.scss";
import LowerCarousel from "./Lowercarousel";

export default function TopPart() {
  return (
    <div className="mainBody">
      <Navbar />
      <UpperPhoto/>
      <Carousel />
      {/* <RegisterAndLogin /> */}
      {/* <DetailsInfo /> */}
      <Blog />
    </div>
  );
}
