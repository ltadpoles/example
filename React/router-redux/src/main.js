import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
    return <div>Index</div>
}

function User() {
    return <div>User</div>
}

function About() {
    return <div>About</div>
}

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Router>
                <div>
                    <Link to='/'>Index</Link> <Link to='/user'>User</Link> <Link to='/about'>About</Link>

                    <Route path='/' exact component={Index} />
                    <Route path='/user' component={User} />
                    <Route path='/about' component={About} />
                </div>
            </Router>
        );
    }
}
 
ReactDom.render(<App />, document.getElementById('app'))