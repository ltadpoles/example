import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import Index from './pages/index'
import List from './pages/list'
import About from './pages/about'

function App() {
    return (
        <Router>
            <ul>
                {/* <li><Link to='/'>Index</Link></li> */}
                {/* <li><Link to='/List'>List</Link></li> */}
            </ul>
            <Route path='/' exact component={Index} />
            {/* 动态传值 */}
            <Route path='/list/:id/:title' component={List} />
            <About />
        </Router>
    )
}
 
ReactDom.render(<App />, document.getElementById('app'))