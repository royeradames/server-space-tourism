import React, { useState } from "react";
import styles from "./destination.module.scss";
/* images */
import moom from "../../assets/destination/image-moon.webp";
import mars from "../../assets/destination/image-mars.webp";
import europa from "../../assets/destination/image-europa.webp";
import titan from "../../assets/destination/image-titan.webp";

export default function Desteination() {
  const destinationData = {
    name: "MOON",
    message: `See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11 landing
          sites.`,
    distance: "384,400 km",
    time: "3 DAYS",
    img: moom,
  };

  const [destination, setDestination] = useState(destinationData);
  /* change page data base on list selection */
  const getPlanetInfo = (planetName: string) => {
    switch (planetName) {
      case "moon":
        setDestination({
          name: "MOON",
          message: `See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11 landing
          sites.`,
          distance: "384,400 km",
          time: "3 DAYS",
          img: "assets/destination/image-moon.webp",
        });

        break;
      case "mars":
        setDestination({
          name: "MARS",
          message: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
          distance: "225 MIL. km",
          time: "9 MONTHS",
          img: mars,
        });
        break;
      case "europa":
        setDestination({
          name: "EUROPA",
          message: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
          distance: "628 MIL. km",
          time: "3 YEARS",
          img: europa,
        });
        break;
      case "titan":
        setDestination({
          name: "Titan",
          message: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
          distance: "1.6 BIL. km",
          time: "7 YEARS",
          img: titan,
        });

        break;

      default:
        setDestination({
          name: "MOON",
          message: `See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11 landing
          sites.`,
          distance: "384,400 km",
          time: "3 DAYS",
          img: "assets/destination/image-moon.webp",
        });
        break;
    }
  };

  return (
    <article className={styles["destination"]}>
      <h1 className={styles["destination-title"]}>
        <span>01</span> PICK YOUR DESTINATION
      </h1>
      <img
        src={destination.img}
        alt={destination.name}
        className={styles["destination-img"]}
      />

      <nav className={styles["destination-list"]}>
        <button
          onClick={() => getPlanetInfo("moon")}
          className={styles["planet-list-moon"]}
        >
          MOON
        </button>
        <button
          onClick={() => getPlanetInfo("mars")}
          className={styles["planet-list-mars"]}
        >
          MARS
        </button>
        <button
          onClick={() => getPlanetInfo("europa")}
          className={styles["planet-list-europa"]}
        >
          EUROPA
        </button>
        <button
          onClick={() => getPlanetInfo("titan")}
          className={styles["planet-list-titan"]}
        >
          TITAN
        </button>
      </nav>
      <h2 className={styles["destination-name"]}>{destination.name}</h2>
      <p className="destination-message">{destination.message}</p>

      <hr className={styles["destination-line"]} />
      <h2
        className={`${styles["destination-label"]} ${styles["destination-label-distance"]}`}
      >
        AVG. DISTANCE
      </h2>
      <p
        className={`${styles["destination-stats"]} ${styles["destination-stats-distance"]}`}
      >
        {destination.distance}
      </p>
      <h2
        className={`${styles["destination-label"]} ${styles["destination-label-time"]}`}
      >
        Est. travel time
      </h2>
      <p
        className={`${styles["destination-stats"]} ${styles["destination-stats-time"]}`}
      >
        {destination.time}
      </p>
    </article>
  );
}
