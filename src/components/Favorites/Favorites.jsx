import React, { Component } from "react";
import { connect } from "react-redux";
import { orderCards, filterCards } from "../../Redux/Actions/actions";
import styles from "./Favorites.module.css";

class Favorites extends Component {
    handleOrderChange = (event) => {
        this.props.orderCards(event.target.value);
    }

    handleFilterChange = (event) => {
        const value = event.target.value;
        if(value === "Todos"){
            this.props.showAllCards();
        } else {
            this.props.filterCards({ gender: value });
        }
    }

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
                <div className={styles.selectorsContainer}>
                    <div className={styles.divSelect}>
                        <label htmlFor="order" className={styles.label}>Ordenar: </label>
                        <select name="order" onChange={this.handleOrderChange} className={styles.selectOrder} >
                            <option value="Ascendente" className={styles.option}>Ascendente</option>
                            <option value="Descendente" className={styles.option}>Descendente</option>
                        </select>
                    </div>
                    <div className={styles.divSelect}>
                        <label htmlFor="filter" className={styles.label}>Filtrar: </label>
                        <select name="filter" onChange={this.handleFilterChange} className={styles.selectFilter} >
                            <option value="Todos" className={styles.option}>Todos</option>
                            <option value="Male" className={styles.option}>Male</option>
                            <option value="Female" className={styles.option}>Female</option>
                            <option value="Genderless" className={styles.option}>Genderless</option>
                            <option value="unknown" className={styles.option}>unknown</option>
                        </select>
                    </div>
                </div>
                <div className={styles.mainDiv}>
                    {characterList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        myFavorites: state.myFavorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        orderCards: (value) => dispatch(orderCards(value)),
        filterCards: (value) => dispatch(filterCards(value)),
        showAllCards: () => dispatch({type: "ALL_FILTER"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);