import { BoxDiv, BodyDiv, Btn } from './styles.js';
import Line from "./components/Line.js";
import script from "./assets/script.json";
import "./styles.css";
import { useState } from 'react';

function App() {
  const [currentLine, setCurrentLine] = useState(0);

  const nextBtn = () => {
    return currentLine !== script.length - 1 && setCurrentLine(currentLine + 1);
  }

  const previousBtn = () => {
    return currentLine !== 0 && setCurrentLine(currentLine - 1);
  }

  const FullScript = script.map((line, index) => <Line key={line.id} line={line} isCurrent={currentLine === index} />);
  return (
    <BodyDiv>
      <BoxDiv>
        <h1 className="title">SCRIPT</h1>
        <h3>Click the buttons to start reading the script.</h3>
        <Btn onClick={previousBtn}>Previous</Btn>
        <Btn onClick={nextBtn}>Next</Btn>
        {FullScript}
      </BoxDiv>
    </BodyDiv>
  );
}

export default App;
