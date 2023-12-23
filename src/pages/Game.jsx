import React from "react";
import "./Game.css";
import { useState, useEffect } from "react";
import buttonImage from "../assets/nextButton.svg";
import NavBar from "../components/NavBar";
import { useOutletContext } from "react-router-dom";
import rodolf from "../assets/rodolf.svg";
import blague from "../data/blague.json";
import enigme from "../data/enigme.json";
import jeu from "../data/jeu.json";

const gameData = { blague, enigme, jeu };

const Game = () => {
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

  const [playerIndex, setPlayerIndex] = useState(0);
  const [category, setCategory] = useState("");
  const [data, setData] = useState({});
  const [showSolution, setShowSolution] = useState(false);

  const categories = [];
  if (jokesChecked) {
    categories.push("blague");
  }
  if (gamesChecked) {
    categories.push("jeu");
  }
  if (riddlesChecked) {
    categories.push("enigme");
  }

  const handleNext = () => {
    setPlayerIndex(playerIndex === players.length - 1 ? 0 : playerIndex + 1);
    const randomIndex = Math.floor(Math.random() * categories.length);
    setCategory(categories[randomIndex]);
    fetchData(categories[randomIndex]);
    setShowSolution(false);
  };

  /* const fetchData = async (category) => {
    try {
      const response = await fetch("http://localhost:8000/api/" + category);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des données :",
        error.message
      );
    }
  }; */

  const fetchData = (category) => {
    const randomNb = Math.floor(Math.random() * category.length);
    setData(gameData[category][randomNb]);
  };

  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  useEffect(() => {
    setCategory(randomCategory);
    fetchData(randomCategory);
  }, []);

  return (
    <>
      <NavBar />
      <div className="container-game">
        {/* <img className="rodolf-game" src={rodolf} alt="Un reine" /> */}
        <h2 className="title tour">À ton tour :</h2>
        <h1 className="title">{players[playerIndex]}</h1>

        {data && (
          <h3 className="title-game">
            Défi {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>
        )}
        <div className="card">
          {(category === "blague" || category === "enigme") && (
            <>
              {category === "enigme" && (
                <div className="light-text">Niveau : {data.niveau}</div>
              )}
              <div>{data.texte}</div>
              <div className="solution">
                {!showSolution && (
                  <button
                    className="show-button"
                    onClick={() => setShowSolution(true)}
                  >
                    Afficher la réponse
                  </button>
                )}
                {showSolution && <div>{data.reponse}</div>}
              </div>
            </>
          )}

          {category === "jeu" && (
            <>
              <h4>{data.nom}</h4>
              <div className="light-text">{data.regles}</div>
              <div>Durée : {data.duree} min</div>
            </>
          )}
        </div>

        <div className="button-container">
          <img className="background-svg" src={buttonImage} alt="Suivant" />
          <button onClick={handleNext} className="next-button">
            Suivant
          </button>
        </div>
      </div>
    </>
  );
};

export default Game;
