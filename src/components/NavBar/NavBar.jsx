import React from "react";
import gsap from "gsap";

const NavBar = () => {
  const handleZoomIn = () => {
    const TL = gsap.timeline();
    let mm = gsap.matchMedia();
  
    mm.add("(min-width:801px) and (max-width: 1999px)", () => {
      TL.to(".nameTitle", {
        scale: 1.1,
        duration: 0.5,
        rotation: 0,
        x: 0,
        zIndex: 0,
        ease: "back",
      });
      gsap.to(".EachCard5", {
        scale: 1.15,
        duration: 0.5,
        rotation: 0,
        x: -150,
        zIndex: 5,
        ease: "back",
      });
    });
    mm.add("(min-width: 2000px)", () => {
      TL.to(".nameTitle", {
        scale: 1.3,
        duration: 0.5,
        rotation: 0,
        x: 0,
        zIndex: 0,
        ease: "back",
      });
      gsap.to(".EachCard5", {
        scale: 0.9,
        duration: 0.5,
        rotation: 0,
        x: 40,
        zIndex: 0,
        ease: "back",
      });
    });
  };
  const handleZoomOut = () => {
    let mm = gsap.matchMedia();
    mm.add("(max-width: 1999px)", () => {
      gsap.to(".nameTitle", {
        scale: 1,
        duration: 0.2,
        rotation: 0,
        x: 0,
        zIndex: 0,
      });
    });
    mm.add("(min-width: 2000px)", () => {
      gsap.to(".nameTitle", {
        scale: 1,
        duration: 0.2,
        rotation: 0,
        x: 0,
        zIndex: 0,
      });
    });
  };

  return (
    <div className="titleBar">
      
      <a
        className="nameTitle"
        onMouseEnter={() => handleZoomIn()}
        onMouseLeave={() => handleZoomOut()}
        href={""}
        target="_blank"
        rel="noreferrer"
      >
        <h1>NAVBAR</h1>
        <h1 className="nameAnim">Yann Stefanutti</h1>
      </a>
    </div>
  );
};

export default NavBar;
