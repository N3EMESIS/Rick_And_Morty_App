import React, { Component } from 'react';
import style from "./About.module.css";
import foto from "../../FotoYo.jpg";
import { FaFreeCodeCamp, FaLinkedin, FaGithub } from 'react-icons/fa';


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
          <span className={style.proyect}>
            Queres ver mas proyectos similares o contactarte conmigo? No hay problema!!!
            <br/>
            Aqui les dejo unos enlaces: 
          </span>
          <span className={style.proyect}>
            <a className={style.link} href="https://www.freecodecamp.org/Nemesis897" >
              <FaFreeCodeCamp className={style.icon}/>
            </a>
            <a classname={style.link} href="https://www.linkedin.com/in/lucas-idiart-b73637262/" >
              <FaLinkedin className={style.icon}/>
            </a>
            <a classname={style.link} href="https://github.com/N3EMESIS" >
              <FaGithub className={style.icon}/>
            </a>
          </span>
        </div>
      </div>
    )
  }
}

export default About;