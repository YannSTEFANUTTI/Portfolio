import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import "../../components/NavBar/NavBar.css";
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
    let mm = gsap.matchMedia();
    let animation = gsap.timeline();
    animation.kill();
    mm.add("(min-width:800px)", () => {
      animation = gsap
        .timeline()
        .to(`.${id}`, {
          display: "block",
          scale: "1",
          x: "2vw",
          opacity: "1",
          duration: 0.5,
          ease: "back",
        })
        .to(`.${id}`, {
          x: "2vw",
          scale: "1.2",
          opacity: "0",
          duration: 0.2,
          delay: 0.5,
          ease: "back",
        })
        .to(`.${id}`, {
          x: "0",
          scale: "1",
          opacity: "0",
          duration: 0,
          display: "none",
        });
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

  const formPage = document.querySelector(".formPage");
  const homePage = document.querySelector(".persoCase");
  const projetPage = document.querySelector(".allCardsPage");

  const homeClick = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: homePage,
      ease: "power4.out",
    });
  };

  const projetClick = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: projetPage,
      ease: "power4.out",
    });
  };

  const contactClick = () => {
    gsap.to(window, {
      duration: 2,
      ease: "power4.out",
      scrollTo: formPage,
    });
  };

  return (
    <div ref={navRef} className="navBar">
      <img src={move} alt="move" id="move" />
      <div
        className="shortcuts"
        onMouseEnter={() => hoverIn("home")}
        onClick={homeClick}
      >
        <img id="home" src={home} alt="home link" />
        <h3 className="home">Home</h3>
      </div>
      <div
        className="shortcuts"
        onMouseEnter={() => hoverIn("projet")}
        onClick={projetClick}
      >
        <img src={projet} alt="projet link" />
        <h3 className="projet">Projets</h3>
      </div>
      <div
        className="shortcuts"
        onMouseEnter={() => hoverIn("contact")}
        onClick={contactClick}
      >
        <img src={contact} alt="contact link" />
        <h3 className="contact">Contact</h3>
      </div>
    </div>
  );
};

export default NavBar;
