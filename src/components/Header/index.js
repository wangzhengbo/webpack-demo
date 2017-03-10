import React, { Component } from 'react'
import './index.less'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello, world!'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('handle click');
        this.setState({
            message: 'You clicked me.'
        });
    }

    render() {
        return (
            <div className="header">
                This is header
                <br/>
                {this.state.message}
                <br/>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default Header