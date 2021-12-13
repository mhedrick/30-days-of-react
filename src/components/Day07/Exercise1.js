import * as React from "react"

import {tile, odd, prime} from  '../../components/Day06/styles.module.css';


class Exercise1 extends React.Component {
    constructor(props){
        super(props);
        this.numbers = [];

        for(let n = 0; n < 31; n++){
            this.numbers[n] = n;
        }
    }

    isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }

    render() {
      return (
        <div className="d-flex flex-wrap mt-2">
            {this.numbers.map((n) => (
                <div className={`${tile} ${this.isPrime(n) ? prime : (n % 2 === 1 && odd)}`}>{n}</div>
            ))
            }
        </div>
      )
    }
  }

export default Exercise1