import './index.css';
import Block from "./components/Block";

function App() {
  return (
    <div className="App">
      <Block letter="A" classAdd={{initial:"blockOne", transform: "oneTransition"}} content="ONE" color={{one:"green", two:"pink"}}/>
      <Block letter="B" classAdd={{initial:"blockTwo", transform: "twoTransition"}} content="TWO" color={{one:"blue", two:"orange"}}/>
      <Block letter="C" classAdd={{initial:"blockThree", transform: "threeTransition"}} content="THREE" color={{one:"red", two:"grey"}}/>
      <Block letter="D" classAdd={{initial:"blockFour", transform: "fourTransition"}} content="FOUR" color={{one:"green", two:"purple"}}/>
      <Block letter="E" classAdd={{initial:"blockFive", transform: "fiveTransition"}} content="FIVE" color={{one:"yellow", two:"pink"}}/>
    </div>
  );
}

export default App;
