import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0
        };
    }

    incrementNumber = () => {
        let { number } = this.state; //let number = this.state.number;
        number++;
        this.setState({ number });
    }

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <button className="btn btn-primary" onClick={this.incrementNumber}>Click me</button>
            </div>);
    }
}

export default Counter;