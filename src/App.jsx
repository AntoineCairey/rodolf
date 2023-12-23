import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [jokesChecked, setJokesChecked] = useState(true);
  const [gamesChecked, setGamesChecked] = useState(true);
  const [riddlesChecked, setRiddlesChecked] = useState(true);
  return (
    <div className="container">
      <Outlet
        context={[
          players,
          setPlayers,
          jokesChecked,
          setJokesChecked,
          gamesChecked,
          setGamesChecked,
          riddlesChecked,
          setRiddlesChecked,
        ]}
      />
    </div>
  );
}

export default App;
