import { printName, sayHello } from './printing-stuff/MyModule.js';
import reverse, { me } from "./printing-stuff/rerserver";

printName('Avrumi');

console.log(reverse(me.name));