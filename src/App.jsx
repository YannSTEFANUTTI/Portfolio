import "./App.css";
import CardModel from "./components/CardModel";
import data from "./assets/data";
import TitleBar from "./components/TitleBar";
import gsap from "gsap";

window.addEventListener("load", App);

function App() {
  const TL = gsap.timeline();
  let mm = gsap.matchMedia();

  mm.add("(min-width:801px) and (max-width: 1999px)", () => {
    const TL = gsap.timeline();
    TL.to("#fullCard", {
      opacity: 1,
      x: 0,
      y: 70,
      scale: 0.8,
      duration: 0.9,
      delay: 0.3,
      ease: "back",
      stagger: { each: 0.15},
    })
      .to(
        "#fullCard",
        {
          rotation: -5,
          duration: 0.9,
          ease: "back",
          stagger: { each: 0.2},
        },
        "-=0.2"
      )

      .to(
        ".titleBar",
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: 0,
          repeat: 0,
          repeatDelay: 1,
          ease: "power4",
          stagger: { each: 0.15},
        },
        "-=0.75"
      )
      .from(
        ".eachLogo",
        {
          opacity: 0,
          x: 0,
          y: 0,
          scale: 0,
          duration: 0.2,
          delay: 0.5,
          repeat: 0,
          repeatDelay: 1,
          ease: "back",
          stagger: { each: 0.15, from: "center" },
        },
        "-=0.75"
      );
  });
  mm.add("(min-width: 2000px)", () => {
    const TL = gsap.timeline();
    TL.to("#fullCard", {
      opacity: 1,
      x: 0,
      y: 70,
      scale: 0.8,
      duration: 0.9,
      delay: 0.3,
      ease: "back",
      stagger: { each: 0.15},
    })
      .to(
        "#fullCard",
        {
          rotation: -5,
          duration: 0.9,
          ease: "back",
          stagger: { each: 0.2},
        },
        "-=0.2"
      )
      .to(
        ".titleBar",
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: 0,
          repeat: 0,
          repeatDelay: 1,
          ease: "power4",
          stagger: { each: 0.15 },
        },
        "-=0.75"
      )
      .from(
        ".eachLogo",
        {
          opacity: 0,
          x: 0,
          y: 0,
          scale: 0,
          duration: 0.2,
          delay: 0.5,
          repeat: 0,
          repeatDelay: 1,
          ease: "back",
          stagger: { each: 0.15, from: "center" },
        },
        "-=0.75"
      );
  });

  return (
    <div className="App">
      <TitleBar />
      <div className="allCards">
        {data.map((el) => (
          <CardModel
            id={el.id}
            title={el.title}
            date={el.date}
            txt={el.txt}
            gitHub={el.gitHub}
            web={el.web}
            video={el.video}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
