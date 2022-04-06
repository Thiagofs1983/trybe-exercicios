import React, { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";

class Pokedex extends Component {
  render() {
    return (
      <ul className="cards-container">
        {pokemons.map((element) => (<Pokemon pokemon={element} key={element.id} />))}
      </ul>
    );
  }
}

export default Pokedex;
