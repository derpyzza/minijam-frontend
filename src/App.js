import './App.css';
import JamCard from './components/JamCard';

const winners = [
  {
    name: "Prinny",
    wins: 3,
    jam_score: 200,
    itch_url: "https://blah.com/blah"
  },
  {
    name: "dude",
    wins: 1,
    jam_score: 250,
    itch_url: "https://blah.com/blah"
  },
  {
    name: "Prin",
    wins: 66,
    jam_score: 200000,
    itch_url: "https://blah.com/blah"
  },
];

function App() {
  return (
    <div className="App">
      {winners.map((winner, index) => {
        return <JamCard key={index} winner={winner} />
      })}
    </div>
  );
}

export default App;
