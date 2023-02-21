import "./App.css";
import CardModel from "./components/CardModel";
import data from "./assets/data";
import TitleBar from "./components/TitleBar";
import { useState } from "react";
import gsap from "gsap";

function App() {
const [loading, setLoading] = useState(true);

const handleLoad = () => {
  setLoading(false);
};

  setTimeout(() => {
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
        stagger: { each: 0.15 },
      })
        .to(
          "#fullCard",
          {
            rotation: -5,
            duration: 0.9,
            ease: "back",
            stagger: { each: 0.2 },
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
        stagger: { each: 0.15 },
      })
        .to(
          "#fullCard",
          {
            rotation: -5,
            duration: 0.9,
            ease: "back",
            stagger: { each: 0.2 },
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
        );
    });
  }, 500);

  return (
    <div>
      {loading && <div>Chargement en cours...</div>}
      <div
        className="App"
        onLoad={handleLoad}
        style={{ display: loading ? "none" : "flex" }}
      >
        <TitleBar />
        <div className="allCards">
          {data &&
            data.map((el) => (
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
    </div>
  );
}

export default App;
