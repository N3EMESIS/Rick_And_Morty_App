import SearchBar from "../SearchBar/SearchBar";
import styles from "../Nav/Nav.module.css";
import React from "react";

function Nav(props) {
    return (
      <nav className={styles.navBar}>
        <SearchBar onSearch={props.onSearch} handleRandom={props.handleRandom} characters={props.characters} />
      </nav>
    )
  }

export default Nav;