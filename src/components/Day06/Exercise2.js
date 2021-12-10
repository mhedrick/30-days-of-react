import * as React from "react"

import {tile} from  '../../components/Day06/styles.module.css';

let numbers = [];

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

for(let n = 0; n < 31; n++){
    numbers[n] = hexaColor();
}

const Exercise2 = () => {
    return (
        <div className="d-flex flex-wrap mt-2">
            {numbers.map((n) => (
                <div className={tile} style={{backgroundColor: n}}>{n}</div>
            ))
            }
        </div>)
}

export default Exercise2;