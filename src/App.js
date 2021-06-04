import { BoxDiv, BodyDiv } from './styles.js';
import Line from "./components/Line.js";
import script from "./assets/script.json";
import "./styles.css";

function App() {
  const FullScript = script.map(line => <Line key={line.id} line={line} />);
  return (

    <BodyDiv>
      <BoxDiv>
        <h1 className="title">SCRIPT</h1>
        {FullScript}
      </BoxDiv>
    </BodyDiv>

  );
}

export default App;
