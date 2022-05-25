import React from "react";
import {Carousel} from "react-bootstrap";
import "./LowerCarousel.css";

export default function LowerCarousel(){
    return(
      <div className="lc">
<Carousel>
  <Carousel.Item >
  
    <div className="firstphoto">
        <div className="lc-head" >
        Our Customer Love Us
        </div>
        <div className="lc-subhead">
        “They did an amazing work for us”
        </div>
        <div className="lc-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ipsum at et at vulputate volutpat. Massa odio adipiscing ac sed dictum sed. 
        </div>
        <div className="lc-name">
        kather corl
        </div>
        <div className="lc-about">
        General manager at ofspace
        </div>
    </div>
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="firstphoto">
        <div className="lc-head" >
        Our Customer Love Us
        </div>
        <div className="lc-subhead">
        “They did an amazing work for us”
        </div>
        <div className="lc-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ipsum at et at vulputate volutpat. Massa odio adipiscing ac sed dictum sed. 
        </div>
        <div className="lc-name">
        kather corl
        </div>
        <div className="lc-about">
        General manager at ofspace
        </div>
    </div>

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div className="firstphoto">
        <div className="lc-head" >
        Our Customer Love Us
        </div>
        <div className="lc-subhead">
        “They did an amazing work for us”
        </div>
        <div className="lc-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ipsum at et at vulputate volutpat. Massa odio adipiscing ac sed dictum sed. 
        </div>
        <div className="lc-name">
        kather corl
        </div>
        <div className="lc-about">
        General manager at ofspace
        </div>
    </div>

    <Carousel.Caption>
      
    </Carousel.Caption> 
  </Carousel.Item>
 
</Carousel>
</div>
    )
}
