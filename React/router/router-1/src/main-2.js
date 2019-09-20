import React, { Component } from 'react'
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
                        {/* <Route path='/' exact component={Index} />
                        <Route path='/about' component={About} /> */}


                       
                        {/* <Route path='/about' render={(props) => <div>这个是render渲染的about页面{props}</div>} />
                        <Route path='/about' children={(props) => <div>这个是children渲染的about页面</div>} /> */}

                         <Route path="/about" children={(props) => {
                            console.log(props)
                            return <div>这个是children渲染的about页面</div>
                        }} component={About} render={(props) => {
                            console.log(props)
                            return <div>这个是render渲染的about页面</div>
                        }} />
                </div>
            </div>
        </BrowserRouter>
    )
}

ReactDom.render(<App />, document.getElementById('app'))