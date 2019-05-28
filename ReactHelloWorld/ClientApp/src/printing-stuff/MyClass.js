
class MyClass {

    constructor(name) {
        this.name = name;
        console.log('foo');
    }

    hello() {
        console.log(`hello ${name}`);
    }
}

class MyInheritedClass extends MyClass {
    constructor() {
        super();
    }
}

const myC = new MyClass('Avrumi');
myC.hello();