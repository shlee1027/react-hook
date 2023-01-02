import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중");
    }, 1000);

    // Clean Up 코드도 작성해봄 유즈이펙트에 return을 넣고 함수를 만들면 정리하는 작업 즉 끝내는 작업(?)을 만들 수 있음
    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
};

export default Timer;
