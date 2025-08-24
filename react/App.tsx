import React, { useState } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import "./index.css";

const App: React.FC = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark((prev) => !prev);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <Header onToggleTheme={toggleTheme} />
      <Timeline />
      <footer>
        <p>Excellence and Service</p>
        <a href="#heading">
          <button id="button">Go To Start</button>
        </a>
      </footer>
    </div>
  );
};

export default App;
