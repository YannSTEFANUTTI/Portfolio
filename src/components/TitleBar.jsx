import React from "react";
import gsap from "gsap";
const TitleBar = () => {
  const handleZoomIn = () => {
    gsap.to(".nameTitle", {
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
      x: 70,
      zIndex: 0,
      ease: "back",
    });
  };
  const handleZoomOut = () => {
    gsap.to(".nameTitle", {
      scale: 1,
      duration: 1,
      rotation: 0,
      x: 0,
      zIndex: 0,
    });
  };
  return (
    <div className="titleBar">
      <div className="logos">
        <img src="src/assets/img/GitHub.png" alt="Github" />
        <img src="src/assets/img/react.png" alt="React" />
        <img src="src/assets/img/JS.png" alt="JS" />
        <img src="src/assets/img/html.png" alt="html" />
        <img src="src/assets/img/CSS.png" alt="css" />
        <img src="src/assets/img/node.png" alt="node" />
        <img src="src/assets/img/EX.png" alt="Express" />
        <img src="src/assets/img/sql.png" alt="sql" />
        <img src="src/assets/img/ps.png" alt="PS" />
        <img src="src/assets/img/AI.png" alt="AI" />
        <img src="src/assets/img/AE.png" alt="AE" />
      </div>
      <a className="nameTitle"
        onMouseEnter={() => handleZoomIn()}
        onMouseLeave={() => handleZoomOut()}
        href="src/assets/img/YannStefanutti.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <h1>Yann Stefanutti</h1>
        <p>Développeur Full Stack</p>
      </a>
    </div>
  );
};

export default TitleBar;
