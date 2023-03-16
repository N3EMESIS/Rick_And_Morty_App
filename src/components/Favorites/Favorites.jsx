import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Favorites.module.css";

class Favorites extends Component {
    render() {
        const { myFavorites } = this.props;
        const characterList = myFavorites.map((character) => {
            return(
                <div key={character.id} className={styles.card}>
                    <div className={styles.cardDetail}>
                        <img src={character.image} alt={character.name} className={styles.imagen}/>
                        <h2 className={styles.subTitle}>{character.name}</h2>
                        <h2 className={styles.subTitle}>{character.species}</h2>
                        <h2 className={styles.subTitle}>{character.gender}</h2>
                    </div>
                </div>
            )
        })
        return(
            <div className={styles.container}>
                {characterList}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites);