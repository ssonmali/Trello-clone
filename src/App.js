import logo from "./logo.svg";
import TrelloCard from "./components/TrelloCard/TrelloCard";
import TrelloCardContainers from "./components/TrelloCardContainers/TrelloCardContainers";
import Navbar from "./components/Navbar/Navbar";
import Brackets from "./components/Brackets/Brackets";

function App() {
  // const cards = new Array(Math.floor(Math.random() * 4) + 1)
  //   .fill("")
  //   .map((item, index) => {
  //     return (
  //       <TrelloCard key={index} imageUrl="https://source.unsplash.com/random" />
  //     );
  //   });
  return (
    <div style={{}}>
      <Navbar />
      <Brackets />
      <TrelloCardContainers />
    </div>
  );
}

export default App;
