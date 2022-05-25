import React from "react";
import Card from "./card";
import cardDate from "../cardData";
import LowerCarousel from "./Lowercarousel";
import Services from "./Services";
import "./middlepart.scss"


export default function MiddlePart() {
  // const styles = {
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   gap: "82px",
  //   justifyContent: "center",
  //   marginTop: "20vh"
  // };
  return (
    <>
   
    {/* <div
      style={{
        display: "grid",
        grid: "1fr/repeat(12,1fr)"
      }}
    >
      <div style={{ gridColumn: "2/12" }}>
        <div style={styles}>
          {cardDate.map((item, index) => {
            return (
              <Card
                key={index}
                src={item.imgURL}
                name={item.name}
                area={item.area}
                ratings={item.ratings}
              />
            );
          })}
        </div>
      </div>
      
    </div> */}

    {/* card** */}
      <div className="container1">
        {cardDate.map((item, index) => {
          return (
            <div>
              <Card
                key={index}
                src={item.imgURL}
                name={item.name}
                area={item.area}
                ratings={item.ratings}
              />
            </div>
          );
        })}
      </div>
    <Services />
   <LowerCarousel />
    
    </>
  );
}
