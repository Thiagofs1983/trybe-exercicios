import React, { Component } from "react";
import Proptypes from 'prop-types';
import './Button.css'

class Button extends Component {
    render() {
        const { toggleTimer, textTimer } = this.props;
        return (
            <button
              className="btnLigaDesliga"
              type="button"
              onClick={ toggleTimer }
            >
                { textTimer }
            </button>
        )
    }
}

Button.propTypes = {
    toggleTimer: Proptypes.func.isRequired,
    textTimer: Proptypes.string.isRequired,
}

export default Button;
