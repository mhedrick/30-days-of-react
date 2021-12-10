import * as React from "react"

import {tile, odd, prime} from  '../../components/Day06/styles.module.css';

let numbers = [];

for(let n = 0; n < 31; n++){
    numbers[n] = n;
}

//shamelessly taken from stack overflow
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

const Exercise1 = () => {
    return (
        <div className="d-flex flex-wrap mt-2">
            {numbers.map((n) => (
                <div className={`${tile} ${isPrime(n) ? prime : (n % 2 === 1 && odd)}`}>{n}</div>
            ))
            }
        </div>)
}

export default Exercise1