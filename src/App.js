// import Numbers from "./components/Numbers";
// import NumberPair from "./components/NumberPair";
import CountdownClock from "./components/CountdownClock";

function App() {

  return (
    <div>
      <div className="clock--wrapper__main">
        <CountdownClock></CountdownClock>
      </div>
      <iframe src="https://love2create.github.io/countdown-clock/build/index.html">
      </iframe>
    </div>
  );
}

export default App;
