import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Accordion.css";

const API_URL = import.meta.env.VITE_API_URL;

export const Accordion = () => {
  const [games, setGames] = useState([]);
  const [someTenGames, setSomeTenGames] = useState([]);
  const [someFiveGames, setSomeFiveGames] = useState([]);
  const [gamesId, setGamesId] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);
  const [mobileWidth, setMobileWidth] = useState(false);
  

  const handleToggle = (index) => setActive(index);

  const fetchGames = () => {
    axios
      .get(`${API_URL}/games`)
      .then((res) => {
        const randomGames = res.data.sort(() => {
          return Math.random() - 0.5;
        });
        return randomGames;
      })
      .then((res) => {
        const tenRandomGames = [
          res[0],
          res[1],
          res[2],
          res[3],
          res[4],
          res[5],
          res[6],
          res[7],
          res[8],
          res[9],
        ];
        const fiveRandomGames = [
          res[0],
          res[1],
          res[2],
          res[3],
          res[4],
        ];
        setSomeTenGames(tenRandomGames);
        setSomeFiveGames(fiveRandomGames)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  };

  window.onresize = ()=>{
    const windowWidth = window.innerWidth
    windowWidth < 850 ? setMobileWidth(true) : setMobileWidth(false)
    }
  

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <section className="accordions" >
      {mobileWidth ? (
        someFiveGames.map((game, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
            key={game.title}
            className={isActive}
            onClick={() => {
              !isActive ? (
                handleToggle(index)
              ) : (
                <>
                  {navigate(`/games/${game._id}`)}
                </>
              );
            }}
          >
            <img src={game.image} alt={game.title} />
            <div className="content">
              {/* <span className="material-symbols-outlined">+</span> */}
              <div>
                <h2>{game.title}</h2>
                <p>{game.company}</p>
              </div>
            </div>
          </article>
        );
      })
      ) : (
        someTenGames.map((game, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
            key={game.title}
            className={isActive}
            onClick={() => {
              !isActive ? (
                handleToggle(index)
              ) : (
                <>
                  {navigate(`/games/${game._id}`)}
                </>
              );
            }}
          >
            <img src={game.image} alt={game.title} />
            <div className="content">
              {/* <span className="material-symbols-outlined">+</span> */}
              <div>
                <h2>{game.title}</h2>
                <p>{game.company}</p>
              </div>
            </div>
          </article>
        );
      })
      )}
    </section>
  );
};
