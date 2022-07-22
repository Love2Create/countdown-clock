import react from "react";
import { useState } from "react";
import axios from "axios";

function App() {

  const [timeOffset, setTimeOffset] = useState(0);

  const loadTime = () => {

    axios.get("http://worldtimeapi.org/api/timezone/America/Detroit").then(response => {
      setTimeOffset(response.data.unixtime);
    });
  }

  loadTime();

  return (
    <div>
      <h2>{timeOffset}</h2>
    </div>
  );
}

export default App;
