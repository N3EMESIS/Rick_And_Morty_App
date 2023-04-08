import './App.css'
import Cards from './components/Cards/Cards.jsx'
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const URL_BASE = "http://localhost:3001/rickandmorty"; // * SERVER MIO


function App() {
  // Definir el estado characters utilizando useState
  const [characters, setCharacters] = useState([]);
  // *********************************************** Cerrar y buscar ************************************************************************** //
  function onSearch(character) {
    const characterId = parseInt(character);
    const isDuplicate = characters.some((char) => char.id === characterId);

    if (isDuplicate) {
      window.alert("Ya has agregado este personaje");
      return;
    }

    fetch(`${URL_BASE}/detail/${character}`)
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
 
  //********************************************************************** Personaje random ***************************************************************//

  function handleRandom() {
    const randomId = Math.floor(Math.random() * 826) + 1;
// ! const randomId = Math.floor(Math.random() * 826) + 1;
    fetch(`${URL_BASE}/onsearch/${randomId}`)
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
  // ****************************************************************** Login  **************************************************************************************************************//
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const username = 'idiartlucas@gmail.com';
  const password = 'hola12345';
  const [isLoading, setIsLoading] = useState(false);

  function onLoaded() {
    setIsLoading(false);
  }

  function login(userData) {
    setIsLoading(true);
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      setTimeout(() => navigate('/home'), 2000);
    } else {
      alert('Usuario o contraseña incorrectos');
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!access && location.pathname !== '/') {
      navigate('/');
    }
  }, [access, location, navigate]);

  const showNav = location.pathname !== "/";

  // ************************************************************* Logout *************************************************************** //

  function logout() {
    setAccess(false);
    navigate("/");
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {isLoading ? (
        <ProgressBar onLoaded={onLoaded} /> 
      ) : (
        <>
          {showNav && <Nav onSearch={onSearch} handleRandom={handleRandom} characters={characters} logout={logout} />}
          <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/detail/:detailId" element={<Detail />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App
