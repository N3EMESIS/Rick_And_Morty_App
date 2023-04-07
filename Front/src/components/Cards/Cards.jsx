import React, { Component } from 'react';
import Card from '../Card/Card';
import styles from "./Cards.module.css";

class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: Math.ceil(props.characters.length / 4)
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.characters !== this.props.characters){
      this.setState({
        totalPages: Math.ceil(this.props.characters.length / 4)
      });
    };
  };

  handleArrowLeft = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage - 1
    }));
  };

  handleArrowRight = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }));
  };

  render() {
    const { characters, onClose } = this.props;
    const { currentPage, totalPages } = this.state;
    const startIdx = (currentPage - 1) * 4;
    const endIdx = startIdx + 4;
    const visibleChars = characters.slice(startIdx, endIdx);
 
    return (
      <div className={styles.cardsContainer}>
        {currentPage > 1 && (
            <button onClick={this.handleArrowLeft} className={styles.arrowLeft}>
              Prev
            </button>
          )}
        {visibleChars.map(({name, species, gender, image, id}) => {
          return (
            <div key={id} className={styles.card}>
              <Card id={id} name={name} species={species} gender={gender} image={image} onClose={() => onClose(id)} />
            </div>
          )
        })}
        {currentPage < totalPages && (
          <button onClick={this.handleArrowRight} className={styles.arrowRight}>
            Next
          </button>
        )}
      </div>
    );
  }
}

export default Cards;