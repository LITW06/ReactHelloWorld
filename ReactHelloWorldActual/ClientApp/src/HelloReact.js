import React from 'react';
import BorderBox from './BorderBox';
import Clicker from './Clicker';
import Clock from './Clock';
import Counter from './Counter';

class HelloReact extends React.Component {

    render() {
        return (
            <div className="container">
                { /* <span>It should say {this.props.times} times:</span>
                <h1>Hello React</h1>
                <BorderBox color="green" />
                <Clicker color="red"/>
                <Clock /> */}
                <Counter />
            </div>
        );
    }
}

export default HelloReact;