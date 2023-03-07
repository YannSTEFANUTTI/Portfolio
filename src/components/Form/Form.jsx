import mail from "../../assets/img/_mail.png";
import gsap from "gsap";
import github from "../../assets/img/_github.png";
import linkedin from "../../assets/img/_linkedin.png";
import phone from "../../assets/img/_phone.png";
import CV from "../../assets/img/YannStefanutti.pdf";
import curriculum from "../../assets/img/_cv.png";
import "./form.css";

const Form = () => {
  const handlePhone = () => {
    window.open("tel:0665730365");
  };
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/ystefanutti/");
  };
  const handleGithub = () => {
    window.open("https://github.com/YannSTEFANUTTI");
  };
  const handleCurriculum = () => {
    window.open( CV );
  };

  const hoverIn = (id) => {
    let animation = gsap.timeline();

    animation.kill();
    animation = gsap
      .timeline()
      .to(`.${id}`, {
        display: "initial",
        scale: "1",
        x: "3vw",
        opacity: "1",
        duration: 0.5,
        ease: "back",
      })
      .to(`.${id}`, {
        x: "3vw",
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
  };
 const hoverInPhone = (id) => {
   let animation = gsap.timeline();

   animation.kill();
   animation = gsap
     .timeline()
     .to(`.${id}`, {
       display: "initial",
       scale: "1",
       x: "3vw",
       opacity: "1",
       duration: 0.5,
       ease: "back",
     })
     .to(`.${id}`, {
       x: "3vw",
       scale: "1.2",
       opacity: "0",
       duration: 0.2,
       delay: 5,
       ease: "back",
     })
     .to(`.${id}`, {
       x: "0",
       scale: "1",
       opacity: "0",
       duration: 0,
       display: "none",
     });
 };
  return (
    <div className="formPage">
      <div className="formAll">
        <h1>Contact</h1>
        <h2>Echangeons sur nos futurs projets</h2>

        <div className="containForm">
          <form
            className="formular"
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
            action="../../pages/success/success.js"
          >
            <img src={mail} alt="mail" />
            <p>
              <input type="hidden" name="form-name" value="contact"></input>
              <label className="formularLabel">
                Nom <br /> <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label className="formularLabel">
                Email <br /> <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label className="formularLabel">
                Message <br /> <textarea name="message"></textarea>
              </label>
            </p>
            <button type="submit">Envoyer</button>
          </form>

          <div className="pictosContact">
            <div className="phone">
              <img
                src={phone}
                alt="phone"
                onClick={handlePhone}
                onMouseEnter={() => hoverInPhone("phoneTxt")}
              />
              <h3 className="phoneTxt">06.65.73.03.65</h3>
            </div>
            <div className="curriculum">
              <img
                src={curriculum}
                alt="curriculum"
                onClick={handleCurriculum}
                onMouseEnter={() => hoverIn("curriculumTxt")}
              />
              <h3 className="curriculumTxt">curriculum</h3>
            </div>
            <div className="linkedin">
              <img
                src={linkedin}
                alt="linkedin"
                onClick={handleLinkedin}
                onMouseEnter={() => hoverIn("linkedinTxt")}
              />
              <h3 className="linkedinTxt">Linkedin</h3>
            </div>
            <div className="github">
              <img
                src={github}
                alt="github"
                onClick={handleGithub}
                onMouseEnter={() => hoverIn("githubTxt")}
              />
              <h3 className="githubTxt">Github</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
