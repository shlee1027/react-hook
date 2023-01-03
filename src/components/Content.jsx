import React, { useContext } from "react";
import { ThemeContext } from "../\bcontext/ThemeContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>이상현님, 좋은 하루 되세요</p>
    </div>
  );
};

export default Content;
