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

  const handleClick = () => {
    const { x, y, width, height } = navRef.current.getBoundingClientRect();
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    gsap.set(navRef.current, {
      transformOrigin: `${centerX}px ${centerY}px`,
    });
  };

  const hoverIn = (id) => {
    gsap.to(`.${id}`, {
      x: "2vw",
      opacity: "1",
      duration: 0.5,
      ease: "back",
    });
  };

  const hoverOut = (id) => {
    gsap.to(`.${id}`, {
      x: "0",
      opacity: "0",
      duration: 0.2,
      ease: "backpower2.inOut",
    });
  };

  useEffect(() => {
    gsap.set(navRef.current, {
      x: "0",
      y: "0",
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
      <div
        className="shortcuts"
        onMouseEnter={() => hoverIn("home")}
        onMouseLeave={() => hoverOut("home")}
      >
        <img id="home" src={home} alt="home link" />
        <h3 className="home">Home</h3>
      </div>
      <div
        className="shortcuts"
        onMouseEnter={() => hoverIn("projet")}
        onMouseLeave={() => hoverOut("projet")}
      >
        <img src={projet} alt="projet link" />
        <h3 className="projet">Projet</h3>
      </div>
      <div
        className="shortcuts"
        onMouseEnter={() => hoverIn("contact")}
        onMouseLeave={() => hoverOut("contact")}
      >
        <img src={contact} alt="contact link" />
        <h3 className="contact">Contact</h3>
      </div>
    </div>
  );
};

export default NavBar;
