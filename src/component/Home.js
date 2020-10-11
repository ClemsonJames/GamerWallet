import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {id: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({id: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.history.push(`/dashboard/${this.state.id}`)
    }

    render() {
        return (
            <div className="ui center aligned middle aligned grid" style={{height: "80vh"}}>
                <div className="column" style={{maxWidth: "450px"}}>
                    <div className="ui segment">
                        <form className="ui large form" onSubmit={this.handleSubmit}>
                            <div className="field">
                                <label>
                                    Enter Your Steam ID
                                </label>
                                <input type="text" value={this.state.id} onChange={this.handleChange} required/>
                            </div>
                            <div>
                                <button type="submit" className="ui button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;