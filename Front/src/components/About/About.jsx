import React, { Component } from 'react';
import style from "./About.module.css";

class About extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <div className={style.divMain}>
        <h1 className={style.title}>About</h1>
        <p>¡Hola! Soy Lucas Idiart, el creador de esta aplicación. Me gusta mucho Rick and Morty, así que decidí hacer esta pequeña app para mostrar algunos de mis personajes favoritos. Espero que la disfrutes tanto como yo disfruté haciéndola. <strong>¡Gracias por usarla!</strong></p>
        <span className={style.proyect}>Si quieren ver todos mis proyectos aquí les dejo el <a className={style.link} href="https://www.freecodecamp.org/espanol/Nemesis897">enlace</a></span>
      </div>
    )
  }
}

export default About;