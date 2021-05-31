import './App.css';
import Line from "./components/Line.js";
import script from "./assets/script.json";

function App() {
  const FullScript = script.map(line => <Line key={line.id} line={line} />);
  return (
    <div className="App">
      {FullScript}
    </div>
  );
}

export default App;
