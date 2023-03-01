import "./App.css";
import "./loader.css";
import Form from "./components/Form/Form";
import TitleBar from "./components/TitleBar/TitleBar";
import AllCards from "./components/AllCards/AllCards";
import { useState, useEffect } from "react";
import gsap from "gsap";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.fromTo(
      ".load",
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    gsap.to(".load", { opacity: 0, duration: 2 });
  }, [loading === false]);

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
            duration: 3,
            delay: 0,
            ease: "power4",
          },
          "-=0.75"
        )
        .to(
          ".EachCard5",
          {
            scale: 1,
            duration: 1,
            rotation: 0,
            x: -150,
            zIndex: 5,
            ease: "back",
          },
          "-=2.8"
        )
        .to(
          ".dontTouch",
          {
           opacity: 0,
           duration: 0.5,
          }, "<"
        )
        .to(
          ".dontTouch",
          {
           display: "none",
          }, "<"
        )
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
            duration: 3,
            delay: 0,
            ease: "power4",
            stagger: { each: 0.15 },
          },
          "-=0.75"
        )
        .to(
          ".EachCard5",
          {
            scale: 1,
            duration: 1,
            rotation: 0,
            x: -150,
            zIndex: 5,
            ease: "back",
          },
          "-=2.8"
        )
        .to(
          ".dontTouch",
          {
            opacity: 0,
            duration: 0.5,
          },
          "<"
        )
        .to(
          ".dontTouch",
          {
            display: "none",
          },
          "<"
        );
    });
  }, 500);

  return (
    <div>
      <div>
        <div className="background" />
        <div className="App" onLoad={handleLoad}>
          <div className="dontTouch"> <img src="/src/assets/img/loading.gif" alt="loading" /></div>
          <TitleBar />
          <AllCards />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
