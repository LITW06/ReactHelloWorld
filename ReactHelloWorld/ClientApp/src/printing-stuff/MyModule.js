import { stuff } from '../other-module.js';

function printName(name) {
    stuff();
    console.log(name + " " + name);
}

function sayHello() {
    console.log('hello');
}

export { printName, sayHello };