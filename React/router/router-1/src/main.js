import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const Index = () => (<div>Index页面</div>)

const About = () => (<div>About页面</div>)

const User = () => (<div>User页面</div>)

const App = () => {
    return (
        <Router>
            <div>
                <div>
                    <ul>
                        <li><Link to='/'>Index</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/user'>User</Link></li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route path='/' exact component={Index}></Route>
                        <Route path='/about' exact component={About}></Route>
                        <Route path='/user' exact component={User}></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

ReactDom.render(<App />, document.getElementById('app'))