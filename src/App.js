import react from "react";
import { useState } from "react";
import axios from "axios";

function App() {

  const [timeOffset, setTimeOffset] = useState(0);

  const loadTime = async () => {

    const timeData = await axios.get("http://worldtimeapi.org/api/timezone/America/Detroit");

    console.log(timeData);

    setTimeOffset(timeData.data.unixtime);
  }

  loadTime();

  return (
    <div>
      <h2>{timeOffset}</h2>
    </div>
  );
}

export default App;
