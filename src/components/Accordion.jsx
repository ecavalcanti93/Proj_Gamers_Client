import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Accordion.css";

const API_URL = import.meta.env.VITE_API_URL;

export const Accordion = () => {
  const [games, setGames] = useState([]);
  const [someGames, setSomeGames] = useState([]);
  const [gamesId, setGamesId] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

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
        setSomeGames(tenRandomGames);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  };
  useEffect(() => {
    fetchGames();
  }, []);

  return (

    <section className="accordions">
      {someGames.map((game, index) => {
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
              <div>
                <h2>{game.title}</h2>
                <p>{game.company}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
