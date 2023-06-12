import React from "react";
import { useEffect , useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setSeconds((prevSeconds) => prevSeconds + 1);
  }, 1000);

 
  return () => clearInterval(interval);
}, []);

return <div>
   Timer: {seconds < 30 ? seconds : "0"} 
</div>;
};
export default Timer;
