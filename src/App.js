import './App.css'
//import {Switch, Route} from "react-router-dom";
import Cards from './components/Cards/Cards.jsx'
import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
//import About from "./components/About/About";
//import Detail from "./components/Detail/Detail";
const URL_BASE = "https://rickandmortyapi.com/api";
const API_KEY = "ae548ca5efd4.e18bd88c702829bbd7f8";

function App() {
  // Definir el estado characters utilizando useState
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    const characterId = parseInt(character);
    const isDuplicate = characters.some((char) => char.id === characterId);

    if (isDuplicate) {
      window.alert("Ya has agregado este personaje");
      return;
    }

    fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  }

  function handleRandom() {
    const randomId = Math.floor(Math.random() * 826) + 1;

    fetch(`${URL_BASE}/character/${randomId}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        // Controlar que no se puedan agregar personajes repetidos
        const isDuplicate = characters.some((char) => char.id === data.id);

        if (isDuplicate) {
          window.alert("Ya has agregado este personaje");
          return;
        }

        // Agregar el personaje al estado de characters
        setCharacters((oldChars) => [...oldChars, data]);
      });
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch} handleRandom={handleRandom} characters={characters} />
      </div>
      <hr />
        <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App
