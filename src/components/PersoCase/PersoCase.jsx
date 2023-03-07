import IanPicture from "../../assets/img/IanPicture_noWhite.png";
import PictosCase from "./PictosCase";
import dataPictos from "../../assets/dataPictos";
import PersoCasePicture from "./PersoCasePicture";
import "./persoCase.css";

const PersoCase = () => {
  return (
    <div className="persoCase">
      <div className="pictureAndSide">
        <PersoCasePicture />
        <img src={IanPicture} alt="Picture" className="picturePerso" id="pictureMobile" />
        <div className="persoSide">
          <h1>Yann Stefanutti</h1>
          <h2>Développeur React Node JS</h2>
          <p id="persoTxt">
            Fort de dix années dans l'Audiovisuel durant lesquelles j'ai
            régulièrement collaboré sur des projets web, j'ai l'ambition de
            poursuivre ma carrière en tant que développeur. <br />
            Mon esprit d'équipe et ma rigueur constituent des atouts majeurs
            pour mener à bien ma mission au sein d'une entreprise innovante.{" "}
            <br /> Si vous cherchez un travailleur expérimenté, professionnel et
            passionné, n'hésitez pas à me contacter.
          </p>
        </div>
      </div>
      <div className="allPictos">
        {dataPictos.map((picto) => (
          <PictosCase
            src={picto.src}
            alt={picto.alt}
            id={picto.id}
            name={picto.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PersoCase;
