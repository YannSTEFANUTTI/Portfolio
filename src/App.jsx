import "./App.css";
import CardModel from "./components/CardModel";
import data from "./assets/data";
import TitleBar from "./components/TitleBar";

function App() {
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
