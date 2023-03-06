import React, { useEffect, useRef } from "react";
import { Power2, TweenLite } from "gsap";
import "./tron.css";

function Tron() {
  const requestRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const cx = window.innerWidth;
  const cy = window.innerHeight;

  const handleMouseMove = (event) => {
    mouse.current.x = event.pageX;
    mouse.current.y = event.pageY;

    cancelAnimationFrame(requestRef.current);
    requestRef.current = requestAnimationFrame(update);
  };

  const update = () => {
    const dx = mouse.current.x - cx;
    const dy = mouse.current.y - cy;

    const tiltx = dy / cy;
    const tilty = -dx / cx;
    const radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    const degree = radius * 20;

    TweenLite.to("#container", 1, {
      transform: `rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)`,
      ease: Power2.easeOut,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleResize = () => {
    cx.current = window.innerWidth / 2;
    cy.current = window.innerHeight / 2;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="container">
      <div class="gsap"></div>
      <div class="tagline">Open to work !</div>
    </div>
  );
}

export default Tron;
