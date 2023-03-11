import React, { Component } from 'react';
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }));
  };

  handleClose = () => {
    this.props.onClose();
    this.setState({ showDetails: false });
  };

  render() {
    const { name, species, gender, image, id} = this.props;
    const showDetails = this.state.showDetails;

    return (
      <div className={styles.card}>
        <div>
          <button className={styles.buttonClass} onClick={this.handleClose}>
            X
          </button>
          <img className={styles.imagen} src={image} alt={name} onClick={this.handleClick} />
          <Link to={`/detail/${id}`} className={styles.link}>
            <h2 className={styles.subTitle}>{name}</h2>
          </Link>
        </div>
        {showDetails && (
          <div className={`${styles.cardDetails} ${showDetails ? 'show' : ''}`}>
            <h2 className={styles.subTitle}>Especie: {species}</h2>
            <h2 className={styles.subTitle}>Género: {gender}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Card;
