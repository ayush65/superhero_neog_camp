import React from "react";
import "./styles.css";
import { useState } from "react";

const superheroDB = {
  Marvel_Superhero: [
    {
      name: "Captain Amarica ",
      desc: " agility, strength, speed, endurance, and reaction time",
      rating: "5/5"
    },
    {
      name: "Iron Man",
      desc: "	Genius level intellect Proficient scientist and engineer",
      rating: "5/5"
    },
    {
      name: "Black Widow ",
      desc:
        "master in the covert arts of espionage, infiltration, and subterfuge",
      rating: "3/5"
    },
    {
      name: "Hulk  ",
      desc:
        "Invulnerability Superhuman strength, speed, stamina, and durability Anger empowerment Regeneration",
      rating: "5/5"
    },
    {
      name: "Spiderman",
      desc:
        "Superhuman strength, speed, reflexes, agility, coordination and balance Ability to cling",
      rating: "4/5"
    },
    {
      name: "Black panther",
      desc:
        "superhumanly acute senses, enhanced strength, speed, agility, stamina, durability, healing, and reflexes.",
      rating: "5/5"
    },
    {
      name: "Doctor Strange",
      desc:
        "Strange can induce hypnotic trances, instill opponents with fear, probe their thoughts, communicate telepathically with allies, immobilize people completely, and wipe their minds",
      rating: "5/5"
    },
    {
      name: "Thor",
      desc: "	Superhuman strength, speed, durability and longevity Abilities",
      rating: "5/5"
    }
  ],

  DC_Superhero: [
    {
      name: "Batman",
      desc:
        "Genius intellect Expert detective Skilled martial artist and hand-to-hand combatant Master tactician",
      rating: "5/5"
    },
    {
      name: "Superman",
      desc: "superhuman strength, x-ray vision, heat vision, cold breath",
      rating: "5/5"
    },
    {
      name: "Wonder Women",
      desc: "superior strength, speed, and agility",
      rating: "5/5"
    },
    {
      name: "Aquaman",
      desc:
        "Superhuman strength, durability, endurance, speed, agility, reflexes, and senses Telepathic control ",
      rating: "4/5"
    },
    {
      name: "Flash",
      desc: " superhuman speed",
      rating: "4/5"
    },
    {
      name: "Joker",
      desc: " no superhuman abilities",
      rating: "5/5"
    }
  ],

  Indian_Superhero: [
    {
      name: "Krrish",
      desc: "incredible strength, speed, reflexes, agility, stamina and senses",
      rating: "4/5"
    },
    {
      name: "Shaktiman",
      desc:
        "Attractive male, Divine powers, Healing, Heat generation, Light projection, Invisiblity",
      rating: "5/5"
    },
    {
      name: "Flying Jatt",
      desc: "enhanced strength, speed and flight",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Marvel_Superhero");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🦸 Superhero </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite superhero Collection. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(superheroDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#ffffff",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {superheroDB[selectedGenre].map((superheroDB) => (
            <li
              key={superheroDB.name}
              style={{
                listStyle: "none",
                padding: "1.5rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {superheroDB.name} </div>
              <div style={{ fontSize: "smaller" }}> {superheroDB.desc} </div>
              <div style={{ fontSize: "smaller" }}> {superheroDB.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
