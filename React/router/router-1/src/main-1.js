import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const Index = () => (<div>Index页面</div>)

const About = () => (<div>About页面</div>)

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div>
                    <ul>
                        <li><Link to='/'>Index</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route path='/' exact component={Index}></Route>
                        <Route path='/about' exact component={About}></Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

ReactDom.render(<App />, document.getElementById('app'))