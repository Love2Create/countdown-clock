// import Numbers from "./components/Numbers";
// import NumberPair from "./components/NumberPair";
import CountdownClock from "./components/CountdownClock";

function App() {

  return (
    <div>
      <div className="clock--wrapper__main">
        <CountdownClock></CountdownClock>
      </div>
      <iframe
        id="countdown-clock"
        class="iframe-size"
        src="https://love2create.github.io/countdown-clock/build/index.html"
        width="100%"
        height="300px"
        name="Countdown Clock"
        title="Countdown Clock"
        style="background-color: none"
        frameBorder="0">
    </iframe>
    </div>
  );
}

export default App;
