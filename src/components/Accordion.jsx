import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Accordion.css";

const API_URL = import.meta.env.VITE_API_URL;

// import image1 from "../public/image1.jpg";
// import image2 from "../public/image2.jpg";
// import image3 from "../public/image3.jpg";
// import image4 from "../public/image4.jpeg";
// import image5 from "../public/image5.jpg";
// import image6 from "../public/image6.jpg";
// import image7 from "../public/image7.webp";
// import image8 from "../public/image8.jpg";
// import image9 from "../public/image9.jpg";
// import image10 from "../public/image10.jpeg";

// const cards = [
//   {
//     header: "Hogwarts Legacy",
//     image: image1,
//     text: `Warner Bros Games`,
//   },
//   {
//     header: "The Legend of Zelda",
//     image: image2,
//     text: `Nintendo`,
//   },
//   {
//     header: "Tekken 3",
//     image: image3,
//     text: `Namco Studios`,
//   },
//   {
//     header: "Mortal Kombat 11",
//     image: image4,
//     text: `Warner Bros Games`,
//   },
//   {
//     header: "Super Smash Bros Ultimate",
//     image: image5,
//     text: `Namco Studios`,
//   },
//   {
//     header: "It Takes Two",
//     image: image6,
//     text: `Hazelight Studios`,
//   },
//   {
//     header: "Alan Wake",
//     image: image7,
//     text: `Remedy Entertainment`,
//   },
//   {
//     header: "Until Dawn",
//     image: image8,
//     text: `Supermassive Games`,
//   },
//   {
//     header: "Bully",
//     image: image9,
//     text: `Rockstar Games`,
//   },
//   {
//     header: "Far Cry 6",
//     image: image10,
//     text: `Ubisoft`,
//   },
// ];

export const Accordion = () => {
  const [games, setGames] = useState([]);
  const [someGames, setSomeGames] = useState([]);
  const [gamesId, setGamesId] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  const fetchGames = () => {
    // const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/games`)
      .then((res) => {
        const randomGames = res.data.sort(() => {
          return Math.random() - 0.5;
        });
        return randomGames;

        // someGames.length <= 10 ? someGames.push(
        //   randomGames[0],
        //   randomGames[1],
        //   randomGames[2],
        //   randomGames[3],
        //   randomGames[4],
        //   randomGames[5],
        //   randomGames[6],
        //   randomGames[7],
        //   randomGames[8],
        //   randomGames[9],
        //   ) : someGames;
        // randomGames.map((game)=>{
        //   return someGames.push(randomGames.indexOf(game) < 10 && game)
        // })
        // setGames(sortedGames);
        // setSomeGames(tenRandomGames);
        // setLoading(false);
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
  // console.log(someGames);
  useEffect(() => {
    fetchGames();
  }, []);

  return (
    // <section className="accordions">
    //   {cards.map((card, index) => {
    //     const isActive = active === index ? "active" : "";
    //     return (
    //       <article
    //         key={card.header}
    //         className={isActive}
    //         onClick={() => handleToggle(index)}
    //       >
    //         <img src={card.image} alt={card.header} />
    //         <div className="content">
    //           {/* <span className="material-symbols-outlined">+</span> */}
    //           <div>
    //             <h2>{card.header}</h2>
    //             <p>{card.text}</p>
    //           </div>
    //         </div>
    //       </article>
    //     );
    //   })}
    // </section>

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
                {/* {console.log(game._id)} */}
                  {/* <Link to={`/games/${game._id}`}/> */}
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
      })}
    </section>
  );
};
