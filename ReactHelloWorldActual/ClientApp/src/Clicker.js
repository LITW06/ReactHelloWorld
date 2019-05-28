import React from 'react';

class Clicker extends React.Component {

    constructor() {
        super();
        this.onDangerClickMe = this.onDangerClickMe.bind(this);
    }

    onWarningClick = () => {
        console.log(this.props);
    }

    onButtonClick() {
        console.log('button was clicked!');
        console.log(this.props);
    }

    onDangerClickMe() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="well">
                <button onClick={() => this.onButtonClick()} className="btn btn-primary">Click me!</button>
                <button onClick={this.onDangerClickMe} className="btn btn-danger">Danger Click me!</button>
                <button onClick={this.onWarningClick} className="btn btn-warning">Warning Click me! DO IT THIS WA
                    Y!!</button>
            </div>
        );
    }
}

export default Clicker;