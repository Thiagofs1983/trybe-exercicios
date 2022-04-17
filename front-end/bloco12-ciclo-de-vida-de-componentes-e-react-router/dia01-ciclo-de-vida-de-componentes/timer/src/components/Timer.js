import React, { Component } from "react";
import Proptypes from 'prop-types';
import './Timer.css'

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            seconds: 0,
            text: ['Inspire...', 'Segure...', 'Expire...'],
            indexText: 0,
        }
    }

    componentDidMount() {
        const ONE_SECOND = 1000;
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                seconds: prevState.seconds + 1,
            }))
        }, ONE_SECOND)
    }

    componentDidUpdate(prevProps, prevState) {
        const { text } = this.state
        const FIVE_SECONDS = 5;
        if (prevState.seconds === FIVE_SECONDS) {
            this.setState({
                seconds: 0,
                indexText: prevState.indexText === text.length -1 ? 0 : prevState.indexText + 1,
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { seconds, text, indexText } = this.state
        return (
            <section className="timer-container">
                <h1 className="title">{ text[indexText] }</h1>
                <h2 className="seconds">{ seconds }</h2>
            </section>
        )
    }
}

Timer.protoType = {
    seconds: Proptypes.number.isRequired,
}

export default Timer;
