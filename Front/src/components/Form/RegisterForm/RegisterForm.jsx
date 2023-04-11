import React, { useState } from "react";
import { validateUsername, validatePassword } from "../validation";
import styles from "../Form.module.css";
import axios from "axios";
const URL = "http://localhost:3001/rickandmorty"

function RegisterForm() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  function handleInputChange(event) {
    const { name, value } = event.target;

    if (name === "username") {
      const usernameError = validateUsername(value);
      setErrors((prevErrors) => ({ ...prevErrors, username: usernameError }));
    } else if (name === "password") {
      const passwordError = validatePassword(value);
      setErrors((prevErrors) => ({ ...prevErrors, password: passwordError }));
    }
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(`${URL}/login`, { username: userData.username, password: userData.password })
        .then(response => {
            console.log("Registro exitoso", response.data);
            window.location = "/"; // redirigir al usuario a la página de inicio de sesión
        })
        .catch(error => {
            console.log("Error al registrar usuario: ", error.response.data.message);
        })
    
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Registro de Usuario</h1>
      <div className={styles.item}>
        <label className={styles.label}>Username: </label>
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario..."
          className={styles.input}
          value={userData.username}
          onChange={handleInputChange}
        />
        {errors.username && (
          <div className={styles.formError}>{errors.username}</div>
        )}
      </div>
      <div className={styles.item1}>
        <label className={styles.label}>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Contraseña..."
          className={styles.input}
          value={userData.password}
          onChange={handleInputChange}
        />
        {errors.password && (
            <div className={styles.formError}>{errors.password}</div>
        )}
        </div>
        <button className={styles.button}>Registrarse</button>
    </form>
  );
}

export default RegisterForm;