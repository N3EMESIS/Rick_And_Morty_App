import React, { useState } from "react";
import { validateUsername, validatePassword } from "./validation";
import styles from "./Form.module.css";

function Form({ login }){
    const [userData, setUserData] = useState({username: "", password: "",});
    const [errors, setErrors] = useState({username: "", password: "",});

    function handleInputChange(event) {
        const { name, value } = event.target;

        if(name === "username"){
            const usernameError = validateUsername(value);
            setErrors(prevErrors => ({...prevErrors, username: usernameError}));
        } else if(name === "password"){
            const passwordError = validatePassword(value);
            setErrors(prevErrors => ({...prevErrors, password: passwordError}));
        }
        setUserData((prevUserData) => ({...prevUserData, [name]: value}));
    }

    function handleSubmit(event) {
        event.preventDefault();
        login(userData);
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit} >
            <h1 className={styles.title}>Iniciar Sesión</h1>
            <div className={styles.item}>
                <label className={styles.label}>Username: </label>
                <input type="text" name="username" placeholder="Nombre de usuario..." className={styles.input} value={userData.username} onChange={handleInputChange} />
                {errors.username && <div className={styles.formError}>{errors.username}</div>}
            </div>
            <div className={styles.item1}>
                <label className={styles.label}>Password: </label>
                <input type="password" name="password" placeholder="Contraseña..." className={styles.input} value={userData.password} onChange={handleInputChange} />
                {errors.password && <div className={styles.formError}>{errors.password}</div>}
            </div>
            <button className={styles.button}>Ingresar</button>
        </form>
    )
}

export default Form;