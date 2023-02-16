import React from "react";
import dataTitle from "../assets/dataTitle";
import YannStefanutti from "../assets/img/YannStefanutti.pdf";
import gsap from "gsap";

const TitleBar = () => {
  const handleZoomIn = () => {
    const TL = gsap.timeline();
    let mm = gsap.matchMedia();
    mm.add("(max-width: 1200px)", () => {
      TL.to(".nameTitle", {
        scale: 1.1,
        duration: 0.5,
        rotation: 0,
        x: 0,
        zIndex: 0,
        ease: "back",
      });
      gsap.to(".EachCard5", {
        scale: 1,
        duration: 0,
        rotation: 0,
        x: 0,
        zIndex: 0,
        ease: "back",
      });
    });
    mm.add("(min-width:1201px) and (max-width: 1999px)", () => {
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
        x: 40,
        zIndex: 0,
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
      <div className="logos">
        {dataTitle.map((el) => (
          <img className="eachLogo" src={el.src} alt={el.tag} />
        ))}
      </div>
      <a
        className="nameTitle"
        onMouseEnter={() => handleZoomIn()}
        onMouseLeave={() => handleZoomOut()}
        href= {YannStefanutti}
        target="_blank"
        rel="noreferrer"
      >
        <h1>Yann Stefanutti</h1>
        <h1 className="nameAnim">Yann Stefanutti</h1>
        <p>Développeur React/Node {<br />} 06 65 73 03 65</p>
      </a>
    </div>
  );
};

export default TitleBar;
