import React, { Component } from 'react';
import { FaRandom } from "react-icons/fa";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./SearchBar.module.css";
import { NavLink } from "react-router-dom";

class SearchBarClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ character: event.target.value });
  }

  handleSearch = () => {
    this.props.onSearch(this.state.character);
    this.setState({ character: '' });
  }

  handleRandom = () => {
    this.props.handleRandom();
  };

  render() {
    return (
      <div className={styles.divMain}>
        <div className={styles.divLeft}>
          <NavLink exact to="/home" className={styles.link} activeClassName={styles["link--active"]}>Home</NavLink>
          <NavLink to="/about" className={styles.link} activeClassName={styles["link--active"]}>About</NavLink>
          <NavLink to="/" className={styles.link} >Logout</NavLink>
          <NavLink to="/favorites" className={styles.link}>Favorites <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} /></NavLink>
        </div>
        <div className={styles.divMid}>
          <h1 className={styles.title}>Rick and Morty APP</h1>
        </div>
        <div className={styles.divRight}>
          <input
            className={styles.inputClass}
            type='search'
            value={this.state.character}
            onChange={this.handleInputChange}
          />
          <button className={styles.buttonClass} onClick={this.handleSearch}>
            Agregar
          </button>
          <button className={styles.buttonClass} onClick={this.handleRandom}>
            <FaRandom icon='fa-solid fa-shuffle' />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBarClass;