import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Header.css'

export default class Header extends Component {
    render() {
        const { logo } = this.props
        return (
            <header>
                <img
                  src={ logo }
                  alt="logo"
                  className="image"
                />
                <h1 className="title">Trybem Estar</h1>
            </header>
        )
    }
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
}