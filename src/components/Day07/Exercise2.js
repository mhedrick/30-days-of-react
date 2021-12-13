import * as React from "react"

import { tile } from '../../components/Day06/styles.module.css';

class Exercise2 extends React.Component {
    constructor(props) {
        super(props);
        this.numbers = [];

        for (let n = 0; n < 31; n++) {
            this.numbers[n] = this.hexaColor();
        }
    }

    hexaColor = () => {
        let str = '0123456789abcdef'
        let color = ''
        for (let i = 0; i < 6; i++) {
            let index = Math.floor(Math.random() * str.length)
            color += str[index]
        }
        return '#' + color
    }

    render() {
        return (
            <div className="d-flex flex-wrap mt-2">
                {this.numbers.map((n) => (
                    <div className={tile} style={{ backgroundColor: n }}>{n}</div>
                ))
                }
            </div>
        )
    }
}


export default Exercise2;