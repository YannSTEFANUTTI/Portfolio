import React from "react";
import WorldWildHeroe from "../assets/videos/derniereHeure.mp4";
import Github from "../assets/img/Gitlogo.png";
import netLogo from "../assets/img/netLogo.png";

const CardModel = ({id, title, date, web, gitHub, video, txt }) => {
  return (
    <div id="fullCard">
      <video id="video" src={video} autoPlay loop muted></video>
      <h5 id="projetID">&ensp;&ensp;&ensp; {`_________${date}`}</h5>
      <h4>{title}</h4>
      <p>{txt}</p>
      <div className="links">
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
