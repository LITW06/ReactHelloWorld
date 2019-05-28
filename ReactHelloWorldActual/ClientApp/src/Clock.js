import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 'Some State',
            name: 'Avrumi'
        };

        setInterval(() => {
            const now = new Date().toLocaleString();
            this.setState({ time: now });
        }, 1000);
    }

    render() {
        return (
            <h1>
                {this.state.time}
            </h1>
        );
    }
}

export default Clock;