import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Private extends Component {

    render() {
        return (
            <div>
                <h1>Sorry, the steam account was private</h1>
                <Link to='/'>
                    <button type="submit" className="ui button">Back</button>
                </Link>
            </div>
        );
    }
}

export default Private;