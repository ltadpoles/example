import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/index'
import List from './pages/list'

function App() {
    return (
        <Router>
            <ul>
                <li><Link to='/'>Index</Link></li>
                <li><Link to='/List'>List</Link></li>
            </ul>
            <Route path='/' exact component={Index} />
            {/* 动态传值 */}
            <Route path='/list' component={List} />
        </Router>
    )
}
 
ReactDom.render(<App />, document.getElementById('app'))