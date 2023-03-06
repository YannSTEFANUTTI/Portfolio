import data from "../../assets/data";
import CardModel from "../CardModel/CardModel";

const AllCards = () => {
  return (
    <div className="allCardsPage">
      <div className="allCardsPres">
        <h1>Mes projets</h1>
        <h2>Développeur React Node JS</h2>
        <p className="allCardsTxt">
          Voici quelques unes de mes réalisations. Vous pouvez retrouver le code
          de ces projets sur chaque carte. Un lien vers le site ou une vidéo de
          son utilisation est également disponible. Ces projets sont réalisés en
          React, NodeJS, Express, Javascript, jQuery, MySQL, HTML, CSS, Github,
          Gsap et d'autres librairies.
        </p>
      </div>
      <div className="allCards">
        {" "}
        <div></div>
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
  );
};

export default AllCards;
