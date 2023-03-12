import Github from "../../assets/img/GitlogoBlue.png";
import netlogo from "../../assets/img/netlogoBlue.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const CardModel = ({ id, title, date, web, gitHub, video, txt }) => {
  let mm = gsap.matchMedia();
  let TL = gsap.timeline();

  //-----------------   SCROLLTRIGGER ON MOBILE   -------------------//
  mm.add("(max-width: 800px)", () => {
    gsap.to(`.EachCard${id}`, {
      rotate: 0,
      scale: 1.2,
      ease: "back",
      scrollTrigger: {
        trigger: `.EachCard${id}`,
        start: "top 50%",
        end: "+=100%",
        scrub: true,
        pinType: "fixed",
      },
    });
  });

  //-----------------   DESKTOP ZOOM   -------------------//
  const handleZoomIn = () => {
    mm.add("(max-width: 1200px)", () => {});
    mm.add("(min-width:800px) and (max-width: 1999px)", () => {
      TL.kill();
      TL = gsap
        .fromTo(
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
            ease: "back",
          }
        )
        .fromTo(
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
            y: 10,
            zIndex: 0,
            ease: "back",
          }
        );
    });
  };
  const handleZoomOut = () => {
    let mm = gsap.matchMedia();
    let TL = gsap.timeline();
    mm.add("(min-width:800px) and (max-width: 1999px)", () => {
      TL.kill();
      TL = gsap
        .to(`.EachCard${id}`, {
          keyframes: [
            { x: 0, scale: 0.9, duration: 0.4, rotation: 0, zIndex: 0 },
            { duration: 0.3, rotation: -5, delay: -0.15 },
          ],
        })
        .to(
          `#links${id}`,
          {
            scale: 0.8,
            duration: 0.5,
            ease: "back",
          },
          "-=0.3"
        );
    });
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
        {web && (
          <a href={web} target="_blank" rel="noreferrer">
            <img className="fullcardImg" src={netlogo} alt="web site" />
          </a>
        )}
      </div>
    </div>
  );
};

export default CardModel;
