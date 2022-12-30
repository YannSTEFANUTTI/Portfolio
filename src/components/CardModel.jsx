import React from "react";
import Github from "../assets/img/Gitlogo.png";
import gsap from "gsap";
import netLogo from "../assets/img/netLogo.png";

const CardModel = ({ id, title, date, web, gitHub, video, txt }) => {
  const handleZoomIn = () => {
    const TL = gsap.timeline();
    TL.fromTo(
      `.EachCard${id}`,
      {
        zIndex: 0,
      },
      {
        scale: 1.35,
        duration: 0.4,
        rotation: 0,
        x: -60,
        zIndex: 1,
        zIndex: 1,
        ease: "back",
      }
    ).fromTo(
      `#links${id}`,
      {
        scale: 1,
        duration: 0.5,
        rotation: 0,
        x: 0,
        zIndex: 1,
      },
      {
        scale: 1.2,
        duration: 0.5,
        rotation: 0,
        delay: -0.3,
        x: 0,
        zIndex: 0,
        ease: "back",
      }
    );
  };
  const handleZoomOut = () => {
    const TL = gsap.timeline();
    TL.to(`.EachCard${id}`, {
      keyframes: [
        { x: 0, scale: 1, duration: 0.4, rotation: 0, zIndex: 0 },
        { duration: 0.3, rotation: -5, delay: -0.15 },
      ],
    }).to(
      `#links${id}`,
      {
        scale: 0.8,
        duration: 0.5,
        ease: "back",
      },
      "-=0.3"
    );
  };
  return (
    <div
      onMouseEnter={() => handleZoomIn()}
      onMouseLeave={() => handleZoomOut()}
      id="fullCard"
      className={`EachCard${id}`}
    >
      <video id="video" src={video} autoPlay loop muted></video>
      <h5 id="projetID">&ensp;&ensp;&ensp; {`_________${date}`}</h5>
      <h4>{title}</h4>
      <p>{txt}</p>
      <div className="links" id={`links${id}`}>
        <a href={gitHub} target="_blank" rel="noreferrer">
          <img className="fullcardImg" src={Github} alt="Github" />
        </a>
        <a href={web} target="_blank" rel="noreferrer">
          <img className="fullcardImg" src={netLogo} alt="web site" />
        </a>
      </div>
    </div>
  );
};

export default CardModel;
