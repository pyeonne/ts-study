import {StringComposer} from '../classes/StringComposer'

const value = new StringComposer("hello")
                .add(" ")     // hello
                .add("world") // hello world
                .add("!")     // hello world!
                .multiply(3)  // hello world!hello world!hello world!hello world!
                .value()
console.log(value) // hello world!hello world!hello world!hello world!
