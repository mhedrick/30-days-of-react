import * as React from "react"
import Button from 'react-bootstrap/Button';

import { tile, odd, prime } from '../../components/Day06/styles.module.css';


class Exercise1 extends React.Component {
    randomNumber = () => Math.floor(Math.random() * 100);
    state = {
        number: this.randomNumber()
    };
    isPrime = num => {
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    label = () => this.state.number 

    changeNumber = () => this.setState({ number: this.randomNumber() });

    render() {
        return (
            <div className="d-flex flex-column mt-2">
                <div className="d-flex justify-content-center rounded">
                    <div className={`${tile} ${this.isPrime(this.state.number) ? prime : (this.state.number % 2 === 1 ? odd : "")}`}>{this.state.number}</div>
                </div>
                <p className="text-center">
                {`${this.state.number} is ${this.isPrime(this.state.number) ? 'prime' : (this.state.number % 2 === 1 ? 'odd' : 'even')}`}
                </p>
                <div className="d-flex justify-content-center">
                    <Button variant="primary" size="lg" onClick={this.changeNumber}>Randomize!!</Button>
                </div>
            </div>
        )
    }
}

export default Exercise1