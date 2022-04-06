import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Pokemon.css";

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <li className="card">
        <section className="description">
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </section>
        <img src={image} alt="Imagem do Pokemon" />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    })
  })
  
}

export default Pokemon;

