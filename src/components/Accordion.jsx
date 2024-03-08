import { useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.webp";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";

import "./Accordion.css";

const cards = [
  {
    header: "Hogwarts Legacy",
    image: image1,
    text: `Warner Bros Games`,
  },
  {
    header: "Donkey Kong Country 3",
    image: image2,
    text: `Nintendo of America Inc`,
  },
  {
    header: "Tekken 3",
    image: image3,
    text: `Namco Studios`,
  },
  {
    header: "Mortal Kombat 11",
    image: image4,
    text: `Warner Bros Games`,
  },
  {
    header: "Super Smash Bros Ultimate",
    image: image5,
    text: `Namco Studios`,
  },
  {
    header: "It Takes Two",
    image: image6,
    text: `Hazelight Studios`,
  },
  {
    header: "Alan Wake",
    image: image7,
    text: `Remedy Entertainment`,
  },
  {
    header: "Until Dawn",
    image: image8,
    text: `Supermassive Games`,
  },
  {
    header: "Grand Theft Auto: San Andreas",
    image: image9,
    text: `Rockstar Games`,
  },
  {
    header: "Far Cry 3",
    image: image10,
    text: `Ubisoft`,
  },
];

export const Accordion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <section className="accordions">
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
            key={card.header}
            className={isActive}
            onClick={() => handleToggle(index)}
          >
            <img src={card.image} alt={card.header} />
            <div className="content">
              <span className="material-symbols-outlined">+</span>
              <div>
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
