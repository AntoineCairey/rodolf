import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./Settings.css";
import NavBar from "../components/NavBar";
import buttonImageSetting from "../assets/nextButton.svg";

const Settings = () => {
  const [
    players,
    setPlayers,
    jokesChecked,
    setJokesChecked,
    gamesChecked,
    setGamesChecked,
    riddlesChecked,
    setRiddlesChecked,
  ] = useOutletContext();

  const handleJokes = () => {
    setJokesChecked(!jokesChecked);
  };
  const handleGames = () => {
    setGamesChecked(!gamesChecked);
  };
  const handleRiddles = () => {
    setRiddlesChecked(!riddlesChecked);
  };

  return (
    <div>
      <NavBar />
      <div className="container-setting">
        <h2 className="title">Paramètres de la partie</h2>
        <div className="settings-card">
          <form>
            <label>
              <input
                type="checkbox"
                checked={jokesChecked}
                onChange={handleJokes}
              />
              Blagues
            </label>
          </form>
        </div>
        <div className="settings-card">
          <form>
            <label>
              <input
                type="checkbox"
                checked={gamesChecked}
                onChange={handleGames}
              />
              Jeux
            </label>
          </form>
        </div>
        <div className="settings-card">
          <form>
            <label>
              <input
                type="checkbox"
                checked={riddlesChecked}
                onChange={handleRiddles}
              />
              Énigmes
            </label>
          </form>
        </div>
        <div className="button-container-setting">
          <Link to="/game">
            <img
              className="background-svg-setting"
              src={buttonImageSetting}
              alt="Jouer"
            />
            <button className="next-button-setting">Jouer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
