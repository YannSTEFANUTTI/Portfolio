import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import "./navBar.css";
import contact from "../../assets/img/contact.png";
import home from "../../assets/img/home.png";
import projet from "../../assets/img/projet.png";
import move from "../../assets/img/move.png";

gsap.registerPlugin(Draggable);

const NavBar = () => {
  const navRef = useRef(null);

  function handleClick() {
    const { x, y, width, height } = navRef.current.getBoundingClientRect();
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    gsap.set(navRef.current, {
      transformOrigin: `${centerX}px ${centerY}px`,
    });
  }

  useEffect(() => {
    gsap.set(navRef.current, {
      x: "50%",
      y: "50%",
      transformOrigin: "center",
    });
    Draggable.create(navRef.current, {
      type: "x,y",
      edgeResistance: 0.65,
      onPress: handleClick,
      onDrag: function () {
        const { x, y, width, height } = this.target.getBoundingClientRect();
        const newCenterX = x + width / 2;
        const newCenterY = y + height / 2;
        gsap.set(this.target, {
          transformOrigin: `${newCenterX}px ${newCenterY}px`,
        });
      },
    });
  }, []);
  return (
    <div ref={navRef} className="navBar">
      <img src={move} alt="move" id="move" />
      <a
        className="nameTitle"
        onMouseEnter={() => handleZoomIn()}
        onMouseLeave={() => handleZoomOut()}
        href={""}
        target="_blank"
        rel="noreferrer"
      >
        <img id="home" src={home} alt="home link" />
      </a>
      <a
        className="nameTitle"
        onMouseEnter={() => handleZoomIn()}
        onMouseLeave={() => handleZoomOut()}
        href={""}
        target="_blank"
        rel="noreferrer"
      >
        <img src={projet} alt="projet link" />
      </a>
      <a
        className="nameTitle"
        onMouseEnter={() => handleZoomIn()}
        onMouseLeave={() => handleZoomOut()}
        href={""}
        target="_blank"
        rel="noreferrer"
      >
        <img src={contact} alt="contact link" />
      </a>
    </div>
  );
};

export default NavBar;
