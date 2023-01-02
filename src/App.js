import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };
  // 시계를 만들어봤음
  // 12시 넘어가면 다시 1시부터 시작하도록 if문을 작성했음

  console.log("업데이트!!");

  return (
    <div>
      <span>현재 시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
