import React from "react";
import dataTitle from "../assets/dataTitle";
import gsap from "gsap";

const TitleBar = () => {
  const handleZoomIn = () => {
    const TL = gsap.timeline();
    TL.to(".nameTitle", {
      scale: 1.1,
      duration: 0.5,
      rotation: 0,
      x: 0,
      zIndex: 0,
      ease: "back",
    })
      .from(
        ".nameAnim",
        {
          scale: 1,
          duration: 1,
          rotation: 0,
          x: 10,
          y: -40,
          zIndex: 0,
          opacity: 1,
        },
        "-=.5"
      )
      .to(
        ".nameAnim",
        {
          opacity: 0,
          duration: 0.8,
          y: -40,
        },
        "-=1"
      );
    gsap.to(".EachCard5", {
      scale: 1.15,
      duration: 0.5,
      rotation: 0,
      x: 70,
      zIndex: 0,
      ease: "back",
    });
  };
  const handleZoomOut = () => {
    gsap.to(".nameTitle", {
      scale: 1,
      duration: 0.2,
      rotation: 0,
      x: 0,
      zIndex: 0,
    });
    gsap.to(".nameAnim", { opacity: 0 });
  };

  return (
    <div className="titleBar">
      <div className="logos">
{dataTitle.map((el)=> <img src={el.src} alt={el.tag}/>)}
      
      </div>
      <a
        className="nameTitle"
        onMouseEnter={() => handleZoomIn()}
        onMouseLeave={() => handleZoomOut()}
        href="src/assets/img/YannStefanutti.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <h1>Yann Stefanutti</h1>
        <h1 className="nameAnim">Yann Stefanutti</h1>
        <p>Développeur Full Stack</p>
      </a>
    </div>
  );
};

export default TitleBar;
