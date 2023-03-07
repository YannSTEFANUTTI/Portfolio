import gsap from "gsap";
import "../../components/NavBar/navBarMobile.css";
import contact from "../../assets/img/contact.png";
import home from "../../assets/img/home.png";
import projet from "../../assets/img/projet.png";

const NavBarMobile = () => {

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
    <div className="navBarMobile">
      <div
        className="shortcutsMobile"
        onMouseEnter={() => hoverIn("home")}
        onClick={homeClick}
      >
        <img id="homeMobile" src={home} alt="home link" />
        <h3 className="home">Home</h3>
      </div>
      <div
        className="shortcutsMobile"
        onMouseEnter={() => hoverIn("projet")}
        onClick={projetClick}
      >
        <img src={projet} alt="projet link" />
        <h3 className="projetMobile">Projets</h3>
      </div>
      <div
        className="shortcutsMobile"
        onMouseEnter={() => hoverIn("contact")}
        onClick={contactClick}
      >
        <img src={contact} alt="contact link" />
        <h3 className="contactMobile">Contact</h3>
      </div>
    </div>
  );
};

export default NavBarMobile;
