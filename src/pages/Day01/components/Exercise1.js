import * as React from "react";
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';
import javascript from 'highlight.js/lib/languages/javascript';
import { Fragment } from "react";

hljs.registerLanguage('javascript', javascript);

let html = hljs.highlight(`
let dog = { };
console.log(dog);

// set default values
dog.name = "";
dog.legs = 0;
dog.color = "";
dog.age = 0;
dog.bark = () => "woof woof";
dog.breed = "";
dog.getDogInfo = () => { 
    return {
            name: this.name,
            legs: this.legs,
            color: this.color,
            age: this.age,
            breed: this.breed
    }
};
console.log(dog);`, {language: 'javascript'}).value

const Exercise1 = () => {
    return (
        <Fragment>
            <h1>Exercise 1</h1>
            <pre>
                <code dangerouslySetInnerHTML={{__html: html }}>
                </code>
            </pre>
        </Fragment>
    )
}

export default Exercise1
