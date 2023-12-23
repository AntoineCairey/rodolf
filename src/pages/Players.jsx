import { useState } from "react";
import "./Players.css";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import NavBar from "../components/NavBar";
import buttonImagePlayer from "../assets/nextButton.svg";

function Players() {
  const navigate = useNavigate();
  const [players, setPlayers] = useOutletContext();
  const [count, setCount] = useState(3);
  const [list, setList] = useState(new Array(count).fill(""));
  const [error, setError] = useState("");

  const handleSliderChange = (event) => {
    const num = parseInt(event.target.value);
    setCount(num);
    setList(
      num > count
        ? list.concat(new Array(num - count).fill(""))
        : list.slice(0, num)
    );
  };

  const handleNameChange = (event, index) => {
    const newList = [...list];
    newList[index] = event.target.value;
    setList(newList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (list.includes("")) {
      setError("Veuillez remplir tous les champs");
    } else if (list.length !== new Set(list).size) {
      setError("Veuillez saisir des noms différents");
    } else {
      setPlayers(list);
      navigate("/settings");
    }
  };

  return (
    <>
      <NavBar />
      {/* <div className="playercontainer"> */}
        <h1>Nouvelle partie</h1>

        <div className="slider-container">
          <label htmlFor="count">Nombre de joueurs : {count}</label>
          <input
            className="slider"
            type="range"
            id="count"
            name="count"
            min="3"
            max="10"
            value= {count}
            onChange={handleSliderChange}
          />
          <div className="slider-thumb"></div>
        </div>

        <form onSubmit={handleSubmit}>
          {list.map((player, index) => (
            <div key={index} className="playerlabel">
              <label htmlFor={"player" + index} className="player">
                Joueur {index + 1}
              </label>
              <input
                className="playerInput"
                type="text"
                id={"player" + index}
                name={"player" + index}
                /* required */
                minLength="1"
                maxLength="20"
                size="20"
                value={player}
                onChange={(event) => handleNameChange(event, index)}
              />
            </div>
          ))}
          <div className="error-message">{error}</div>
        
        <div className="button-container-players">
          {/* <Link to="/settings" onClick={() => setPlayers(list)}> */}
            <img
              className="background-svg-players"
              src={buttonImagePlayer}
              alt="Suivant"
            />
            <button type="submit" className="next-button-players">
              Suivant
            </button>
          {/* </Link> */}
        </div>
        </form>
      {/* </div> */}
    </>
  );
}

export default Players;
