import data from "../../assets/data";
import CardModel from "../CardModel/CardModel";

const AllCards = () => {
  return (
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
  );
};

export default AllCards;
