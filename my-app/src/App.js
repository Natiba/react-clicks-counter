import "./App.css";
import Counter from "./components/Counter";
import Btn from "./components/btn"
import freeCodeCampLogo from "./img/freecodecamp-logo.png";
import { useState } from "react"; //Hook

function App() {

  const [numClicks, setNumClicks] = useState(0); //0 is the initial value of clicks

  const handleClic = () => {
    setNumClicks(numClicks + 1);
  };

  const restartCounter = () => {
    setNumClicks(0);
    //setNumClicks(numClicks - numClicks); // Otra opcion q da 0
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Freecodecamp logo" />
      </div>
      <div className="principal-container">
        <Counter numClicks={numClicks} />
        <Btn 
        text="Click"
        isClickBtn={true}
        handleClick={handleClic} />
        <Btn 
        text="Restart"
        isClickBtn={false}
        handleClick={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
