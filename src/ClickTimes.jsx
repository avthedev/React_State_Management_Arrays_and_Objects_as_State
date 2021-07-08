import React from "react";

function ClickTimes({timestamps, setTimestamps}) {
    const handleClick = () => {
        setTimestamps([...timestamps, Date.now()]);
        console.log(timestamps);
      };
      
      return (
          <button onClick={() => handleClick()}>
            Time
          </button>
      )
}

export default ClickTimes;
