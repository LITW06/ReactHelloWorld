import React from 'react';

class BorderBox extends React.Component {

    render() {

        const styles = {
            width: 100,
            height: 100,
            backgroundColor: this.props.color,
            marginLeft: 30
        };

        return (
            <div style={styles}>
                this is a box
            </div>
            );
    }
}

export default BorderBox;