import React, { Component } from 'react';
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { addFavCharacter, deleteFavCharacter } from "../Redux/Actions/actions";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      isFav: false
    };
  }

//********************************************** SHOW DETAILS ******************************************************/
  
  handleClick = () => {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }));
  };

//*********************************************** CLOSE CARD ******************************************************** */
  
  handleClose = () => {
    this.props.onClose();
    this.setState({ showDetails: false });
  };

  //************************************************** FAVORITE CARD *****************************************************/
  
  handleFavorite = () => {
    const { addFavCharacter, deleteFavCharacter, id } = this.props;
    if(this.state.isFav){
      this.setState({isFav: false});
      deleteFavCharacter(id);
    } else {
      this.setState({isFav: true});
      addFavCharacter(this.props);
    }
  }

  //*************************************************** USE EFFECT DE UNA CLASE **************************************************/

  componentDidMount(){
    const { myFavorites, id } = this.props;
    for(let i = 0; i < myFavorites.length; i++){
      if(myFavorites[i].id === id){
        this.setState({isFav: true});
        break;
      }
    }
  }

  componentDidUpdate(prevProps){
    const { myFavorites, id } = this.props;
    if(prevProps.myFavorites !== myFavorites){
      myFavorites.forEach((fav) => {
        if(fav.id === id){
          this.setState({isFav: true});
        }
      })
    }
  }

  render() {
    const { name, species, gender, image, id} = this.props;
    const showDetails = this.state.showDetails;

    return (
      <div className={styles.card}>
        <div>
          {this.state.isFav ? (
            <div className={styles.containButton}>
              <button onClick={this.handleFavorite} className={styles.fav}>❤️</button>
            </div>
          ) : (
            <div className={styles.containButton}>
              <button onClick={this.handleFavorite} className={styles.fav}>🤍</button>
            </div>
          )
          }
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

const mapDispatchToProps = {
  addFavCharacter,
  deleteFavCharacter
}

const mapStateToProps = state => {
  return {
    myFavorites: state.myFavorites
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
