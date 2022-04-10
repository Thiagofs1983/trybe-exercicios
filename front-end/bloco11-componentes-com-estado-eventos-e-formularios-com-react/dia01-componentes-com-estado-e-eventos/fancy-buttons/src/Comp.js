import React, { Component } from "react";
import Proptypes from 'prop-types';

class Comp extends Component {
  render() {
    const { headline } = this.props
    return <h1>{headline}</h1>
  }
}

Comp.propTypes = {
    headline: Proptypes.string.isRequired,
}

export default Comp;
