import React, { Component } from 'react';
import Card from '../Card/Card';
import styles from "./Cards.module.css";

class Cards extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    const { characters, onClose } = this.props;
    return (
      <div className={styles.cardsContainer}>
        {characters.map(({name, species, gender, image, id}) => {
          return (
            <div key={id} className={styles.card}>
              <Card id={id} name={name} species={species} gender={gender} image={image} onClose={() => onClose(id)} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default Cards;