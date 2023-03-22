import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { FaAngleDoubleLeft } from "react-icons/fa";
const URL_BASE = "http://localhost:3001/rickandmorty"
// const API_KEY = "ae548ca5efd4.e18bd88c702829bbd7f8"

function Detail() {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});
  
    useEffect(() => {
      fetch(`${URL_BASE}/detail/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
          if (char.name) {
            setCharacter(char);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((err) => {
          window.alert("No hay personajes con ese ID");
        });
      return () => setCharacter({});
    }, [detailId]);
  
    return (
      <div className={style.container}>
        <Link to="/home" className={style.link} ><FaAngleDoubleLeft/></Link>
        <div className={style.details}>
          <img className={style.image} src={character.image} alt={character.name} />
        </div>
        <div className={style.info}>
            <h2 className={style.h2}>{character.name}</h2>
            <p className={style.p}>Status:<span className={style.span}> {character.status}</span></p>
            <p className={style.p}>Species:<span className={style.span}> {character.species}</span></p>
            <p className={style.p}>Type:<span className={style.span}> {character.type || "Unknown"}</span></p>
            <p className={style.p}>Gender:<span className={style.span}> {character.gender}</span></p>
            <p className={style.p}>Origin:<span className={style.span}> {character.origin && character.origin.name}</span></p>
            <p className={style.p}>Location:<span className={style.span}> {character.location && character.location.name}</span></p>
        </div>
      </div>
    );
  }

export default Detail;