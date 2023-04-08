import React, { Component } from 'react';
import style from "./About.module.css";
import foto from "../../FotoYo.jpg";

class About extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <div className={`${style.divMain} ${style.borderAnimation}`}>
        <h2 className={style.title}>Lucas E. Idiart: Fullstack Web Developer</h2>
        <img className={style.img} src={foto} alt="Foto mia"></img>
        <div className={style.container}>
          <p className={style.p}>¡Hola! Soy Lucas Idiart, el creador de esta aplicación. Me gusta mucho Rick and Morty, así que decidí hacer esta pequeña app para mostrar algunos de mis personajes favoritos. Espero que la disfrutes tanto como yo disfruté haciéndola. <strong>¡Gracias por usarla!</strong></p>
          <span className={style.proyect}>Si quieren ver todos mis proyectos aquí les dejo el <a className={style.link} href="https://www.freecodecamp.org/espanol/Nemesis897">enlace</a>.</span>
          <br />
          <span className={style.proyect}>Quieres que forme parte de tu equipo ? Sin ningun problema!!! Aqui les dejo el link a mi perfil de <a className={style.link} href="https://www.linkedin.com/in/lucas-idiart-b73637262/">Linkedin</a>.</span>
        </div>
      </div>
    )
  }
}

export default About;