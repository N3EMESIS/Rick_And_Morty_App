import React, { Component } from 'react';
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { addFavCharacter, deleteFavCharacter } from "../../Redux/Actions/actions";

function ArrowLeft (props) {
  return (
    <div className={styles.arrow} onClick={props.onClick}>{"<"}</div>
  );
};

function ArrowRight (props) {
  return (
    <div className={styles.arrow} onClick={props.onClick}>{">"}</div>
  );
};

function Pagination (props) {
  const { currentPage, totalPages, handleArrowLeft, handleArrowRight } = props;
  
  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <ArrowLeft onClick={handleArrowLeft} />
      )}
      <span>{currentPage} / {totalPages}</span>
      {currentPage < totalPages && (
        <ArrowRight onClick={handleArrowRight} />
      )}
    </div>
  )
};

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      isFav: false,
      currentPage: 1,
      totalPages: 1
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

  //*********************************************** ARROW-LEFT && ARROW-RIGHT *****************************************************/

  handleArrowLeft = () => {
    const { currentPage } = this.state;
    if(currentPage > 1){
      this.setState({ currentPage: currentPage - 1});
    }
  };

  handleArrowRight = () => {
    const { currentPage, totalPages } = this.state;
    if(currentPage < totalPages ){
      this.setState({ currentPage: currentPage + 1});
    }
  };

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
        <Pagination 
          currentPage={this.state.currentPage}
          totalpages={this.state.totalPages}
          handleArrowLeft={this.handleArrowLeft}
          handleArrowRight={this.handleArrowRight}
        />
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
