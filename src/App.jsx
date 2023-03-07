import "./App.css";
import Form from "./components/Form/Form";
import AllCards from "./components/AllCards/AllCards";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import gsap from "gsap";
import PersoCase from "./components/PersoCase/PersoCase";

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

    mm.add("(min-width:800px)", () => {
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
    });}, 500);

  return (
    <div>
      <div>
        <div className="background" />
        <div className="App" onLoad={handleLoad}>
          <NavBar />
          <PersoCase />
          <AllCards />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
