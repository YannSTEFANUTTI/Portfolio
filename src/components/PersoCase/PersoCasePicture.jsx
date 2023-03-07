import { useRef, useEffect } from "react";
import picture from "../../assets/img/IanPicture_noWhite.png";
import gsap from "gsap";

const PersoCasePicture=()=> {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const mouse = { x: 0, y: 0 };
    const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    function handleMouseMove(event) {
      mouse.x = event.clientX - center.x;
      mouse.y = event.clientY - center.y;
    }

    gsap.ticker.add(() => {
      const angleX = gsap.utils.mapRange(-center.y, center.y, -20, 20, mouse.y);
      const angleY = gsap.utils.mapRange(-center.x, center.x, -15, 15, mouse.x);
      gsap.to(image, {
        rotationX: angleX,
        rotationY: angleY,
        duration: 0.5,
        ease: "power3.out",
      });
    });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <img
      src={picture}
      alt="IanPicture"
      ref={imageRef}
      style={{ transformStyle: "preserve-3d" }}
      className="picturePerso"
      id="pictureDesktop"
    />
  );
}

export default PersoCasePicture;