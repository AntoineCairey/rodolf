// import NavBar from "../components/NavBar";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import rodolf from "../assets/rodolf.svg";
import bienvenuelogo from "../assets/logo.svg";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div className="logoHomepage">
        <img src={bienvenuelogo} alt="rodolf" />
        <h1>s'invite chez toi</h1>
      </div>

      <button onClick={handleButtonClick} className="howButton">
        Comment ça marche ?
      </button>

      {showPopup && (
        <div className="popup-container">
          <div className="popup-card">
            <h1>Hmm, Rodolf c'est quoi ? </h1>
            <p>Salut jeune Lutin ! Marre de t'ennuyer chez Mémé pendant les fêtes de fin d'année ? Pas de panique, Rodolf débarque chez toi pour sauver ta soirée ! <br/> <br/>Il te suffit d'inscrire le nom de tous les convives autour de la table, et hop ! Chacun à son tour, vous pourrez lancer des débats insolites, partager des blagues, résoudre des énigmes en famille, et bien plus encore... <br/> <br/> Enfin l'occasion rêvée de débattre de cette fameuse pizza à l'ananas que ton oncle adore ! Fini l'ennui, place à l'amusement en famille ! <br/> <br/> Prêt à transformer ta soirée ?   </p>
            <button onClick={handleClosePopup} className="close-button">
              Fermer
            </button>
          </div>
        </div>
      )}
      
        <Link to="/players" className="newgamebutton">
          Nouvelle partie
          {/* <button className="newgamebutton">Nouvelle partie</button> */}
        </Link>
        <img className="rodolf" src={rodolf} alt="bouton retour" />
      
    </>
  );
}

export default Home;
